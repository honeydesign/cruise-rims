import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  type: "submit" | "reset" | "button" | "undefined";
  onClick?: () => void;
};

const Button = ({ children, className, type, onClick, ...rest }: Props) => {
  return (
    <button
      className={"text-white font-extrabold text-xl text-center" + className}
    >
      {children}
    </button>
  );
};

export default Button;
