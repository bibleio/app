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

  const bible = decodeURIComponent(params?.slug?.[0] ?? "");
  const book = decodeURIComponent(params?.slug?.[1] ?? "");

  const handleSelectionChange = (value: string) => {
    router.push(`/bible/${bible}/${book}/${value}`);
  };

  useEffect(() => {
    if (bible && book) {
      const endpoint = `/bibles/${bible.split(":")[0]}/books/${
        book.split(":")[0]
      }/chapters`;
      const apiUrl = `/api/bible?endpoint=${encodeURIComponent(endpoint)}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setChapters(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [bible, book]);

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
              <p className="body capitalize">{chapter.number}</p>
            </SelectItem>
          ))
        ) : (
          <p className="body">Select a book or Bible version first.</p>
        )}
      </SelectGroup>
    </Select>
  );
};

export default SelectChapter;
