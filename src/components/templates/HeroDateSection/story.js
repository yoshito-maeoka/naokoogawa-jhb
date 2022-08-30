// import module readme
import readme from './readme.md?raw';
// import component
import HeroDateSection from './index.vue';

export default {
  title: 'Templates/Date/Hero Date Section',
  component: HeroDateSection,
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
  components: { HeroDateSection },
  setup() {
    return { args };
  },
  template: `
    <hero-date-section v-bind="args"></hero-date-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  // add story properties
};
