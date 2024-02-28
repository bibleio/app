"use client";

import React, { useEffect, useState } from "react";
import SelectBible from "@/components/SelectBible";
import SelectBook from "@/components/SelectBook";
import SelectChapter from "@/components/SelectChapter";

interface ChapterContent {
  id: string;
  content: string;
  verseCount: number;
  next: object;
  previous: object;
  copyright: string;
}

const Home: React.FC = () => {
  const [selectedBible, setSelectedBible] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  const [chapterContent, setChapterContent] = useState<ChapterContent[]>([]);

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

  // Split variables //

  // Get Bible ID

  let bibleId = "null";
  let bibleAbbrev = "null";
  if (selectedBible) {
    [bibleId, bibleAbbrev] = selectedBible.split(":");

    console.log(bibleId + " " + bibleAbbrev);
  }

  // Get Book ID

  let bookId = "null";
  let bookAbbrev = "null";
  if (selectedBook) {
    [bookId, bookAbbrev] = selectedBook.split(":");
    console.log(bookId + " " + bookAbbrev);
  }

  // Get Chapter ID

  let chapterId = "null";
  let chapterAbbrev = "null";
  if (selectedChapter) {
    [chapterId, chapterAbbrev] = selectedChapter.split(":");
    console.log(chapterId + " " + chapterAbbrev);
  }

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
        <h2 className="text-2 font-bold">
          {bookAbbrev || "Bible"} {chapterAbbrev || ""}
        </h2>
        <p className="text-body">Selected Bible: {selectedBible}</p>
        <p className="text-body">Selected book: {selectedBook}</p>
        <p className="text-body">Selected chapter: {selectedChapter}</p>
        <div className="w-full h-[1px] bg-black/20"></div>
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: chapterContent.content }}
            className="leading-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
