/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { IOWAInstructions1 } from "../screens/IOWAInstructions1";
import "antd/dist/antd.css";

export default {
  title: "Games/IOWAInstructions1",
  component: IOWAInstructions1,
} as Meta;

const Template: Story = (args) => <IOWAInstructions1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
