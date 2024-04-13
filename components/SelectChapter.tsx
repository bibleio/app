"use client";

import React, { useEffect, useState } from "react";
import SelectItem from "./ui/SelectItem";
import Loading from "./ui/Loading";
import * as Select from "@radix-ui/react-select";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

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
    return (
      <Select.Root>
        <Select.Trigger
          className="flex gap-8 w-fit items-center disabled:text-black/30 disabled:cursor-not-allowed enabled:hover:-translate-y-[1px] enabled:active:translate-y-4 hover:text-accent duration-200 ease-out  outline-none"
          aria-label="Chapter"
        >
          <Select.Value className="text-body truncate" placeholder="Chapter" />
          <Select.Icon>
            <IconChevronDown />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden z-50 bg-fg-1 border border-stroke-1 rounded-[12px] backdrop-blur-2xl">
            <Select.ScrollUpButton className="flex items-center justify-center h-24 bg-fg-1 cursor-default">
              <IconChevronUp />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-12">
              <Select.Group>
                <Loading />
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-24 bg-fg-1 cursor-default">
              <IconChevronDown />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  }

  return (
    <Select.Root onValueChange={handleSelectionChange}>
      <Select.Trigger
        className="flex gap-8 w-fit items-center disabled:text-black/30 disabled:cursor-not-allowed enabled:hover:-translate-y-[1px] enabled:active:translate-y-4 hover:text-accent duration-200 ease-out  outline-none"
        aria-label="Chapter"
      >
        <Select.Value className="text-body truncate" placeholder="1" />
        <Select.Icon>
          <IconChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden z-50 bg-fg-1 border border-stroke-1 rounded-[12px] backdrop-blur-2xl">
          <Select.ScrollUpButton className="flex items-center justify-center h-24 bg-fg-1 cursor-default">
            <IconChevronUp />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-12">
            <Select.Group>
              {chapters && chapters.length > 0 ? (
                chapters.map((chapter) => (
                  <SelectItem
                    className="flex flex-col gap-6 group"
                    value={`${chapter.id}:${chapter.number}`}
                    key={chapter.id}
                  >
                    <p className="text-body capitalize">{chapter.number}</p>
                  </SelectItem>
                ))
              ) : (
                <p className="text-body text-red-700">
                  Error code 89 <br /> No chapters returned from API <br /> No
                  bibleId or bookId?
                </p>
              )}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-24 bg-fg-1 cursor-default">
            <IconChevronDown />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SelectChapter;
