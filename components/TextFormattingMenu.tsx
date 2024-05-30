import React, { useState } from "react";
import { Slider } from "./ui/Slider";
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
      <div className="flex flex-col p-32 gap-24 bg-light-fg-1 border border-black">
        <h2 className="h3">Text</h2>
        <div className="flex flex-col gap-12">
          <p className="subtext">Font Family</p>

          <Select label="Lora" onValueChange={updateFontFamily}>
            <SelectGroup>
              <SelectItem value="lora" font="font-lora">
                Lora
              </SelectItem>
              <SelectItem value="inter" font="font-inter">
                Inter
              </SelectItem>
              <SelectItem value="quicksand" font="font-quicksand">
                Quicksand
              </SelectItem>
              <SelectItem value="tinos" font="font-tinos">
                Tinos
              </SelectItem>
              <SelectItem value="geist-mono" font="font-geist-mono">
                Geist Mono
              </SelectItem>
              <SelectItem value="open-dyslexic" font="font-open-dyslexic">
                OpenDyslexic
              </SelectItem>
            </SelectGroup>
          </Select>
        </div>
        <div className="flex flex-col gap-12 max-[920px]:hidden">
          <p className="subtext">Viewing Area</p>
          <Slider
            defaultValue={[50]}
            max={100}
            step={25}
            onValueChange={(values) => {
              setViewAreaValue(values);
              onViewAreaValueChange(values);
            }}
          />
        </div>
        <div className="flex flex-col gap-12">
          <p className="subtext">Line Spacing</p>
          <Slider
            defaultValue={[75]}
            max={100}
            step={25}
            onValueChange={(values) => {
              setLineSpacingValue(values);
              onLineSpacingValueChange(values);
            }}
          />
        </div>
        <div className="flex flex-col gap-12">
          <p className="subtext">Font Size</p>
          <Slider
            defaultValue={[25]}
            max={100}
            step={25}
            onValueChange={(values) => {
              setFontSizeValue(values);
              onFontSizeValueChange(values);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TextFormattingMenu;
