"use client";

import React, { useEffect, useState } from "react";
import * as Select from "@radix-ui/react-select";
import { IconCheck, IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import Loading from "./ui/Loading";

interface Bible {
  name: string;
  id: string;
  abbreviation: string;
  description: string;
  language: {
    name: string;
  };
}
interface SelectBibleProps {
  onBibleSelection: (value: string) => void;
}

const SelectBible: React.FC<SelectBibleProps> = ({ onBibleSelection }) => {
  const [bibles, setBibles] = useState<Bible[]>([]);
  const [loading, setLoading] = useState(true);
  const [bibleAbbrev, setBibleAbbrev] = useState<string>("Bible Version");

  const handleSelectionChange = (value: string) => {
    onBibleSelection(value);
    let bibleId = "null";
    let bibleAbbrev = "null";
    if (value) {
      [bibleId, bibleAbbrev] = value.split(":");
    }
    setBibleAbbrev(bibleAbbrev.toUpperCase());
  };

  useEffect(() => {
    const endpoint = "/bibles";
    const apiUrl = `/api/bible?endpoint=${encodeURIComponent(endpoint)}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBibles(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Select.Root>
        <Select.Trigger className="flex gap-8 items-center disabled:text-black/30 disabled:cursor-not-allowed enabled:hover:-translate-y-[1px] enabled:active:translate-y-4 hover:text-accent duration-200 ease-out  outline-none">
          <h3 className="text-3 font-medium">Bible Version</h3>
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

  const uniqueBibles = Array.from(
    new Set((bibles || []).map((bible) => bible.name))
  ).map((name) => bibles.find((bible) => bible.name === name));

  return (
    <Select.Root onValueChange={handleSelectionChange}>
      <Select.Trigger className="flex gap-8 items-center disabled:text-black/30 disabled:cursor-not-allowed enabled:hover:-translate-y-[1px] enabled:active:translate-y-4 hover:text-accent duration-200 ease-out outline-none">
        <h3 className="text-3 font-medium">{bibleAbbrev}</h3>
        <IconChevronDown />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="overflow-hidden relative bg-fg-1 rounded-[12px] h-[65vh] backdrop-blur-lg border border-stroke-1 z-50 mt-128"
          align="start"
        >
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px]">
            <IconChevronUp />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-6">
            <Select.Group>
              {uniqueBibles
                .filter((bible) => bible && bible.language.name === "English")
                .map((bible) => (
                  <SelectItem
                    className="flex flex-col gap-6 group"
                    value={`${bible ? bible.id : ""}:${
                      bible ? bible.abbreviation : ""
                    }`}
                    key={bible ? bible.id : ""}
                  >
                    <p className="text-body">
                      {bible ? bible.name : ""} (
                      {bible ? bible.abbreviation.toUpperCase() : ""})
                    </p>
                    <p className="text-sub hidden group-hover:block duration-200 ease-out">
                      {bible ? bible.description : ""}
                    </p>
                  </SelectItem>
                ))}
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
        className="text-body flex items-center h-[40px] max-[830px]:h-[64px] pr-32 pl-32 relative cursor-pointer ease-out duration-200 hover:text-accent hover:translate-x-6 outline-none"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText className="leading-8">{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <IconCheck />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default SelectBible;
