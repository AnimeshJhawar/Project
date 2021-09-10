/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Problem1 } from "../screens/Problem1";
import "antd/dist/antd.css";

export default {
  title: "Games/Problem1",
  component: Problem1,
} as Meta;

const Template: Story = (args) => <Problem1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
