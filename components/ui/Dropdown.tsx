import { IconChevronDown } from "@tabler/icons-react";
export default function Dropdown({
  text,
  disabled,
}: {
  text: string;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      className="flex gap-8 items-center disabled:text-black/30 disabled:cursor-not-allowed enabled:hover:-translate-y-[1px] enabled:active:translate-y-4 hover:text-accent duration-200 ease-out"
    >
      <h3 className="text-3 font-medium">{text}</h3>
      <IconChevronDown />
    </button>
  );
}
