/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  BallonBackground,
  BallonBackgroundProps,
} from "../components/BallonBackground";
import "antd/dist/antd.css";

export default {
  title: "shared/BallonBackground",
  component: BallonBackground,
} as Meta;

const Template: Story<BallonBackgroundProps> = (args) => (
  <BallonBackground {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
