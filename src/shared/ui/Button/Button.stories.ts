import type { Meta, StoryObj } from '@storybook/react';

import { SizeButton, Button } from './Button';

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    square: true,
    size: SizeButton.M,
  },
};
