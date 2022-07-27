// import module readme
import readme from './readme.md?raw';
// import component
import ShopComingSoon from './index.vue';

export default {
  title: 'Templates/Section/Shop Coming Soon',
  component: ShopComingSoon,
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
  components: { ShopComingSoon },
  setup() {
    return { args };
  },
  template: `
    <shop-coming-soon v-bind="args"></shop-coming-soon>
  `,
});

export const Default = Template.bind({});
Default.args = {
  // add story properties
};
