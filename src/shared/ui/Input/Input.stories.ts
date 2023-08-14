import type { Meta, StoryObj } from '@storybook/react';

import { InputCustom } from './Input';

const meta = {
  title: 'Shared/InputCustom',
  component: InputCustom,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof InputCustom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'InputCustom',
  },
};
