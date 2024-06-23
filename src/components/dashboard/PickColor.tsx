import React, { useState } from "react";
import { FormLabel } from "../ui/form";
import CheckIcon from "../icons/CheckIcon";
import { IPickColor } from "@/types/product.type";
import { cn } from "@/lib/utils";

type PickColorProps = {
  selectColor: IPickColor[];
  setSelectedColor: React.Dispatch<React.SetStateAction<IPickColor[]>>;
  colors: IPickColor[];
};

const PickColor = ({
  selectColor,
  setSelectedColor,
  colors,
}: PickColorProps) => {
  const handleChoseColor = (pickColor: IPickColor) => {
    setSelectedColor((prevColor) => {
      if (prevColor.some((color) => color.id === pickColor.id)) {
        return prevColor.filter((color) => color.id !== pickColor.id);
      } else {
        return [...prevColor, pickColor];
      }
    });
  };

  const isSelected = (id: number) =>
    selectColor.some((selected) => selected.id === id);

  return (
    <div className="">
      <FormLabel>Chose Color</FormLabel>
      <div className="flex gap-2 mt-2">
        {colors?.map((color) => (
          <div
            onClick={() => handleChoseColor(color)}
            style={{ background: color.colorCode }}
            key={color.id}
            className={cn(
              "w-8 h-8 rounded cursor-pointer flex justify-center items-center"
            )}
          >
            {isSelected(color.id) && (
              <CheckIcon className="text-white font-semibold w-6 h-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PickColor;
