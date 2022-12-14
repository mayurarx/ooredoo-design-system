import React from 'react';
import { Meta, Story } from '@storybook/react';
import { UsageCard, Props } from '../src/components/UsageCard';

const sim_card = require('../static/icons/sim_card.png');
// import sim_card_img from '../static/icons/sim_card.png';

const meta: Meta = {
  title: 'components/UsageCard',
  component: UsageCard,
  argTypes: {
    icon: {
      control: false,
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => (
  <UsageCard {...args} className="w-[360px]" />
);

export const Default = Template.bind({});

Default.args = {
  icon: <img src={sim_card} alt="Sim Card" />,
  type: 'Purchases',
  title: 'Maxi Internet 1000',
  description: 'Free 020 + 15min Offnet',
  extras: 'Valid till 10-10-2023',
  titleColor: 'teal',
};
