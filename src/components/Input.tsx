import React from "react";

type Props = {
  placeholder?: string;
  className: string;
  divClassName: string;
};

const Input = ({ placeholder, className, divClassName }: Props) => {
  return (
    <div className={divClassName}>
      <input placeholder={placeholder} className={className} />
    </div>
  );
};

export default Input;
