"use client";

import React, { useEffect, useState, FC } from "react";
import SelectBible from "@/components/SelectBible";
import SelectBook from "@/components/SelectBook";
import SelectChapter from "@/components/SelectChapter";
import { useTextFormattingMenuStore } from "@/components/textFormattingMenuStore";
import TextFormattingMenu from "@/components/TextFormattingMenu";

interface ChapterContent {
  id: string;
  content: string;
  verseCount: number;
  next: object;
  previous: object;
  copyright: string;
}

interface HomeProps {
  params: {
    slug: string;
  };
}

const Home: FC<HomeProps> = ({ params }: { params: { slug: string } }) => {
  const { isTextFormattingMenuOpen } = useTextFormattingMenuStore();

  const [chapterContent, setChapterContent] = useState<ChapterContent[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [viewAreaValue, setViewAreaValue] = useState<number[]>([25]);
  const [lineSpacingValue, setLineSpacingValue] = useState<number[]>([75]);
  const [fontSizeValue, setFontSizeValue] = useState<number[]>([25]);
  // Text Formatting //

  // Get view area slider value

  const handleViewAreaValueChange = (value: number[]) => {
    setViewAreaValue(value);
  };
  // Get line spacing slider value

  const handleLineSpacingValueChange = (value: number[]) => {
    setLineSpacingValue(value);
  };
  // Get font size slider value

  const handleFontSizeValueChange = (value: number[]) => {
    setFontSizeValue(value);
  };

  // Get chapter content

  useEffect(() => {
    if (params.slug && params.slug.length >= 3) {
      const endpoint = `/bibles/${params["slug"][0]}/chapters/${params["slug"][1]}.${params["slug"][2]}`;
      const apiUrl = `/api/bible?endpoint=${encodeURIComponent(endpoint)}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.data) {
            setChapterContent(data.data);
            setErrorMessage(null);
          } else {
            setErrorMessage(
              "Error code 90 - Possibly the book/chapter you're trying to access in this Bible/book is not avalaible."
            );
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [params]);

  // View area
  const viewAreaClasses: { [key: number]: string } = {
    0: "px-[554px] max-[1090px]:px-256 max-[920px]:px-16",
    25: "px-[384px] max-[920px]:px-16",
    50: "px-[286px] max-[920px]:px-16",
    75: "px-[192px] max-[920px]:px-16",
    100: "px-64 max-[1320px]:px-16",
  };

  const viewAreaClass = viewAreaClasses[viewAreaValue[0]];

  // Line spacing
  const lineSpacingClasses: { [key: number]: string } = {
    0: "leading-[125%]",
    25: "leading-[145%]",
    50: "leading-[185%]",
    75: "leading-[225%]",
    100: "leading-[275%]",
  };
  const lineSpacingClass = lineSpacingClasses[lineSpacingValue[0]];

  // Font size
  const fontSizeClasses: { [key: number]: string } = {
    0: "text-[10px]",
    25: "text-[15px]",
    50: "text-[18px]",
    75: "text-[22px]",
    100: "text-[28px]",
  };

  const fontSizeClass = fontSizeClasses[fontSizeValue[0]];
  return (
    <>
      <div
        className={`h-full w-full ${viewAreaClass} flex flex-col gap-24 py-64 items-start justify-center`}
      >
        <div className="flex w-full justify-between gap-32 flex-wrap">
          <div className="flex gap-12">
            <SelectBook />
            <SelectChapter />
          </div>
          <SelectBible />
        </div>

        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <div
            // @ts-ignore
            dangerouslySetInnerHTML={{ __html: chapterContent.content }}
            className={`${lineSpacingClass} ${fontSizeClass} eb-container`}
          />
        )}
      </div>
      {isTextFormattingMenuOpen && (
        <TextFormattingMenu
          isOpen={isTextFormattingMenuOpen}
          onViewAreaValueChange={handleViewAreaValueChange}
          onLineSpacingValueChange={handleLineSpacingValueChange}
          onFontSizeValueChange={handleFontSizeValueChange}
        />
      )}
    </>
  );
};

export default Home;
