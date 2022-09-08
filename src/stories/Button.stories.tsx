import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { Sizes, Themes } from '../components/Button/index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  config:{
    text: 'Lorem ipsum',
  },
  styling: {
    theme: Themes.primary,
    size: Sizes.standard
  }
};

export const Secondary = Template.bind({});
Secondary.args =  {
  config:{
    text: 'Lorem ipsum',
  },
  styling: {
    theme: Themes.secondary,
    size: Sizes.standard
  }
};
export const Standard = Template.bind({});
Standard.args ={
  config:{
    text: 'Lorem ipsum',
  },
  styling: {
    theme: Themes.primary,
    size: Sizes.standard
  }
};

export const Small = Template.bind({});
Small.args ={
  config:{
    text: 'Lorem ipsum',
  },
  styling: {
    theme: Themes.primary,
    size: Sizes.small
  }
};

export const FullWidth = Template.bind({});
FullWidth.args ={
  config:{
    text: 'Lorem ipsum',
  },
  styling: {
    theme: Themes.secondary,
    size: Sizes.small,
    fullWidth: true
  }
};
