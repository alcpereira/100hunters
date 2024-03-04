import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    title: "Card Title",
    content: "Card content",
  },
};
