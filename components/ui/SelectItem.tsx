import React from "react";
import * as Select from "@radix-ui/react-select";
import { SelectItemProps } from "@radix-ui/react-select";
import { IconCheck } from "@tabler/icons-react";

interface ExtendedSelectItemProps extends SelectItemProps {
  children: React.ReactNode;
  className?: string;
}

const SelectItem = React.forwardRef<HTMLDivElement, ExtendedSelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className="text-body leading-none max-[400px]:leading-6 flex items-center h-fit py-8 pr-[35px] pl-[25px] relative cursor-pointer select-none data-[disabled]:text-black/50 data-[state=on]:text-accent data-[disabled]:pointer-events-none outline-none data-[highlighted]:text-accent data-[highlighted]:translate-x-[6px] duration-150 ease-out"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <IconCheck />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default SelectItem;
