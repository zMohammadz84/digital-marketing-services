import { cn } from "@/lib/utils";
import { Input, InputProps } from "antd";
import React, { FC } from "react";

type Props = { label?: string; className?: String } & Omit<
  InputProps,
  "className"
>;

const CustomInput: FC<Props> = ({ className, label, ...rest }) => {
  const twClassName = cn([
    "bg-white px-4 py-3 rounded-xl border-2 border-black",
    className,
  ]);

  return (
    <>
      {label && <label htmlFor={rest.name}>{label}</label>}
      <Input className={twClassName} {...rest} />
    </>
  );
};

export default CustomInput;
