/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { IOWA, IOWAProps } from "../screens/IOWA";
import "antd/dist/antd.css";

export default {
  title: "Games/IOWA",
  component: IOWA,
} as Meta;

const Template: Story<IOWAProps> = (args) => <IOWA {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
