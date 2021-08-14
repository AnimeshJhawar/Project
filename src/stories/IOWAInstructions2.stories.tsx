/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { Story, Meta } from "@storybook/react";
import { IOWAInstructions2 } from "../screens/IOWAInstructions2";
import "antd/dist/antd.css";

export default {
  title: "Games/IOWAInstructions2",
  component: IOWAInstructions2,
} as Meta;

const Template: Story = (args) => <IOWAInstructions2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
