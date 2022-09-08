import { Meta, Story } from "@storybook/vue3";
import CardContainer from "./CardContainer.vue";

export default {
  title: "Container/CardContainer",
  component: CardContainer,
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
} as Meta;

interface ICardCotnainerProps {
  boxShadow?: string;
  backgroundColor?: string;
  borderRadius?: string | number;
}

const Template: Story<ICardCotnainerProps> = (args) => ({
  components: {
    CardContainer,
  },
  setup() {
    return { args };
  },
  template: '<CardContainer class="p-4">Sample Container</CardContainer>',
});

export const Primary = Template.bind({});

Primary.args = {
  boxShadow: "none",
  backgroundColor: "red",
  borderRadius: "0.5rem",
};
