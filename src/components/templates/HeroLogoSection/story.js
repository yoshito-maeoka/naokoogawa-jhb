// import module readme
import readme from './readme.md?raw';
// import component
import HeroLogoSection from './index.vue';

export default {
  title: 'Templates/Logo/Hero Logo Section',
  component: HeroLogoSection,
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
  components: { HeroLogoSection },
  setup() {
    return { args };
  },
  template: `
    <hero-logo-section v-bind="args"></hero-logo-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  // add story properties
};
