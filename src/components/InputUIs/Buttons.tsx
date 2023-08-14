import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AuthModal } from "../Modals";

type ButtonProps = {
  textStyle?: string;
  label: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const NavButton: React.FC<ButtonProps> = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DefUnstyledBtn
        {...props}
        onClick={() => setIsOpen(true)}
        className="font-semibold hover:text-brand hover:underline underline-offset-[0.5em] cursor-pointer shrink-0 "
      />
      <AuthModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export const OrrangeButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <DefUnstyledBtn
      {...props}
      className="bg-brand text-white hover:bg-brand/70 w-full flex items-center justify-center py-[0.5em] px-[1em] rounded-[0.8em] disabled:bg-csgray/80 disabled:text-white"
      textStyle="text-[1.2em]"
    />
  );
};

export const WhiteButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <DefUnstyledBtn
      {...props}
      className="bg-white text-brand font-semibold hover:bg-csgray/30 w-full flex items-center justify-center py-[0.5em] px-[1em] rounded-[0.8em] disabled:text-gray-300"
      textStyle={props.textStyle}
    />
  );
};

const DefUnstyledBtn = ({
  label,
  onClick,
  disabled,
  textStyle,
  ...btnProps
}: ButtonProps) => {
  return (
    <button
      disabled={disabled ?? (btnProps.type !== "submit" && !onClick)}
      onClick={onClick}
      type={btnProps.type ?? "button"}
      {...btnProps}
      className={twMerge(
        `disabled:pointer-events-none h-fit`,
        btnProps.className
      )}
    >
      <p className={textStyle ?? ""}>{label}</p>
    </button>
  );
};
