import React, { HTMLInputTypeAttribute } from "react";
import { searchIcon } from "../../assets";
import { UseFormRegisterReturn } from "react-hook-form";

type InputBarProps = {
  placeholder?: string;
  manager: UseFormRegisterReturn;
  type?: HTMLInputTypeAttribute | undefined;
  error: string | undefined;
  closeAutoComple?: true;
};

export const InputBar = ({
  type,
  manager,
  error,
  placeholder = "",
  closeAutoComple,
}: InputBarProps) => {
  return (
    <div className="w-full">
      <input
        type={type ?? "text"}
        {...manager}
        placeholder={placeholder}
        autoFocus
        className={`border-black border-[1px] rounded-[0.7em] py-[0.5em] px-[0.8em] text-[1em] w-full placeholder:text-black ${
          error ? "focus:outline-red-600 placeholder:text-red-600" : ""
        }`}
        autoComplete={closeAutoComple ? "off" : "on"}
      />
      {error && (
        <p className="text-[0.7em] text-red-600 font-medium">{error}</p>
      )}
    </div>
  );
};

export const SearchBar: React.FC = () => {
  return (
    <div className="flex-1 shrink bg-csgray h-max p-[1em] flex gap-[1.5em] items-center">
      <img src={searchIcon} className="h-[1em] aspect-square" />
      <input
        type="text"
        className="focus:ring-0 outline-none placeholder:text-black font-semibold bg-transparent w-full"
        placeholder="Search services"
      />
    </div>
  );
};
