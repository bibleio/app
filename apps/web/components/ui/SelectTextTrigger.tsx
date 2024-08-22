import React, { ReactNode } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { IconChevronDown, IconChevronUp, IconCheck } from "@tabler/icons-react";
import { SelectProps } from "@radix-ui/react-select";

interface CustomSelectProps {
  label: string;
  triggerHtml?: ReactNode;
}

type ExtendedSelectProps = CustomSelectProps & SelectProps;
export const SelectTextTrigger = ({
  label,
  children,
  defaultValue,
  value,
  onValueChange,
  defaultOpen,
  open,
  onOpenChange,
  name,
  disabled,
  required,
  triggerHtml,
}: ExtendedSelectProps) => {
  return (
    <RadixSelect.Root
      defaultValue={defaultValue}
      defaultOpen={defaultOpen}
      value={value}
      onValueChange={onValueChange}
      open={open}
      onOpenChange={onOpenChange}
      name={name}
      disabled={disabled}
      required={required}
    >
      <RadixSelect.Trigger
        className="h4 outline-none select-none hover:text-light-accent-navy component-hover-effect disabled:pointer-events-none radix-disabled:cursor-not-allowed radix-disabled:text-black/30"
        aria-label={label}
      >
        {triggerHtml}
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          className="font-sans overflow-hidden relative z-50 bg-fg-2 mt-4 max-h-[512px] w-full rounded-12 bg-light-fg-2 shadow-component border border-black radix-state-open:animate-scale-in radix-state-closed:animate-scale-out"
        >
          <RadixSelect.ScrollUpButton className="flex items-center justify-center h-fit py-2 bg-transparent cursor-default border-b border-black">
            <IconChevronUp />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="flex flex-col gap-16 p-16">
            {children}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="flex items-center justify-center h-fit py-2 bg-transparent cursor-default border-t border-black">
            <IconChevronDown />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export const SelectItemTextTrigger = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RadixSelect.Item>
>(({ children, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Item
      className="body px-32 text-text-1 font-sans flex items-center h-fit relative select-none cursor-pointer data-[disabled]:text-text-disabled radix-disabled:pointer-events-none outline-none radix-highlighted:translate-x-4 radix-state-checked:font-semibold radix-state-checked:text-light-accent-navy duration-150 ease-out transition-[transform, font-weight]"
      {...props}
      ref={forwardedRef}
    >
      <RadixSelect.ItemIndicator className="absolute left-0 w-24 inline-flex items-center justify-center">
        <IconCheck />
      </RadixSelect.ItemIndicator>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
});

export const SelectGroupTextTrigger = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <RadixSelect.Group className="flex flex-col gap-16">
      {children}
    </RadixSelect.Group>
  );
};

export const SelectLabelTextTrigger = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <RadixSelect.Label className="text-sub text-black/90 px-24">
      {children}
    </RadixSelect.Label>
  );
};

export const SelectSeparatorTextTrigger = () => {
  return <RadixSelect.Separator className="h-[1px] w-full bg-black/50" />;
};
