"use client";

import React, { useEffect, useState } from "react";
import {
  SelectTextTrigger,
  SelectGroupTextTrigger,
  SelectItemTextTrigger,
  SelectLabelTextTrigger,
} from "./ui/SelectTextTrigger";
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

  const book = params?.slug?.[1] ?? null;
  const chapter = params?.slug?.[2] ?? null;

  const handleSelectionChange = (value: string) => {
    if (book && chapter) {
      router.push(`/bible/${value}/${book}/${chapter}`);
    } else if (book) {
      router.push(`/bible/${value}/${book}`);
    } else {
      router.push(`/bible/${value}`);
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
      });
  }, []);

  if (loading) {
    return (
      <SelectTextTrigger
        label="Bible Version"
        disabled
        triggerHtml={"Bible Version"}
      >
        <SelectGroupTextTrigger>
          <SelectItemTextTrigger value="disabled">
            disabled
          </SelectItemTextTrigger>
        </SelectGroupTextTrigger>
      </SelectTextTrigger>
    );
  }

  return (
    <SelectTextTrigger
      label="Bible Version"
      triggerHtml={
        params?.slug?.[0]
          ? decodeURIComponent(params.slug[0]).split(":")[1].toUpperCase()
          : "Bible Version"
      }
      onValueChange={handleSelectionChange}
    >
      {Object.entries(languageGroups).map(([language, bibles], index) => (
        <React.Fragment key={language}>
          <SelectGroupTextTrigger>
            <SelectLabelTextTrigger>{language}</SelectLabelTextTrigger>
            {bibles.map((bible) => (
              <SelectItemTextTrigger
                value={`${bible.id}:${bible.abbreviation}`}
                key={bible.id}
              >
                <div className="flex flex-col gap-4">
                  <p className="body">{bible.name}</p>
                  <p className="subtext">{bible.description}</p>
                </div>
              </SelectItemTextTrigger>
            ))}
          </SelectGroupTextTrigger>
        </React.Fragment>
      ))}
    </SelectTextTrigger>
  );
};

export default SelectBible;
