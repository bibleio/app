"use client";

import React, { useEffect, useState } from "react";
import { Select, SelectGroup, SelectItem, SelectLabel } from "./ui/Select";
import { useParams, useRouter } from "next/navigation";

interface Bible {
  name: string;
  id: string;
  abbreviation: string;
  description: string;
  language: {
    name: string;
  };
}

type SortedLanguageGroupsType = {
  [key: string]: Bible[];
};

const SelectBible: React.FC = () => {
  const router = useRouter();
  const params = useParams();

  const [bibles, setBibles] = useState<Bible[]>([]);
  const [loading, setLoading] = useState(true);
  const [languageGroups, setLanguageGroups] = useState<{
    [key: string]: Bible[];
  }>({});

  const bookId = params?.slug?.[1] ?? null;
  const chapterAbbrev = params?.slug?.[2] ?? null;

  const handleSelectionChange = (value: string) => {
    let bibleId = "null";
    let bibleAbbrev = "null";
    if (value) {
      [bibleId, bibleAbbrev] = value.split(":");
    }
    if (bookId && chapterAbbrev) {
      router.push(`/bible/${bibleId}/${bookId}/${chapterAbbrev}`);
    } else if (bookId) {
      router.push(`/bible/${bibleId}/${bookId}`);
    } else {
      router.push(`/bible/${bibleId}`);
    }
  };

  useEffect(() => {
    const endpoint = "/bibles";
    const apiUrl = `/api/bible?endpoint=${encodeURIComponent(endpoint)}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBibles(data.data);
        setLoading(false);

        const languageGroups = data.data.reduce((acc: any, bible: any) => {
          const langKey = bible.language.name;
          if (!acc[langKey]) {
            acc[langKey] = [];
          }
          acc[langKey].push(bible);
          return acc;
        }, {} as { [key: string]: Bible[] });

        const sortedLanguages = Object.keys(languageGroups).sort((a, b) => {
          if (a.toLowerCase() === "english") return -1;
          if (b.toLowerCase() === "english") return 1;
          return a.localeCompare(b);
        });

        const sortedLanguageGroups: SortedLanguageGroupsType = {};
        sortedLanguages.forEach((lang) => {
          sortedLanguageGroups[lang] = languageGroups[lang];
        });

        setLanguageGroups(sortedLanguageGroups);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Select label="Bible Version" disabled>
        <SelectGroup>
          <SelectItem value="disabled">disabled</SelectItem>
        </SelectGroup>
      </Select>
    );
  }

  return (
    <Select label="Bible Version" onValueChange={handleSelectionChange}>
      {Object.entries(languageGroups).map(([language, bibles], index) => (
        <React.Fragment key={language}>
          <SelectGroup>
            <SelectLabel>{language}</SelectLabel>
            {bibles.map((bible) => (
              <SelectItem
                value={`${bible.id}:${bible.abbreviation}`}
                key={bible.id}
              >
                <div className="flex flex-col gap-4">
                  <p className="body">{bible.name}</p>
                  <p className="subtext">{bible.description}</p>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </React.Fragment>
      ))}
    </Select>
  );
};

export default SelectBible;
