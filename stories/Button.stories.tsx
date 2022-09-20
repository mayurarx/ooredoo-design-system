import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/tokens/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    className: {
      defaultValue: 'px-8 py-2',
    },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Filled = Template.bind({});
export const Outline = Template.bind({});

Filled.args = {
  variant: 'filled',
  children: 'BUTTON',
};

Outline.args = {
  variant: 'outline',
  children: 'BUTTON',
};
