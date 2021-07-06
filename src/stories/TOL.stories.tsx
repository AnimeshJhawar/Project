/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { TOL, TOLProps } from "../screens/TOL";
import "antd/dist/antd.css";

export default {
  title: "Games/TOL",
  component: TOL,
} as Meta;

const Template: Story<TOLProps> = (args) => <TOL {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
