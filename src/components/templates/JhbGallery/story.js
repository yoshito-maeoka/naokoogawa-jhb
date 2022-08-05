// import module readme
import readme from './readme.md?raw';
// import component
import JhbGallery from './index.vue';

export default {
  title: 'Templates/Gallery/Jhb Gallery',
  component: JhbGallery,
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
  components: { JhbGallery },
  setup() {
    return { args };
  },
  template: `
    <jhb-gallery v-bind="args"></jhb-gallery>
  `,
});

export const Default = Template.bind({});
Default.args = {
  // add story properties
};
