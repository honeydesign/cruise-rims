import React from "react";

type Props = {
  placeholder?: string;
  className: string;
  divClassName: string;
};

const TextArea = ({ placeholder, className, divClassName }: Props) => {
  return (
    <div className={divClassName}>
      <textarea placeholder={placeholder} className={className} />
    </div>
  );
};

export default TextArea;
