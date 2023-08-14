import React from "react";

type SocialMediaAuthBtn = {
  icon: string;
  label: string;
};

const SocialMediaAuthBtn = ({ icon, label }: SocialMediaAuthBtn) => {
  return (
    <button
      className="flex gap-[0.5em] py-[0.5em] px-[0.8em] rounded-[2em] border-[1px] border-black items-center hover:bg-brand hover:text-white transform duration-150"
      type="button"
    >
      <img src={icon} alt={label} className="h-[0.8em] aspect-square" />
      <p className="text-[0.8em]">{label}</p>
    </button>
  );
};

export default SocialMediaAuthBtn;
