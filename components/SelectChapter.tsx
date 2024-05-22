"use client";

import React, { useEffect, useState } from "react";
import { Select, SelectGroup, SelectItem } from "./ui/Select";
import { useParams, useRouter } from "next/navigation";

interface Chapter {
  number: string;
  id: string;
}

const SelectChapter: React.FC = () => {
  const router = useRouter();
  const params = useParams();

  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);

  const bibleId = params?.slug?.[0] ?? null;
  const bookId = params?.slug?.[1] ?? null;

  const handleSelectionChange = (value: string) => {
    let chapterId = "null";
    let chapterAbbrev = "null";
    if (value) {
      [chapterId, chapterAbbrev] = value.split(":");
    }
    router.push(`/bible/${bibleId}/${bookId}/${chapterAbbrev}`);
  };

  useEffect(() => {
    const endpoint = `/bibles/${bibleId}/books/${bookId}/chapters`;
    const apiUrl = `/api/bible?endpoint=${encodeURIComponent(endpoint)}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setChapters(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(true);
      });
  }, [bibleId, bookId]);

  if (loading) {
    return (
      <Select label="Chapter" disabled>
        <SelectGroup>
          <SelectItem value="disabled">disabled</SelectItem>
        </SelectGroup>
      </Select>
    );
  }

  return (
    <Select label="Chapter" onValueChange={handleSelectionChange}>
      <SelectGroup>
        {chapters && chapters.length > 0 ? (
          chapters.map((chapter) => (
            <SelectItem
              value={`${chapter.id}:${chapter.number}`}
              key={chapter.id}
            >
              <p className="text-body capitalize">{chapter.number}</p>
            </SelectItem>
          ))
        ) : (
          <p className="text-body text-red-700">
            Error code 89 <br /> No chapters returned from API <br /> No bibleId
            or bookId?
          </p>
        )}
      </SelectGroup>
    </Select>
  );
};

export default SelectChapter;
