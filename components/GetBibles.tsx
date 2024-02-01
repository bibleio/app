"use client";

import React, { useEffect, useState } from "react";
import Loading from "./ui/Loading";

interface GetBiblesProps {
  setSelectedId: (id: string | null) => void;
}

interface Bible {
  name: string;
  id: string;
  abbreviation: string;
  description: string;
  language: {
    name: string;
  };
}

const GetBibles: React.FC = () => {
  const [bibles, setBibles] = useState<Bible[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/bibles")
      .then((response) => response.json())
      .then((data) => {
        setBibles(data.data);
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

  const uniqueBibles = Array.from(
    new Set(bibles.map((bible) => bible.name))
  ).map((name) => bibles.find((bible) => bible.name === name));
  return (
    <div>
      {uniqueBibles
        .filter((bible) => bible && bible.language.name === "English")
        .map((bible) => (
          <button
            onClick={() => {
              console.log(bible ? bible.id : "");
              setSelectedId(bible ? bible.id : "");
            }}
            key={bible ? bible.id : ""}
            className="py-16 w-full text-left border-b border-black/20 group"
          >
            <h3 className="text-3 font-medium group-hover:translate-x-8 group-active:-translate-x-[.3] duration-200 ease-out group-hover:text-accent">
              {bible ? bible.name : ""} ({bible ? bible.abbreviation : ""})
            </h3>
            <p className="text-body group-hover:translate-x-8 group-active:-translate-x-[.3] duration-200 ease-out group-hover:text-accent">
              {bible ? bible.description : ""}
            </p>
          </button>
        ))}
    </div>
  );
};

export default GetBibles;
