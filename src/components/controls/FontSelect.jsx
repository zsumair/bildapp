import React from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../ui/select";
import { cn } from "@/lib/utils";
import useStore from "@/store";
import { fonts } from "@/options";

function FontSelect() {
  const fontStyle = useStore((state) => state.fontStyle);

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Language
      </label>
      <Select
        value={fontStyle}
        onValueChange={(fontStyle) => useStore.setState({ fontStyle })}
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Select Font" />
        </SelectTrigger>
        <SelectContent className="dark max-h-[500px]">
          <SelectItem value="auto-detect">AutoDetect</SelectItem>
          {Object.entries(fonts).map(([id, font]) => (
            <SelectItem key={id} value={id}>
              {font.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default FontSelect;
