/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { BallonPump, BallonPumpProps } from "../components/BallonPump";
import "antd/dist/antd.css";

export default {
  title: "shared/BallonPump",
  component: BallonPump,
} as Meta;

const Template: Story<BallonPumpProps> = (args) => <BallonPump {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
