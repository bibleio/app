import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import SelectBook from "./SelectBook";
import SelectChapter from "./SelectChapter";
import { useParams } from "next/navigation";

export const SelectBookChapter = () => {
  const params = useParams();

  const book = decodeURIComponent(params?.slug?.[1] ?? "");
  const chapter = decodeURIComponent(params?.slug?.[2] ?? "");
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="h3 select-none outline-none radix-state-open:text-light-accent-navy hover:text-light-accent-navy duration-150 ease-out component-hover-effect">
        {book.split(":")[1] || "Book & Chapter"} {chapter.split(":")[1] || ""}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="p-32 flex flex-col gap-12 font-sans mt-4 overflow-hidden relative z-50 bg-fg-2  max-h-[512px] w-full rounded-12 bg-light-fg-2 shadow-component border border-black radix-state-open:animate-scale-in radix-state-closed:animate-scale-out">
          <SelectBook />
          <SelectChapter />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
