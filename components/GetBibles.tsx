"use client";

import React, { useEffect, useState } from "react";
import Loading from "./Loading";

interface Bible {
  name: string;
  id: string;
  abbreviation: string;
  language: {
    name: string;
  };
}

const GetBibles: React.FC = () => {
  console.log("GetBibles component is rendering");
  const [bibles, setBibles] = useState<Bible[]>([]);
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
          <button key={bible ? bible.id : ''} className="py-16 w-full text-left border-b border-black/20 group">
            <h3 className="text-3 font-medium group-hover:translate-x-8 group-active:-translate-x-[.3] duration-200 ease-out group-hover:text-accent">{bible ? bible.name : ''}</h3>
            <p className="text-body group-hover:translate-x-8 group-active:-translate-x-[.3] duration-200 ease-out group-hover:text-accent">Abbreviation: {bible ? bible.abbreviation.toUpperCase() : ''}</p>
          </button>
        ))}
    </div>
  );
};

export default GetBibles;
