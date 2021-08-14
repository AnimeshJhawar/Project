/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { GeneralInstructions } from "../screens/GeneralInstructions";
import "antd/dist/antd.css";

export default {
  title: "Games/GeneralInstructions",
  component: GeneralInstructions,
} as Meta;

const Template: Story = (args) => <GeneralInstructions {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
