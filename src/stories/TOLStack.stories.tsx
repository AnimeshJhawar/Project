/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { TOLStack, TOLStackProps } from "../components/TOLStack";
import "antd/dist/antd.css";

export default {
  title: "Components/TOLStack",
  component: TOLStack,
} as Meta;

const Template: Story<TOLStackProps> = (args) => <TOLStack {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
