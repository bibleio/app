"use client";

import React, { useEffect, useState } from "react";
import SelectBible from "@/components/SelectBible";
import SelectBook from "@/components/SelectBook";
import SelectChapter from "@/components/SelectChapter";
import InfoModal from "@/components/ui/InfoModal";

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
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);
  const [chapterContent, setChapterContent] = useState<ChapterContent[]>([]);

  const handleBibleIdSelection = (value: string) => {
    setSelectedBible(value);
    console.log(value);
  };

  const handleBookIdSelection = (value: string) => {
    setSelectedBook(value);
  };

  const handleChapterIdSelection = (value: string) => {
    setSelectedChapter(value);
  };

  const handleSwitchChange = (checked: boolean) => {
    setIsSwitchChecked(checked);
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
    <>
      <nav className="flex bg-fg-1 gap-32 max-w-[1250px] sticky top-0 w-full items-center px-72 max-[580px]:px-32 py-[20px] rounded-b-[24px] border border-stroke-1 z-40 backdrop-blur-3xl">
        <h2 className="text-2 font-bold">Biblio</h2>
        <div className="h-[1px] w-full bg-black/20"></div>
        <div className="flex gap-32 items-start">
          <button className="flex flex-col w-fit group">
            <p className="text-body">Bible</p>
            <div className="w-full bg-accent h-[3px] group-hover:scale-x-75 group-active:scale-x-[.25] rounded-full duration-200 ease-out"></div>
          </button>
          <InfoModal
            onSwitchChange={handleSwitchChange}
            isChecked={isSwitchChecked}
          />
        </div>
      </nav>
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
        {isSwitchChecked && (
          <div className="flex flex-col gap-8">
            <p className="text-sub">Selected Bible: {selectedBible}</p>
            <p className="text-sub">Selected book: {selectedBook}</p>
            <p className="text-sub">Selected chapter: {selectedChapter}</p>

            <div className="h-[1px] bg-black/10 mt-24"></div>
          </div>
        )}
        <h2 className="text-2 font-bold capitalize">
          {bookAbbrev} {chapterAbbrev}
        </h2>
        <div
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: chapterContent.content }}
          className="leading-8 pb-256 eb-container"
        />
      </div>
    </>
  );
};

export default Home;
