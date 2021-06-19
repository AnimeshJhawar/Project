/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { StroopTrial, StroopTrialProps } from "../components/StroopTrial";
import "antd/dist/antd.css";

export default {
  title: "components/StroopTrial",
  component: StroopTrial,
} as Meta;

const Template: Story<StroopTrialProps> = (args) => <StroopTrial {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  stroopTrial: { text: "Red", ink: "blue", inkKey: "b" },
  result: () => null,
};
