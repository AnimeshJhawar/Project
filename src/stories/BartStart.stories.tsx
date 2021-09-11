/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { BartStart } from "../screens/BartStart";
import "antd/dist/antd.css";

export default {
  title: "Games/BartStart",
  component: BartStart,
} as Meta;

const Template: Story = (args) => <BartStart {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
