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

  const bible = params?.slug?.[0] ?? "";

  const handleSelectionChange = (value: string) => {
    router.push(`/bible/${bible}/${value}/${value.split(":")[0]}.1:1`);
  };

  useEffect(() => {
    if (bible) {
      const endpoint = `/bibles/${
        decodeURIComponent(bible).split(":")[0]
      }/books`;
      const apiUrl = `/api/bible?endpoint=${encodeURIComponent(endpoint)}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setBooks(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
        });
    }
  }, [bible]);

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
          <p className="body">Select a Bible version first.</p>
        )}
      </SelectGroup>
    </Select>
  );
};

export default SelectBook;
