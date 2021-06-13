import { Button } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import classnames from "classnames";
import React from "react";
import styles from "./style.module.css";

export interface ButtonProps {
  disabled?: boolean;
  onClick?: Function;
  text?: string;
  isSecondary?: boolean;
  prefixIcon?: any;
  block?: boolean;
  size?: SizeType;
  round?: boolean;
  style?: object;
  ghost?: boolean;
  iconRight?: boolean;
  className?: string;
  type?: "text" | "link" | "ghost" | "default" | "primary" | "dashed";
}

export const CustomButton: React.FC<ButtonProps> = ({
  text = " ",
  isSecondary = false,
  prefixIcon,
  block = false,
  round = false,
  size = "middle",
  type = "primary",
  className = "",
  style = {},
  onClick = () => null,
  disabled = false,
}) => {
  const colorStyle = isSecondary ? "#209AE5" : "";
  return (
    <Button
      disabled={disabled}
      onClick={(e) => onClick(e)}
      className={classnames(styles.button, className)}
      block={block}
      type={isSecondary ? "default" : type}
      icon={prefixIcon}
      style={{
        color: colorStyle,
        height: size === "middle" ? "36px" : "",
        borderRadius: round ? "8px" : "",
        ...style,
      }}
      size={size}
    >
      {text}
    </Button>
  );
};
