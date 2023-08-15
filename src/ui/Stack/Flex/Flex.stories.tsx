import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta = {
	title: 'Shared/Flex',
	component: Flex,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
	args: {
		children: (
			<>
				<div>123</div>
				<div>123</div>
				<div>123</div>
			</>
		),
	},
};

export const Column: Story = {
	args: {
		direction: 'column',
		children: (
			<>
				<div>123</div>
				<div>123</div>
				<div>123</div>
			</>
		),
	},
};

export const RowGap4: Story = {
	args: {
		gap: '4',
		children: (
			<>
				<div>123</div>
				<div>123</div>
				<div>123</div>
			</>
		),
	},
};

export const RowGap8: Story = {
	args: {
		gap: '8',
		children: (
			<>
				<div>123</div>
				<div>123</div>
				<div>123</div>
			</>
		),
	},
};

export const RowGap16: Story = {
	args: {
		gap: '16',
		children: (
			<>
				<div>123</div>
				<div>123</div>
				<div>123</div>
			</>
		),
	},
};

export const RowGap32: Story = {
	args: {
		gap: '32',
		children: (
			<>
				<div>123</div>
				<div>123</div>
				<div>123</div>
			</>
		),
	},
};

export const ColumnGap16: Story = {
	args: {
		gap: '16',
		direction: 'column',
		children: (
			<>
				<div>123</div>
				<div>123</div>
				<div>123</div>
			</>
		),
	},
};

export const ColumnAlignEnd: Story = {
	args: {
		align: 'end',
		direction: 'column',
		children: (
			<>
				<div>123</div>
				<div>123</div>
				<div>123</div>
			</>
		),
	},
};
