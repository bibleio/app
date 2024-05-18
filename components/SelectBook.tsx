"use client";

import React, { useEffect, useState } from "react";
import SelectItem from "./ui/SelectItem";
import Loading from "./ui/Loading";
import * as Select from "@radix-ui/react-select";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
interface Book {
  name: string;
  id: string;
}
interface SelectBookProps {
  selectedBible: string | null;
  onBookSelection: (value: string) => void;
}

const SelectBook: React.FC<SelectBookProps> = ({
  selectedBible,
  onBookSelection,
}) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  let bibleId = "null";
  let bibleAbbrev = "null";
  if (selectedBible) {
    [bibleId, bibleAbbrev] = selectedBible.split(":");
  }

  const handleSelectionChange = (value: string) => {
    onBookSelection(value);
  };

  useEffect(() => {
    if (selectedBible) {
      const endpoint = `/bibles/${bibleId}/books`;
      const apiUrl = `/api/bible?endpoint=${encodeURIComponent(endpoint)}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setBooks(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
          setLoading(false);
        });
    }
  }, [bibleId]);

  if (loading) {
    return (
      <Select.Root>
        <Select.Trigger
          className="flex gap-8 w-fit items-center disabled:text-black/30 disabled:cursor-not-allowed enabled:hover:-translate-y-[1px] enabled:active:translate-y-4 hover:text-accent duration-200 ease-out  outline-none"
          aria-label="Book"
        >
          <Select.Value className="text-body truncate" placeholder="Book" />
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
        aria-label="Book"
      >
        <Select.Value className="text-body truncate" placeholder="Genesis" />
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
            <Select.Group className="flex flex-col items-start">
              {books && books.length > 0 ? (
                books.map((book) => (
                  <SelectItem
                    className="flex flex-col gap-6 group"
                    value={`${book.id}:${book.name}`}
                    key={book.id}
                  >
                    {book.name}
                  </SelectItem>
                ))
              ) : (
                <p className="text-body text-red-700">
                  Error code 89 <br /> No books returned from API
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

export default SelectBook;
