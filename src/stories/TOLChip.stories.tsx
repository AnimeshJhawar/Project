/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { TOLChip, TOLChipProps } from "../components/TOLChip";
import "antd/dist/antd.css";

export default {
  title: "Components/TOLChip",
  component: TOLChip,
} as Meta;

const Template: Story<TOLChipProps> = (args) => <TOLChip {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
