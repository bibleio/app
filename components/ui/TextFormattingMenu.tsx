import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import * as Select from "@radix-ui/react-select";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import SelectItem from "./SelectItem";

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
              className="block size-20 bg-accent rounded-[10px] hover:scale-[1.2] duration-200 ease-out focus:scale-90"
              aria-label="Font Size"
            />
          </Slider.Root>
        </div>
        <div className="flex flex-col gap-12">
          <p className="text-sub">Font Family</p>
          <Select.Root
            defaultValue="ibm-serif"
            onValueChange={(values) => updateFontFamily(values)}
          >
            <Select.Trigger
              className="flex gap-8 w-fit items-center disabled:text-black/30 disabled:cursor-not-allowed enabled:hover:-translate-y-[1px] enabled:active:translate-y-4 hover:text-accent duration-200 ease-out  outline-none"
              aria-label="Font Family"
            >
              <Select.Value
                className="text-body"
                placeholder="IBM Plex Serif"
              />
              <Select.Icon>
                <IconChevronDown />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="overflow-hidden z-50 bg-fg-1 border border-stroke-1 rounded-[12px] backdrop-blur-2xl">
                <Select.ScrollUpButton className="flex items-center justify-center h-24 bg-fg-1 cursor-default">
                  <IconChevronUp />
                </Select.ScrollUpButton>
                <Select.Viewport className="p-12">
                  <Select.Group>
                    <SelectItem value="ibm-serif" className="font-ibm-serif">
                      IBM Plex Serif
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
                    <SelectItem
                      value="open-dyslexic"
                      className="font-open-dyslexic"
                    >
                      OpenDyslexic
                    </SelectItem>
                  </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton className="flex items-center justify-center h-24 bg-fg-1 cursor-default">
                  <IconChevronDown />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      </div>
    </div>
  );
};

export default TextFormattingMenu;
