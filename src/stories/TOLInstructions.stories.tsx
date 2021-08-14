/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { TOLInstructions1 } from "../screens/TOLInstructions1";
import "antd/dist/antd.css";

export default {
  title: "Games/TOLInstructions1",
  component: TOLInstructions1,
} as Meta;

const Template: Story = (args) => <TOLInstructions1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
