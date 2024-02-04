"use client"

import React, { useState } from "react";
import Dropdown from "@/components/ui/Dropdown";
import SelectBible from "@/components/SelectBible";
import SelectBook from "@/components/SelectBook";

interface SelectBookProps {
  selectedValue: string | null;
  onSelectedValueChange: (value: string | null) => void;
}

const Home: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelectedValueChange = (newValue: string | null) => {
    setSelectedValue(newValue);
  };
  return (
    <div className="bg-fg-1 border border-stroke-1 rounded-[24px] h-full w-full px-[448px] py-128 flex flex-col gap-32 min-h-0 overflow-clip overflow-y-scroll">
      <div className="flex flex-col gap-24 w-full">
        <div className="flex w-full justify-between">
          <div className="flex gap-24">
            <SelectBook />
            <Dropdown disabled text="Chapter" />
          </div>
          <SelectBible />
        </div>
        <h2 className="text-2 font-bold">Bible</h2>
        <p className="text-body">ya</p>
      </div>
    </div>
  );
};

export default Home;
