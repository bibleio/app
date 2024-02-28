"use client";

import React, { useState } from "react";
import SelectBible from "@/components/SelectBible";
import SelectBook from "@/components/SelectBook";
import SelectChapter from "@/components/SelectChapter";

const Home: React.FC = () => {
  const [selectedBible, setSelectedBible] = useState<string | null>(null);

  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  const handleBibleIdSelection = (value: string) => {
    setSelectedBible(value);
    console.log(value);
  };

  const handleBookIdSelection = (value: string) => {
    setSelectedBook(value);
    console.log(value);
  };

  const handleChapterIdSelection = (value: string) => {
    setSelectedChapter(value);
    console.log(value);
  };

  // Get chapter content

  return (
    <div className="bg-fg-1 border border-stroke-1 rounded-[24px] h-full w-full px-[448px] max-[1550px]:px-128 max-[850px]:px-24 py-128 flex flex-col gap-32 min-h-0 overflow-clip overflow-y-scroll">
      <div className="flex flex-col gap-24 w-full">
        <div className="flex w-full justify-between">
          <div className="flex gap-32">
            <SelectBook
              onBookSelection={handleBookIdSelection}
              selectedBible={selectedBible}
            />
            <SelectChapter
              onChapterSelection={handleChapterIdSelection}
              selectedBible={selectedBible}
              selectedBook={selectedBook}
            />
          </div>
          <SelectBible onBibleSelection={handleBibleIdSelection} />
        </div>
        <h2 className="text-2 font-bold">Bible</h2>
        <p className="text-body">Selected Bible: {selectedBible}</p>
        <p className="text-body">Selected book: {selectedBook}</p>
        <p className="text-body">Selected chapter: {selectedChapter}</p>
      </div>
    </div>
  );
};

export default Home;
