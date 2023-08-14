import React, { ReactNode } from "react";
import { BsClockHistory } from "react-icons/bs";

type Props = {
  text?: string;
  helperText?: string;
  icon?: ReactNode;
};
const CommingSoonSection = ({ text, helperText, icon }: Props) => {
  return (
    <div className="flex  justify-center h-auto w-full py-[5em] px-[1em]">
      <div className="flex flex-col items-center gap-y-[0.5em] max-w-[450px]">
        {icon ?? <BsClockHistory className="text-[5em] text-brand/40" />}
        <h2 className="text-[2em] font-bold text-black/80">
          {text ?? "Comming Soon..."}
        </h2>
        <p>{helperText ?? ""}</p>
      </div>
    </div>
  );
};

export default CommingSoonSection;
