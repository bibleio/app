"use client";

import React, { useEffect, useState } from "react";
import * as Select from "@radix-ui/react-select";
import { IconCheck, IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import Loading from "./ui/Loading";
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
          console.error("Error:", error);
          setLoading(false);
        });
    }
  }, [bibleId]);

  if (loading) {
    return (
      <Select.Root>
        <Select.Trigger className="flex gap-8 items-center disabled:text-black/30 disabled:cursor-not-allowed enabled:hover:-translate-y-[1px] enabled:active:translate-y-4 hover:text-accent duration-200 ease-out  outline-none">
          <h3 className="text-3 font-medium">Book</h3>
          <IconChevronDown />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden bg-fg-1 rounded-[12px] backdrop-blur-lg border border-stroke-1">
            <Select.ScrollUpButton className="flex items-center justify-center h-[25px]">
              <IconChevronUp />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-16">
              <Loading />
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-[25px]">
              <IconChevronDown />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  }

  return (
    <Select.Root onValueChange={handleSelectionChange}>
      <Select.Trigger className="flex gap-8 items-center disabled:text-black/30 disabled:cursor-not-allowed enabled:hover:-translate-y-[1px] enabled:active:translate-y-4 hover:text-accent duration-200 ease-out outline-none">
        <h3 className="text-3 font-medium">Book</h3>
        <IconChevronDown />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="overflow-hidden relative bg-fg-1 rounded-[12px] h-[25vh] backdrop-blur-lg border border-stroke-1"
          align="start"
        >
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px]">
            <IconChevronUp />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-6">
            <Select.Group>
              {books && books.length > 0 ? (
                books.map((book) => (
                  <SelectItem
                    className="flex flex-col gap-6 group"
                    value={`${book.id}:${book.name}`}
                    key={book.id}
                  >
                    <p className="text-body">{book.name}</p>
                  </SelectItem>
                ))
              ) : (
                <p className="text-body text-red-700">
                  Error code 89 <br /> No books returned from API
                </p>
              )}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px]">
            <IconChevronDown />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

interface SelectItemProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className="text-body leading-none flex items-center h-[40px] pr-32 pl-32 relative cursor-pointer ease-out duration-200 hover:text-accent hover:translate-x-6 outline-none"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <IconCheck />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default SelectBook;
