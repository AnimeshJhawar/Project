/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Ask } from "../screens/Ask";
import "antd/dist/antd.css";

export default {
  title: "Games/Ask",
  component: Ask,
} as Meta;

const Template: Story = (args) => <Ask {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
