"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from "./ui/Select";

interface Chapter {
  number: string;
  id: string;
}

interface SelectChapterProps {
  selectedBible: string | null;
  selectedBook: string | null;
  onChapterSelection: (value: string) => void;
}

const SelectChapter: React.FC<SelectChapterProps> = ({
  selectedBible,
  selectedBook,
  onChapterSelection,
}) => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);

  // Get Bible ID

  let bibleId = "null";
  let bibleAbbrev = "null";
  if (selectedBible) {
    [bibleId, bibleAbbrev] = selectedBible.split(":");
  }

  // Get Book ID

  let bookId = "null";
  let bookAbbrev = "null";
  if (selectedBook) {
    [bookId, bookAbbrev] = selectedBook.split(":");
  }

  // Handle chapter selection

  const handleSelectionChange = (value: string) => {
    onChapterSelection(value);
  };

  useEffect(() => {
    if (selectedBible && selectedBook) {
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
          setLoading(false);
        });
    }
  }, [bibleId, bookId]);

  if (loading) {
    return <p className="body">loadinggg</p>;
  }

  return (
    <Select label="1" onValueChange={handleSelectionChange}>
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
