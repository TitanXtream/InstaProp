import React from "react";
import { SearchBar } from "./InputUIs/InputBars";
import { NavButton } from "./InputUIs/Buttons";

const TopNavBar = () => {
  return (
    <div className="flex justify-between items-center gap-[4em] px-[2em] py-[1em]">
      <Logo />

      <nav className="w-full flex gap-x-[2em] items-center">
        <SearchBar />
        <NavButton label="Log in" />
        <NavButton label="Sign up" disabled />
      </nav>
    </div>
  );
};

export default TopNavBar;

export const Logo = () => {
  return <div className="text-[1.8em] font-bold">InstaProp</div>;
};
