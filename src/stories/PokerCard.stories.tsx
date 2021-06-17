/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { PokerCard, PokerCardProps } from "../components/PokerCard";
import "antd/dist/antd.css";

export default {
  title: "components/PokerCard",
  component: PokerCard,
} as Meta;

const Template: Story<PokerCardProps> = (args) => <PokerCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
