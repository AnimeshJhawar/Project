/* eslint-disable no-unused-vars */
import React, { ReactNode, useState } from "react";
import { Avatar } from "antd";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";
import Color from "color";
import { AvatarSize } from "antd/lib/avatar/SizeContext";
import styles from "./style.module.css";
import { ProgressiveImage } from "../ProgressiveImage";

export interface IconInContainerProps {
  size?: AvatarSize;
  letter?: string | false;
  avatarColor?: string;
  icon?: AntdIconProps | false;
  iconLink?: string;
  mobile?: boolean;
  blurIcon?: string;
  rightComponent?: ReactNode;
}

export const IconInContainer: React.FC<IconInContainerProps> = ({
  avatarColor = "rgba(32, 154, 229)",
  icon = false,
  iconLink,
  letter = false,
  mobile = false,
  blurIcon = "/assets/iitd.svg",
  rightComponent,
  size = 60,
}) => {
  return (
    <div
      className={`${styles.vectorContainer} ${
        mobile ? styles.vectorMobile : styles.vectorDesktop
      }`}
    >
      <Avatar
        style={{
          backgroundColor: Color(avatarColor).alpha(0.13).rgb().toString(),
          verticalAlign: "middle",
          color: avatarColor,
        }}
        size={size}
        shape="square"
        icon={icon || null}
      >
        {!iconLink && letter}
        {!!iconLink && (
          <ProgressiveImage imgSrc={iconLink} compressedSrc={blurIcon} />
        )}
      </Avatar>
      {rightComponent}
    </div>
  );
};
