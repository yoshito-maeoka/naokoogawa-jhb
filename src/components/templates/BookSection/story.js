// import module readme
import readme from './readme.md?raw';
// import component
import BookSection from './index.vue';

export default {
  title: 'Templates/Section/Book Section',
  component: BookSection,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: { BookSection },
  setup() {
    return { args };
  },
  template: `
    <book-section v-bind="args"></book-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  // add story properties
};
