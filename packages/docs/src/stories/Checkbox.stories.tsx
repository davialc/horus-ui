import { Box, Text, Checkbox, CheckboxProps } from '@horus/react';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

export default {
	title: 'Form/Checkbox',
	component: Checkbox,
	decorators: [
		(Story) => {
			return (
				<Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
					{Story()}
					<Text variant="sm">Terms of use</Text>
				</Box>
			);
		},
	],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
