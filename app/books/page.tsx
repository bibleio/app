
import Dropdown from "@/components/ui/Dropdown";
import GetBibleBooks from "@/components/SelectBook";

export default function Home() {
  return (
    <div className="bg-fg-1 border border-stroke-1 rounded-[24px] h-full w-full px-[448px] py-128 flex flex-col gap-32 min-h-0 overflow-clip overflow-y-scroll">
      <div className="flex flex-col gap-24 w-full">
        <div className="flex w-full justify-between">
          <Dropdown disabled text="Chapter" />
          <Dropdown text="Bible Version" />
        </div>
        <h2 className="text-2 font-bold">Bible Books</h2>
      </div>
      <GetBibleBooks />
    </div>
  );
}
