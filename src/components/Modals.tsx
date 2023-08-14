import React from "react";
import { Dialog } from "@headlessui/react";
import { ImCross } from "react-icons/im";
import SocialMediaAuthBtn from "./InputUIs/SocialMediaAuthBtn";
import { facebook, google, phone } from "../assets";
import { InputBar } from "./InputUIs/InputBars";
import { useForm } from "react-hook-form";
import { OrrangeButton, WhiteButton } from "./InputUIs/Buttons";

type AuthModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthModal = ({ isOpen, setIsOpen }: AuthModalProps) => {
  const socilaMediaOpts = [
    { icon: google, label: "Continue with Google" },
    { icon: facebook, label: "Continue with Facebook" },
    { icon: phone, label: "Continue with phone" },
  ];

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const authenticate = () => {
    alert("Logged in successfully");
  };

  return (
    <Dialog
      as={"div"}
      className={
        "fixed z-[50] inset-0 h-full w-full flex items-center justify-center"
      }
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        reset();
      }}
    >
      <Dialog.Backdrop
        className={"fixed inset-0 w-full h-screen bg-black/50 z-[10]"}
      />
      <Dialog.Panel className={"w-[28em] bg-white p-[2em]"}>
        <button
          className="p-[0.5em] rounded-full hover:bg-gray-200"
          onClick={() => {
            setIsOpen(false);
            reset();
          }}
        >
          <ImCross className="text-[0.8em]" />
        </button>
        <div className="font-bold text-[1.5em]">Log in</div>
        <form className="mt-[1em]" onSubmit={handleSubmit(authenticate)}>
          <div className="flex flex-col items-stretch gap-[0.5em]">
            {socilaMediaOpts.map((opt) => (
              <SocialMediaAuthBtn icon={opt.icon} label={opt.label} />
            ))}
          </div>
          <div className="text-center text-[0.7em] py-[0.5em]">or</div>
          <div className="flex flex-col gap-[0.5em]">
            <InputBar
              placeholder="Email"
              type="email"
              manager={{
                ...register("email", {
                  required: "Email is required",
                  validate: {
                    checkValidEmail: (value) => {
                      return (
                        value.includes("@gmail.com") ||
                        "Please insert valid email"
                      );
                    },
                  },
                }),
              }}
              error={errors.email?.message}
            />
            <InputBar
              placeholder="Password"
              closeAutoComple
              type="password"
              manager={{
                ...register("password", {
                  required: "Please enter password",
                }),
              }}
              error={errors.password?.message}
            />
          </div>
          <div className="my-[0.5em] text-[0.6em]">
            Forgot password?{" "}
            <span className="font-semibold cursor-pointer active:text-black text-brand">
              Reset it
            </span>
          </div>
          <OrrangeButton label="Log in" type="submit" />
        </form>
        <div className="flex flex-col items-center gap-[0.5em] mt-[0.5em]">
          <p className="text-[0.6em]">Don’t have any account?</p>
          <WhiteButton label="Sign up" disabled={false} />
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
