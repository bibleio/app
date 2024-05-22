"use client";

import React, { useEffect, useState } from "react";
import { Select, SelectGroup, SelectItem } from "./ui/Select";
import { useRouter, useParams } from "next/navigation";
interface Book {
  name: string;
  id: string;
}

const SelectBook: React.FC = () => {
  const router = useRouter();
  const params = useParams();

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const bibleId = params?.slug?.[0] ?? null;
  const chapterAbbrev = params?.slug?.[2] ?? null;

  const handleSelectionChange = (value: string) => {
    let bookId = "null";
    let bookAbbrev = "null";
    if (value) {
      [bookId, bookAbbrev] = value.split(":");
    }
    router.push(`/bible/${bibleId}/${bookId}/1`);
  };

  useEffect(() => {
    const endpoint = `/bibles/${bibleId}/books`;
    const apiUrl = `/api/bible?endpoint=${encodeURIComponent(endpoint)}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, [bibleId]);

  if (loading) {
    return (
      <Select label="Book" disabled>
        <SelectGroup>
          <SelectItem value="disabled">disabled</SelectItem>
        </SelectGroup>
      </Select>
    );
  }

  return (
    <Select label="Book" onValueChange={handleSelectionChange}>
      <SelectGroup>
        {books && books.length > 0 ? (
          books.map((book) => (
            <SelectItem value={`${book.id}:${book.name}`} key={book.id}>
              {book.name}
            </SelectItem>
          ))
        ) : (
          <p className="text-body text-red-700">
            Error code 89 <br /> No books returned from API
          </p>
        )}
      </SelectGroup>
    </Select>
  );
};

export default SelectBook;
