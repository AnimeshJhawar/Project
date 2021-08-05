/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { IOWAPractice, IOWAPracticeProps } from "../screens/IOWAPractice";
import "antd/dist/antd.css";

export default {
  title: "Games/IOWAPractice",
  component: IOWAPractice,
} as Meta;

const Template: Story<IOWAPracticeProps> = (args) => <IOWAPractice {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
