/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  BallonAnimated,
  BallonAnimatedProps,
} from "../components/BallonAnimated";
import "antd/dist/antd.css";

export default {
  title: "shared/BallonAnimated",
  component: BallonAnimated,
} as Meta;

const Template: Story<BallonAnimatedProps> = (args) => (
  <BallonAnimated {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
