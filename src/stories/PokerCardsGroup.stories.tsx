/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  PokerCardsGroup,
  PokerCardsGroupProps,
} from "../components/PokerCardsGroup";
import "antd/dist/antd.css";

export default {
  title: "components/PokerCardsGroup",
  component: PokerCardsGroup,
} as Meta;

const Template: Story<PokerCardsGroupProps> = (args) => (
  <PokerCardsGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
