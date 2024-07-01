import { cn } from "@/lib/utils";
import { Button, ButtonProps, ConfigProvider } from "antd";
import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: String;
  colorBtn?: "black" | "green" | null;
} & Omit<ButtonProps, "className">;

const CustomButton: FC<Props> = ({
  children,
  className,
  colorBtn,
  ...rest
}) => {
  const twClassName = cn([
    "border-2 py-6 text-base rounded-xl border-custom-secondary-color h-10",
    colorBtn === "black" &&
      "bg-custom-secondary-color hover:bg-white text-white [&_.perspective-text]:hover:text-black",
    colorBtn === "green" &&
      "hover:border-custom-primary-color hover:bg-custom-primary-color",
    className,
  ]);

  return (
    <ConfigProvider wave={{ disabled: true }}>
      <Button {...rest} type="text" className={twClassName}>
        {children}
      </Button>
    </ConfigProvider>
  );
};

export default CustomButton;
