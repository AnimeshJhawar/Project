/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { BalloonPump, BalloonPumpProps } from "../components/BalloonPump";
import "antd/dist/antd.css";

export default {
  title: "shared/BalloonPump",
  component: BalloonPump,
} as Meta;

const Template: Story<BalloonPumpProps> = (args) => <BalloonPump {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
