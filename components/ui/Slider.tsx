import * as RadixSlider from "@radix-ui/react-slider";
import { SliderProps } from "@radix-ui/react-slider";

export const Slider = (props: SliderProps) => {
  return (
    <RadixSlider.Root
      {...props}
      className="relative flex items-center select-none touch-none w-[200px] h-5"
    >
      <RadixSlider.Track className="bg-black/25 relative grow rounded-full h-[3px]">
        <RadixSlider.Range className="absolute bg-black/50 rounded-full h-full" />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="block size-20 bg-light-accent-navy rounded-[10px] hover:scale-[1.2] duration-200 ease-out focus:scale-90"
        aria-label="Viewing Area"
      />
    </RadixSlider.Root>
  );
};
