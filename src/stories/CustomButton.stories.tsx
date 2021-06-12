/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { MdSearch, MdThumbUp, MdAddCircleOutline } from "react-icons/md";
import { CustomButton, ButtonProps } from "../components/CustomButton";
import "antd/dist/antd.css";

export default {
  title: "shared/CustomButton",
  component: CustomButton,
} as Meta;

const Template: Story<ButtonProps> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isSecondary: false,
  text: "START",
  size: "large",
  block: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  isSecondary: true,
  text: "Button",
  size: "large",
};
export const WithIcon = Template.bind({});
WithIcon.args = {
  prefixIcon: (
    <MdAddCircleOutline
      style={{
        marginRight: "7px",
      }}
      fontSize={20}
    />
  ),
  text: "Icon And Text",
  size: "large",
};
export const WithIconGhost = Template.bind({});
WithIconGhost.args = {
  prefixIcon: (
    <MdThumbUp
      style={{
        marginLeft: "7px",
      }}
      fontSize={16}
    />
  ),
  style: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  iconRight: true,
  type: "text",
  text: "Like",
  size: "small",
};
export const RoundButton = Template.bind({});
RoundButton.args = {
  prefixIcon: <MdSearch fontSize={24} />,
  size: "large",
  round: true,
  text: " ",
  style: {
    height: "48px",
    width: "60px",
    padding: "10px",
  },
};
