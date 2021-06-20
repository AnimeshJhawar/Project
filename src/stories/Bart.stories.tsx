/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Bart, BartProps } from "../screens/Bart";
import "antd/dist/antd.css";

export default {
  title: "Games/Bart",
  component: Bart,
} as Meta;

const Template: Story<BartProps> = (args) => <Bart {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
