/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Problem2 } from "../screens/Problem2";
import "antd/dist/antd.css";

export default {
  title: "Games/Problem2",
  component: Problem2,
} as Meta;

const Template: Story = (args) => <Problem2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
