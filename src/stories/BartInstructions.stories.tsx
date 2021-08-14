/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { BartInstructions } from "../screens/BartInstructions";
import "antd/dist/antd.css";

export default {
  title: "Games/BartInstructions",
  component: BartInstructions,
} as Meta;

const Template: Story = (args) => <BartInstructions {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
