import { cn } from "@/lib/utils";
import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";
import React, { FC } from "react";

const { TextArea } = Input;

type Props = { label?: string; className?: string } & Omit<
  TextAreaProps,
  "className"
>;

const CustomTextarea: FC<Props> = ({ className, label, ...rest }) => {
  const twClassName = cn([
    "bg-white px-4 py-3 rounded-xl border-2 border-black",
    className,
  ]);

  return (
    <>
      <label htmlFor={rest.name}>{label}</label>
      <TextArea className={twClassName} {...rest} />
    </>
  );
};

export default CustomTextarea;
