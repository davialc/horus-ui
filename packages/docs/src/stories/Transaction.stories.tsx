import { Transaction, TransactionProps } from '@horus-finance/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Data display/Transaction',
	component: Transaction,
	args: {
		label: 'Shopping',
		amount: 34,
		date: 'Apr 27, 22',
		type: 'incoming',
	},
	argTypes: {
		type: {
			options: ['incoming', 'withdraw'],
			control: {
				type: 'inline-radio',
			},
		},
	},
} as Meta<TransactionProps>;

export const Primary: StoryObj<TransactionProps> = {};
