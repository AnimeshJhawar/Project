/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";

import { TopHeader, TopHeaderProps } from "../components/TopHeader";

export default {
  title: "shared/TopHeader",
  component: TopHeader,
} as Meta;

const Template: Story<TopHeaderProps> = (args) => <TopHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
