/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { StroopPractice, StroopPracticeProps } from "../screens/StroopPractice";
import "antd/dist/antd.css";

export default {
  title: "Games/StroopPractice",
  component: StroopPractice,
} as Meta;

const Template: Story<StroopPracticeProps> = (args) => (
  <StroopPractice {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
