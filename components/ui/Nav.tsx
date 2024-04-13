"use client";

import React from "react";
import InfoModal from "./InfoModal";
import { IconTypography } from "@tabler/icons-react";
import { useTextFormattingMenuStore } from "./textFormattingMenuStore";
import Image from "next/image";

const Nav: React.FC = () => {
  const { toggleMenu, isTextFormattingMenuOpen } = useTextFormattingMenuStore();
  return (
    <nav className="flex bg-fg-1 gap-32 max-w-[1250px] w-full items-center px-72 max-[580px]:px-32 py-20 rounded-24 border border-stroke-1 z-40 backdrop-blur-3xl">
      <Image src={"/textmark.svg"} width={117.28} height={48} alt="Bibleio" />
      <div className="h-[1px] w-full bg-black/20"></div>
      <div className="flex gap-32 items-start">
        <button className="flex flex-col w-fit group">
          <p className="text-body">Bible</p>
          <div className="w-full bg-accent h-[3px] group-hover:scale-x-75 group-active:scale-x-[.25] rounded-full duration-200 ease-out"></div>
        </button>
        <InfoModal />
        <button onClick={toggleMenu} className="flex flex-col w-fit group">
          <IconTypography
            className={`hover:-translate-y-[1px] hover:cursor-pointer active:translate-y-4 duration-200 ease-out ${
              isTextFormattingMenuOpen && "text-accent"
            }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
