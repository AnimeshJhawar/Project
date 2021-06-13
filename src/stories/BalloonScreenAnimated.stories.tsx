/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  BalloonScreenAnimated,
  BalloonScreenAnimatedProps,
} from "../components/BalloonScreenAnimated";
import "antd/dist/antd.css";

export default {
  title: "components/BalloonScreenAnimated",
  component: BalloonScreenAnimated,
} as Meta;

const Template: Story<BalloonScreenAnimatedProps> = (args) => (
  <BalloonScreenAnimated {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  trialCounts: [20, 5, 3],
  balloonColors: ["red", "blue", "green"],
};
