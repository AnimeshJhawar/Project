/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { FileAddOutlined } from "@ant-design/icons";
import {
  IconInContainer,
  IconInContainerProps,
} from "../components/IconInContainer";

export default {
  title: "components/IconInContainer",
  component: IconInContainer,
} as Meta;

const Template: Story<IconInContainerProps> = (args) => (
  <IconInContainer {...args} />
);

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <FileAddOutlined />,
};

export const WithLetter = Template.bind({});
WithLetter.args = {
  letter: "K",
};

export const WithImage = Template.bind({});
WithImage.args = {
  iconLink: "/assets/iitd.jpg",
};
