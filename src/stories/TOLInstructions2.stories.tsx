/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { Story, Meta } from "@storybook/react";
import { TOLInstructions2 } from "../screens/TOLInstructions2";
import "antd/dist/antd.css";

export default {
  title: "Games/TOLInstructions2",
  component: TOLInstructions2,
} as Meta;

const Template: Story = (args) => <TOLInstructions2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
