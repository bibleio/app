"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from "./ui/Select";
interface Book {
  name: string;
  id: string;
}
interface SelectBookProps {
  selectedBible: string | null;
  onBookSelection: (value: string) => void;
}

const SelectBook: React.FC<SelectBookProps> = ({
  selectedBible,
  onBookSelection,
}) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  let bibleId = "null";
  let bibleAbbrev = "null";
  if (selectedBible) {
    [bibleId, bibleAbbrev] = selectedBible.split(":");
  }

  const handleSelectionChange = (value: string) => {
    onBookSelection(value);
  };

  useEffect(() => {
    if (selectedBible) {
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
    }
  }, [bibleId]);

  if (loading) {
    return <p className="body">loadingg</p>;
  }

  return (
    <Select label="Genesis" onValueChange={handleSelectionChange}>
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
