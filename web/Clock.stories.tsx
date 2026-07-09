import type { Meta, StoryObj } from "@storybook/react";
import { Clock } from "./index";

const meta = { title: "Widgets/Clock", component: Clock } satisfies Meta<typeof Clock>;
export default meta;

export const Default: StoryObj<typeof Clock> = {
  args: { settings: {}, setSettings: () => {}, editing: false },
};

export const Editing: StoryObj<typeof Clock> = {
  args: { settings: {}, setSettings: () => {}, editing: true },
};
