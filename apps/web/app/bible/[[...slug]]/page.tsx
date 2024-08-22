'use client'

import React, { useEffect, useState, FC } from 'react'
import SelectBible from '@/components/SelectBible'
import { useTextFormattingMenuStore } from '@/components/textFormattingMenuStore'
import TextFormattingMenu from '@/components/TextFormattingMenu'
import { SelectBookChapter } from '@/components/SelectBookChapter'

interface ChapterContent {
  id: string
  content: string
  verseCount: number
  next: object
  previous: object
  copyright: string
}

interface HomeProps {
  params: {
    slug: string
  }
}

const Home: FC<HomeProps> = ({ params }: { params: { slug: string } }) => {
  const { isTextFormattingMenuOpen } = useTextFormattingMenuStore()

  const [chapterContent, setChapterContent] = useState<ChapterContent[]>([])
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const [viewAreaValue, setViewAreaValue] = useState<number[]>([50])
  const [lineSpacingValue, setLineSpacingValue] = useState<number[]>([75])
  const [fontSizeValue, setFontSizeValue] = useState<number[]>([25])
  // Text Formatting //

  // Get view area slider value

  const handleViewAreaValueChange = (value: number[]) => {
    setViewAreaValue(value)
  }
  // Get line spacing slider value

  const handleLineSpacingValueChange = (value: number[]) => {
    setLineSpacingValue(value)
  }
  // Get font size slider value

  const handleFontSizeValueChange = (value: number[]) => {
    setFontSizeValue(value)
  }

  // Get chapter content

  useEffect(() => {
    if (params.slug && params.slug.length >= 3) {
      const endpoint = `/bibles/${
        decodeURIComponent(params?.slug?.[0] ?? '').split(':')[0]
      }/chapters/${decodeURIComponent(params?.slug?.[2] ?? '').split(':')[0]}`
      const apiUrl = `/api/bible?endpoint=${encodeURIComponent(endpoint)}`

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.data) {
            setChapterContent(data.data)
            setErrorMessage(null)
          } else {
            setErrorMessage(
              "Error code 90 - Possibly the book/chapter you're trying to access in this Bible/book is not avalaible."
            )
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }, [params])

  // View area
  const viewAreaClasses: { [key: number]: string } = {
    0: 'w-[256px]',
    25: 'w-[380px]',
    50: 'w-[570px]',
    75: 'w-[660px]',
    100: 'w-[800px]  ',
  }

  const viewAreaClass = viewAreaClasses[viewAreaValue[0]]

  // Line spacing
  const lineSpacingClasses: { [key: number]: string } = {
    0: 'leading-[125%]',
    25: 'leading-[145%]',
    50: 'leading-[185%]',
    75: 'leading-[225%]',
    100: 'leading-[275%]',
  }
  const lineSpacingClass = lineSpacingClasses[lineSpacingValue[0]]

  // Font size
  const fontSizeClasses: { [key: number]: string } = {
    0: 'text-[10px]',
    25: 'text-[15px]',
    50: 'text-[18px]',
    75: 'text-[22px]',
    100: 'text-[28px]',
  }

  const fontSizeClass = fontSizeClasses[fontSizeValue[0]]
  return (
    <>
      <div
        className={`h-full ${viewAreaClass} max-[920px]:w-full max-[920px]:px-64 max-[450px]:px-12 text-justify flex flex-col gap-24 py-64 self-center`}
      >
        <div className="flex w-full justify-between gap-32 flex-wrap">
          <SelectBookChapter />
          <SelectBible />
        </div>

        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: chapterContent.content,
            }}
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
  )
}

export default Home
