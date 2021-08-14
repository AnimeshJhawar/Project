/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { TOLPractice, TOLPracticeProps } from "../screens/TOLPractice";
import "antd/dist/antd.css";

export default {
  title: "Games/TOLPractice",
  component: TOLPractice,
} as Meta;

const Template: Story<TOLPracticeProps> = (args) => <TOLPractice {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
