/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { BartPractice, BartPracticeProps } from "../screens/BartPractice";
import "antd/dist/antd.css";

export default {
  title: "Games/BartPractice",
  component: BartPractice,
} as Meta;

const Template: Story<BartPracticeProps> = (args) => <BartPractice {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
