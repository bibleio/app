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
  let bookAbbrev = "Bible";
  if (selectedBook) {
    [bookId, bookAbbrev] = selectedBook.split(":");
    console.log(bookId + " " + bookAbbrev);
  }

  // Get Chapter ID

  let chapterId = "null";
  let chapterAbbrev = "";
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
    <div className="h-full w-full max-w-[1250px] px-[192px] max-[960px]:px-64 max-[530px]:px-16 flex flex-col gap-32">
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
        className="leading-8 pb-256"
      />
    </div>
  );
};

export default Home;
