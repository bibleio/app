"use client";

import React from "react";
import InfoModal from "../InfoModal";
import { IconTextSize, IconSearch, IconBookmarks } from "@tabler/icons-react";
import { useTextFormattingMenuStore } from "../textFormattingMenuStore";
import Image from "next/image";

const Nav: React.FC = () => {
  const { toggleMenu, isTextFormattingMenuOpen } = useTextFormattingMenuStore();
  return (
    <nav className="bg-light-bg sticky top-0 flex justify-between items-center px-32 py-12 border border-b-black">
      <Image
        src={"/brand/logo-light.svg"}
        alt="Bibleio"
        height={32}
        width={57.04}
      />
      <div className="flex gap-36 w-fit h-fit items-center">
        {/*Pages*/}
        <p className="strong-body">Bible</p>
        {/*Popups*/}
        <IconBookmarks />
        <button onClick={toggleMenu} className="flex flex-col w-fit group">
          <IconTextSize
            className={`hover:-translate-y-[1px] hover:cursor-pointer active:translate-y-4 duration-200 ease-out ${
              isTextFormattingMenuOpen && "text-accent"
            }`}
          />
        </button>
        <IconSearch />
      </div>
    </nav>
  );
};

export default Nav;
