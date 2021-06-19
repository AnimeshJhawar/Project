/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { StroopGame, StroopGameProps } from "../components/StroopGame";
import "antd/dist/antd.css";

export default {
  title: "components/StroopGame",
  component: StroopGame,
} as Meta;

const Template: Story<StroopGameProps> = (args) => <StroopGame {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
