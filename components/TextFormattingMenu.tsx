import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from "./ui/Select";

interface TextFormattingMenuProps {
  isOpen: boolean;
  onViewAreaValueChange: (value: number[]) => void;
  onLineSpacingValueChange: (value: number[]) => void;
  onFontSizeValueChange: (value: number[]) => void;
}

const TextFormattingMenu: React.FC<TextFormattingMenuProps> = ({
  isOpen,
  onViewAreaValueChange,
  onLineSpacingValueChange,
  onFontSizeValueChange,
}) => {
  const [viewAreaValue, setViewAreaValue] = useState<number[]>([25]);
  const [lineSpacingValue, setLineSpacingValue] = useState<number[]>([75]);
  const [fontSizeValue, setFontSizeValue] = useState<number[]>([25]);

  function removeFontFamilyClasses() {
    const fontFamilyClasses = Array.from(document.body.classList).filter(
      (className) => className.startsWith("font-")
    );
    fontFamilyClasses.forEach((className) =>
      document.body.classList.remove(className)
    );
  }

  function updateFontFamily(fontFamily: string) {
    removeFontFamilyClasses();
    document.body.classList.add(`font-${fontFamily}`);
  }

  return (
    <div
      className={`fixed top-1/2 left-0 z-50 min-[700px]:-translate-y-1/2 min-[700px]:ml-12 max-[700px]:left-1/2 max-[700px]:-translate-x-1/2 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col p-24 gap-24 bg-fg-1 border border-stroke-1 rounded-24 backdrop-blur-3xl">
        <h2 className="text-2 font-bold">Text</h2>
        <div className="flex flex-col gap-12 max-[920px]:hidden">
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
              className="block size-20 bg-light-accent-navy rounded-[10px] hover:scale-[1.2] duration-200 ease-out focus:scale-90"
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
              className="block size-20 bg-light-accent-navy rounded-[10px] hover:scale-[1.2] duration-200 ease-out focus:scale-90"
              aria-label="Line Spacing"
            />
          </Slider.Root>
        </div>
        <div className="flex flex-col gap-12">
          <p className="text-sub">Font Size</p>
          <Slider.Root
            className="relative flex items-center select-none touch-none w-[200px] h-5"
            defaultValue={[25]}
            max={100}
            step={25}
            onValueChange={(values) => {
              setFontSizeValue(values);
              onFontSizeValueChange(values);
            }}
          >
            <Slider.Track className="bg-black/25 relative grow rounded-full h-[3px]">
              <Slider.Range className="absolute bg-black/50 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block size-20 bg-light-accent-navy rounded-[10px] hover:scale-[1.2] duration-200 ease-out focus:scale-90"
              aria-label="Font Size"
            />
          </Slider.Root>
        </div>
        <div className="flex flex-col gap-12">
          <p className="text-sub">Font Family</p>

          <Select label="Lora" onValueChange={updateFontFamily}>
            <SelectGroup>
              <SelectItem value="lora" className="font-lora">
                Lora
              </SelectItem>
              <SelectItem value="inter" className="font-inter">
                Inter
              </SelectItem>
              <SelectItem value="quicksand" className="font-quicksand">
                Quicksand
              </SelectItem>
              <SelectItem value="tinos" className="font-tinos">
                Tinos
              </SelectItem>
              <SelectItem value="geist-mono" className="font-geist-mono">
                Geist Mono
              </SelectItem>
              <SelectItem value="open-dyslexic" className="font-open-dyslexic">
                OpenDyslexic
              </SelectItem>
            </SelectGroup>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TextFormattingMenu;
