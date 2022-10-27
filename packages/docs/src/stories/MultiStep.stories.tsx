import { Box, MultiStep, MultiStepProps, Text } from '@horus/react';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
	title: 'Form/MultiStep',
	component: MultiStep,
	args: {
		length: 4,
		currentStep: 1,
	},
	decorators: [
		(Story) => {
			return (
				<Box
					as="label"
					css={{ display: 'flex', flexDirection: 'column', gap: 2 }}
				>
					<Text variant="sm">Username</Text>
					{Story()}
				</Box>
			);
		},
	],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};

export const Full: StoryObj<MultiStepProps> = {
	args: {
		currentStep: 4,
	},
};
