/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Stroop, StroopProps } from "../screens/Stroop";
import "antd/dist/antd.css";

export default {
  title: "Games/Stroop",
  component: Stroop,
} as Meta;

const Template: Story<StroopProps> = (args) => <Stroop {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
