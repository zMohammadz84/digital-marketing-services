import { Radio, RadioProps } from "antd";
import { FC } from "react";

type Props = {} & RadioProps;

const CustomRadio: FC<Props> = ({ children, ...rest }) => {
  return <Radio {...rest}>{children}</Radio>;
};

export default CustomRadio;
