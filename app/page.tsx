"use client";

import React, { useEffect, useState } from "react";
import SelectBible from "@/components/SelectBible";
import SelectBook from "@/components/SelectBook";
import SelectChapter from "@/components/SelectChapter";
import { useTextFormattingMenuStore } from "@/components/ui/textFormattingMenuStore";
import TextFormattingMenu from "@/components/ui/TextFormattingMenu";
interface ChapterContent {
  id: string;
  content: string;
  verseCount: number;
  next: object;
  previous: object;
  copyright: string;
}

const Home: React.FC = () => {
  const { isTextFormattingMenuOpen } = useTextFormattingMenuStore();

  const [selectedBible, setSelectedBible] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [chapterContent, setChapterContent] = useState<ChapterContent[]>([]);
  const [viewAreaValue, setViewAreaValue] = useState<number[]>([75]);
  const [lineSpacingValue, setLineSpacingValue] = useState<number[]>([75]);

  const handleBibleIdSelection = (value: string) => {
    setSelectedBible(value);
  };

  const handleBookIdSelection = (value: string) => {
    setSelectedBook(value);
  };

  const handleChapterIdSelection = (value: string) => {
    setSelectedChapter(value);
  };

  // Split variables //

  // Get Bible ID

  let bibleId = "null";
  let bibleAbbrev = "null";
  if (selectedBible) {
    [bibleId, bibleAbbrev] = selectedBible.split(":");
  }

  // Get Book ID

  let bookId = "null";
  let bookAbbrev = "Bible";
  if (selectedBook) {
    [bookId, bookAbbrev] = selectedBook.split(":");
  }

  // Get Chapter ID

  let chapterId = "null";
  let chapterAbbrev = "";
  if (selectedChapter) {
    [chapterId, chapterAbbrev] = selectedChapter.split(":");
  }

  // Get view area slider value

  const handleViewAreaValueChange = (value: number[]) => {
    setViewAreaValue(value);
  };
  // Get line spacing slider value

  const handleLineSpacingValueChange = (value: number[]) => {
    setLineSpacingValue(value);
  };

  // Get chapter content

  useEffect(() => {
    if (selectedBible && selectedChapter) {
      const endpoint = `/bibles/${bibleId}/chapters/${chapterId}`;
      const apiUrl = `/api/bible?endpoint=${encodeURIComponent(endpoint)}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setChapterContent(data.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [bibleId, chapterId]);
  // View area
  const paddingClasses: { [key: number]: string } = {
    0: "px-0",
    25: "px-64",
    50: "px-128",
    75: "px-256",
    100: "px-[384px]",
  };

  const paddingClass = paddingClasses[viewAreaValue[0]];
  // Line spacing
  const lineSpacingClasses: { [key: number]: string } = {
    0: "leading-[110%]",
    25: "leading-[140%]",
    50: "leading-[180%]",
    75: "leading-[200%]",
    100: "leading-[250%]",
  };

  const lineSpacingClass = lineSpacingClasses[lineSpacingValue[0]];
  return (
    <>
      <div
        className={`h-full w-full ${paddingClass} max-w-[1250px] flex flex-col gap-32`}
      >
        <div className="flex w-full justify-between gap-32 flex-wrap">
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
        <h2 className="text-2 font-bold capitalize">
          {bookAbbrev} {chapterAbbrev}
        </h2>
        <div
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: chapterContent.content }}
          className={`${lineSpacingClass} pb-256 eb-container`}
        />
      </div>
      {isTextFormattingMenuOpen && (
        <TextFormattingMenu
          isOpen={isTextFormattingMenuOpen}
          onViewAreaValueChange={handleViewAreaValueChange}
          onLineSpacingValueChange={handleLineSpacingValueChange}
        />
      )}
    </>
  );
};

export default Home;
