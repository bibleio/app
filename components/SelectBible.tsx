"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from "./ui/Select";

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
    return <p className="body">loading</p>;
  }

  const uniqueBibles = Array.from(
    new Set((bibles || []).map((bible) => bible.name))
  ).map((name) => bibles.find((bible) => bible.name === name));

  return (
    <Select label="WEB" onValueChange={handleSelectionChange}>
      <SelectGroup>
        {uniqueBibles.length > 0 ? (
          uniqueBibles
            .filter((bible) => bible && bible.language.name === "English")
            .map((bible) => (
              <SelectItem
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
      </SelectGroup>
    </Select>
  );
};

export default SelectBible;
