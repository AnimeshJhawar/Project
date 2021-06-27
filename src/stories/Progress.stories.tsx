/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";

import { Progress, ProgressProps } from "../components/Progress";

export default {
  title: "components/Progress",
  component: Progress,
  argTypes: {
    successColor: {
      type: "color",
    },
  },
} as Meta;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const Half = Template.bind({});
Half.args = {
  percent: 33,
};
export const Full = Template.bind({});
Full.args = {
  percent: 100,
};
export const WithTitle = Template.bind({});
WithTitle.args = {
  percent: 20,
  title: "2/10",
};
export const WithSteps = Template.bind({});
WithSteps.args = {
  percent: 100 / 3,
  steps: ["Step 1", "Step 2", "Step 3"],
};
