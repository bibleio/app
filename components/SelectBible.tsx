"use client";

import React, { useEffect, useState } from "react";
import SelectItem from "./ui/SelectItem";
import Loading from "./ui/Loading";
import * as Select from "@radix-ui/react-select";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

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
  const [bibleAbbrev, setBibleAbbrev] = useState<string>();

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
        <Select.Trigger
          className="flex gap-8 w-fit items-center disabled:text-black/30 disabled:cursor-not-allowed enabled:hover:-translate-y-[1px] enabled:active:translate-y-4 hover:text-accent duration-200 ease-out  outline-none"
          aria-label="Bible Version"
        >
          <Select.Value
            className="text-body truncate"
            placeholder="Bible Version"
          />
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

  const uniqueBibles = Array.from(
    new Set((bibles || []).map((bible) => bible.name))
  ).map((name) => bibles.find((bible) => bible.name === name));

  return (
    <Select.Root onValueChange={handleSelectionChange}>
      <Select.Trigger
        className="flex gap-8 w-fit items-center truncate disabled:text-black/30 disabled:cursor-not-allowed enabled:hover:-translate-y-[1px] enabled:active:translate-y-4 hover:text-accent duration-200 ease-out  outline-none"
        aria-label="Bible Version"
      >
        <Select.Value
          className="text-body truncate"
          placeholder="World English Bible (WEB)"
        />
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
              {uniqueBibles.length > 0 ? (
                uniqueBibles
                  .filter((bible) => bible && bible.language.name === "English")
                  .map((bible) => (
                    <SelectItem
                      className="flex flex-col gap-6 group"
                      value={`${bible ? bible.id : ""}:${
                        bible ? bible.abbreviation : ""
                      }`}
                      key={bible ? bible.id : ""}
                    >
                      {bible ? bible.name : ""} (
                      {bible ? bible.abbreviation.toUpperCase() : ""})
                    </SelectItem>
                  ))
              ) : (
                <p className="text-body text-red-700">
                  Sorry, this service is unavalible right now. Come back later!
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

export default SelectBible;
