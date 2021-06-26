/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { PokerDeck, PokerDeckProps } from "../components/PokerCard";
import "antd/dist/antd.css";

export default {
  title: "components/PokerCard",
  component: PokerDeck,
} as Meta;

const Template: Story<PokerDeckProps> = (args) => <PokerDeck {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
