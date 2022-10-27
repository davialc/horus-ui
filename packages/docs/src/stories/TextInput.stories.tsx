import { Box, Text, TextInput, TextInputProps } from '@horus-finance/react';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

export default {
	title: 'Form/TextInput',
	component: TextInput,
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
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
	args: {
		placeholder: 'Your name',
	},
};

export const WithPrefix: StoryObj<TextInputProps> = {
	args: {
		prefix: 'cal.com/',
	},
};

export const Disabled: StoryObj<TextInputProps> = {
	args: {
		disabled: true,
	},
};
