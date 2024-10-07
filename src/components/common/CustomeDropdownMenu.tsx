"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";

type Checked = DropdownMenuCheckboxItemProps["checked"];
type Filter = {
  sort: string;
  priceRange: string;
  cpu: string;
  socket: string;
  videoCard: string;
  [key: string]: string;
};

export function CustomDropdownMen({
  onChange,
  values,
  label,
  name,
  filter,
}: {
  values?: readonly { label: string; value: string }[];
  label: string;
  name: string;
  filter?: Filter;
  onChange?: (key: string, value: string) => void;
}) {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="flex text-md items-center cursor-pointer">
          {label} <ChevronDown fill="black" className="h-4 w-4" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {values?.map((value) => (
          <DropdownMenuCheckboxItem
            key={value.value}
            checked={filter && filter[name] === value.value}
            onCheckedChange={(checked) => {
              if (checked) {
                onChange?.(name, value.value);
              } else {
                onChange?.(name, "");
              }
            }}
          >
            {value.label}
          </DropdownMenuCheckboxItem>
        ))}
        <DropdownMenuSeparator />

        {/* <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
