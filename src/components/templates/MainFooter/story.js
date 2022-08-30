// import module readme
import readme from './readme.md?raw';
// import component
import MainFooter from './index.vue';

export default {
  title: 'Templates/Footer/Main Footer',
  component: MainFooter,
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
  components: { MainFooter },
  setup() {
    return { args };
  },
  template: `
    <main-footer v-bind="args"></main-footer>
  `,
});

export const Default = Template.bind({});
Default.args = {
  // add story properties
};
