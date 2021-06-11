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
Primary.args = {
  title: "Header Title",
  headerList: [
    { text: "Game 1", link: "link" },
    { text: "Game 2", link: "link" },
    { text: "Game 3", link: "link" },
  ],
};
