import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

interface TextFormattingMenuProps {
  isOpen: boolean;
  onViewAreaValueChange: (value: number[]) => void;
  onLineSpacingValueChange: (value: number[]) => void;
}

const TextFormattingMenu: React.FC<TextFormattingMenuProps> = ({
  isOpen,
  onViewAreaValueChange,
  onLineSpacingValueChange,
}) => {
  const [viewAreaValue, setViewAreaValue] = useState<number[]>([25]);
  const [lineSpacingValue, setLineSpacingValue] = useState<number[]>([75]);
  return (
    <div
      className={`fixed top-1/2 left-0 transform -translate-y-1/2 z-50
       ${isOpen ? "block" : "hidden"}`}
    >
      <div className="flex flex-col p-24 gap-24 bg-fg-1 border border-stroke-1 rounded-24 ml-12">
        <div className="flex flex-col gap-12">
          <p className="text-sub">Viewing Area</p>
          <Slider.Root
            className="relative flex items-center select-none touch-none w-[200px] h-5"
            defaultValue={[25]}
            max={100}
            step={25}
            onValueChange={(values) => {
              setViewAreaValue(values);
              onViewAreaValueChange(values);
            }}
          >
            <Slider.Track className="bg-black/25 relative grow rounded-full h-[3px]">
              <Slider.Range className="absolute bg-black/50 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block size-20 bg-accent rounded-[10px] hover:scale-[1.2] duration-200 ease-out focus:scale-90"
              aria-label="Viewing Area"
            />
          </Slider.Root>
        </div>
        <div className="flex flex-col gap-12">
          <p className="text-sub">Line Spacing</p>
          <Slider.Root
            className="relative flex items-center select-none touch-none w-[200px] h-5"
            defaultValue={[75]}
            max={100}
            step={25}
            onValueChange={(values) => {
              setLineSpacingValue(values);
              onLineSpacingValueChange(values);
            }}
          >
            <Slider.Track className="bg-black/25 relative grow rounded-full h-[3px]">
              <Slider.Range className="absolute bg-black/50 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block size-20 bg-accent rounded-[10px] hover:scale-[1.2] duration-200 ease-out focus:scale-90"
              aria-label="Line Spacing"
            />
          </Slider.Root>
        </div>
      </div>
    </div>
  );
};

export default TextFormattingMenu;
