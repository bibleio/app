"use client";

import React, { useEffect, useState } from "react";
import Loading from "./ui/Loading";

interface Book {
  id: string;
  name: string;
  abbreviation: string;
}

const GetBibleBooks: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([
    { id: "", name: "", abbreviation: "" },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/bibleBooks")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <p>{book.abbreviation}</p>
        </div>
      ))}
    </div>
  );
};

export default GetBibleBooks;
