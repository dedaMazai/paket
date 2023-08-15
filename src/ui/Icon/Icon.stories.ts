import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { ReactComponent as Example } from './Example.svg';

const meta = {
	title: 'Shared/Icon',
	component: Icon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		Svg: Example,
	},
};
