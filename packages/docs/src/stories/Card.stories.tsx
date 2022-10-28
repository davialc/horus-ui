import { Card, CardProps } from '@horus-finance/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Data display/Card',
	component: Card,
	args: {
		label: 'Saldo',
		amount: 253,
		colorType: 'green',
	},
	argTypes: {
		colorType: {
			options: ['red', 'green', 'blue'],
			control: {
				type: 'inline-radio',
			},
		},
	},
} as Meta<CardProps>;

export const Primary: StoryObj<CardProps> = {};
