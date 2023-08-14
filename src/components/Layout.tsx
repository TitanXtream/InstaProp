import React, { ReactNode } from "react";
import TopNavBar from "./TopNavBar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="custom_text_size w-full min-h-screen flex flex-col">
      <header className="text-[1em]">
        <TopNavBar />
      </header>
      <main className="text-[1em] flex-1 overflow-hidden flex">{children}</main>
      {/* <footer className="text-[1em]">Footer</footer> */}
    </div>
  );
};

export default Layout;
