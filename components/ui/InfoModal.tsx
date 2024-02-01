"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IconArrowUpRight, IconInfoCircle, IconX } from "@tabler/icons-react";
import Link from "next/link";

const InfoModal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <IconInfoCircle className="hover:-translate-y-[1px] hover:cursor-pointer active:translate-y-4 hover:text-accent duration-200 ease-out" />
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed bg-white/40 backdrop-blur-sm data-[state=open]:animate-overlayShow inset-0" />
      <Dialog.Content
        className="bg-fg-1 p-32 rounded-[24px] border border-stroke-1 z-50 backdrop-blur-3xl data-[state=open]:animate-contentShow 
        flex flex-col gap-12
      fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div className="flex w-full justify-between">
          <Dialog.Title className="text-3 font-medium">
            About Biblio
          </Dialog.Title>
          <Dialog.Close asChild>
            <button
              className="hover:-translate-y-[1px] hover:cursor-pointer active:translate-y-4 hover:text-red-400 duration-200 ease-out"
              aria-label="Close"
            >
              <IconX />
            </button>
          </Dialog.Close>
        </div>

        <Dialog.Description className="flex flex-col gap-8">
          <p className="text-body">
            Biblio is a minimalist, simple Bible viewing app.
          </p>
          <Link
            href={"https://dukc.dev"}
            target="_blank"
            className="flex gap-4 items-center group hover:text-accent duration-200 ease-out"
          >
            Built by dukc{" "}
            <IconArrowUpRight className="group-hover:rotate-45 duration-200 ease-out" />
          </Link>
          <Link
            href={"https://scripture.api.bible/"}
            target="_blank"
            className="flex gap-4 items-center group hover:text-accent duration-200 ease-out"
          >
            Uses scripture.api.bible{" "}
            <IconArrowUpRight className="group-hover:rotate-45 duration-200 ease-out" />
          </Link>
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default InfoModal;
