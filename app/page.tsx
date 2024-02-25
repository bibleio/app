"use client";

import React, { useState } from "react";
import Dropdown from "@/components/ui/Dropdown";
import SelectBible from "@/components/SelectBible";
import SelectBook from "@/components/SelectBook";

const Home: React.FC = () => {
  const [selectedBible, setSelectedBible] = useState<string | null>(null);

  const handleIdSelection = (value: string) => {
    setSelectedBible(value);
    console.log(value);
  };
  return (
    <div className="bg-fg-1 border border-stroke-1 rounded-[24px] h-full w-full px-[448px] max-[1550px]:px-128 max-[850px]:px-24 py-128 flex flex-col gap-32 min-h-0 overflow-clip overflow-y-scroll">
      <div className="flex flex-col gap-24 w-full">
        <div className="flex w-full justify-between">
          <div className="flex gap-24">
            <SelectBook selectedBible={selectedBible} />
            <Dropdown disabled text="Chapter" />
          </div>
          <SelectBible onBibleSelection={handleIdSelection} />
        </div>
        <h2 className="text-2 font-bold">Bible</h2>
        <p className="text-body">Selected Bible: {selectedBible}</p>
      </div>
    </div>
  );
};

export default Home;
