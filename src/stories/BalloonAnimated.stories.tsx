/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  BalloonAnimated,
  BalloonAnimatedProps,
} from "../components/BalloonAnimated";
import "antd/dist/antd.css";

export default {
  title: "components/BalloonAnimated",
  component: BalloonAnimated,
} as Meta;

const Template: Story<BalloonAnimatedProps> = (args) => (
  <BalloonAnimated {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: "Blue",
};
