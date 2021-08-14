/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Demographic } from "../Surveys/Demographic";
import "antd/dist/antd.css";

export default {
  title: "Games/Demographic",
  component: Demographic,
} as Meta;

const Template: Story = (args) => <Demographic {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
