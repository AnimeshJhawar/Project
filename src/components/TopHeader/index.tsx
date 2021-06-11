import Avatar from "antd/lib/avatar/avatar";
import Text from "antd/lib/typography/Text";
import React, { CSSProperties } from "react";
import styles from "./style.module.css";

export interface TopHeaderProps {
  logoSrc?: string;
  headerList?: { text: string; link: string }[];
  title?: string;
  textColor?: string;
  bgcolor?: string;
  style?: CSSProperties;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  logoSrc = "/assets/iitd.svg",
  title = "",
  headerList = [],
  textColor = "#442C2E",
  bgcolor = "rgba(255,255,255, 0.3)",
  style = {},
}) => {
  return (
    <div
      className={styles.header}
      style={{ background: bgcolor, color: textColor, ...style }}
    >
      <div className={styles.title}>
        <div>
          <Avatar src={logoSrc} size={10} shape="circle" />
        </div>
        <Text strong> {title} </Text>
      </div>
      <div className={styles.headerList}>
        {headerList.map((item) => {
          return <span key={item.text}>{item.text}</span>;
        })}
      </div>
    </div>
  );
};
