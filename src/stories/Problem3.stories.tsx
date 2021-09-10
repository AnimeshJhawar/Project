/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Problem3 } from "../screens/Problem3";
import "antd/dist/antd.css";

export default {
  title: "Games/Problem3",
  component: Problem3,
} as Meta;

const Template: Story = (args) => <Problem3 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
