// import module readme
import readme from './readme.md?raw';
// import component
import ExhibitionSection from './index.vue';

export default {
  title: 'Templates/Section/Exhibition Section',
  component: ExhibitionSection,
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
  components: { ExhibitionSection },
  setup() {
    return { args };
  },
  template: `
    <exhibition-section v-bind="args"></exhibition-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  // add story properties
};
