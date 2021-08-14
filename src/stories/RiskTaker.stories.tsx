/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { RiskTaker } from "../screens/RiskTaker";
import "antd/dist/antd.css";

export default {
  title: "Games/RiskTaker",
  component: RiskTaker,
} as Meta;

const Template: Story = (args) => <RiskTaker {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
