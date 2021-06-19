/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { StroopText, StroopTextProps } from "../components/StroopText";
import "antd/dist/antd.css";

export default {
  title: "components/StroopText",
  component: StroopText,
} as Meta;

const Template: Story<StroopTextProps> = (args) => <StroopText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Blue",
  ink: "Green",
};
