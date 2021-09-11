/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Proceed } from "../screens/Proceed";
import "antd/dist/antd.css";

export default {
  title: "Games/Proceed",
  component: Proceed,
} as Meta;

const Template: Story = (args) => <Proceed {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
