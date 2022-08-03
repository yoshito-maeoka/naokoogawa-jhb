// import module readme
import readme from './readme.md?raw';
// import component
import LanguageMenu from './index.vue';

export default {
  title: 'Molecules/Menu/Language Menu',
  component: LanguageMenu,
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
  components: { LanguageMenu },
  setup() {
    return { args };
  },
  template: `
    <language-menu v-bind="args"></language-menu>
  `,
});

export const Default = Template.bind({});
Default.args = {
  // add story properties
};
