import type { Meta, StoryObj } from '@storybook/react';

import { CustomButton } from './CustomButton';

const meta = {
	title: 'Shared/CustomButton',
	component: CustomButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};

export const Square: Story = {
	args: {
		square: true,
		fullWidth: true,
	},
};
