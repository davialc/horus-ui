import { Box, Text, TextArea, TextAreaProps } from '@horus/react';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

export default {
	title: 'Form/TextArea',
	component: TextArea,
	argTypes: {
		disabled: {
			control: {
				type: 'boolean',
			},
		},
	},
	decorators: [
		(Story) => {
			return (
				<Box
					as="label"
					css={{ display: 'flex', flexDirection: 'column', gap: 2 }}
				>
					<Text variant="sm">Description</Text>
					{Story()}
				</Box>
			);
		},
	],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
	args: {
		placeholder: 'Description here',
	},
};

export const Disabled: StoryObj<TextAreaProps> = {
	args: {
		disabled: true,
	},
};
