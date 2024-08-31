import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

export default function LinkButton({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex gap-4 items-center group hover:text-accent duration-200 ease-out"
    >
      {text}
      <IconArrowUpRight className="group-hover:rotate-45 duration-300 ease-out" />
    </Link>
  );
}
