import { Progress, ProgressProps } from '@horus-finance/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Data display/Progress',
	component: Progress,
	args: {
		defaultValue: [10],
		step: 1,
		max: 100,
	},
} as Meta<ProgressProps>;

export const Primary: StoryObj<ProgressProps> = {};
