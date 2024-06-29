import type { Meta, StoryObj } from "@storybook/vue3";
import BasicButton from "./BasicButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "BasicButton",
  component: BasicButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["contained", "outlined"] },
    fit: { control: "boolean" },
    full: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  },
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args };
    },
    template: `
      <BasicButton :="args">
        Button
      </BasicButton>
    `,
  }),
} satisfies Meta<typeof BasicButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Contained: Story = {
  args: {
    variant: "contained",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const ContainedDisabled: Story = {
  args: {
    variant: "contained",
    disabled: true,
  },
};

export const OutlinedDisabled: Story = {
  args: {
    variant: "outlined",
    disabled: true,
  },
};

export const Fit: Story = {
  args: {
    fit: true,
  },
};

export const Full: Story = {
  args: {
    full: true,
  },
};
