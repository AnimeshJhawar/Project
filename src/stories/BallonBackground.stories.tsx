/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  BalloonBackground,
  BalloonBackgroundProps,
} from "../components/BalloonBackground";
import "antd/dist/antd.css";

export default {
  title: "shared/BalloonBackground",
  component: BalloonBackground,
} as Meta;

const Template: Story<BalloonBackgroundProps> = (args) => (
  <BalloonBackground {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
