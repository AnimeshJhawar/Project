/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { StroopCard, StroopCardProps } from "../components/StroopCard";
import "antd/dist/antd.css";

export default {
  title: "components/StroopCard",
  component: StroopCard,
} as Meta;

const Template: Story<StroopCardProps> = (args) => <StroopCard {...args} />;

export const Correct = Template.bind({});
Correct.args = {
  correct: true,
};

export const Wrong = Template.bind({});
Wrong.args = {};
