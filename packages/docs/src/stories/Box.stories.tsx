import { Box, BoxProps, Text } from '@horus-finance/react';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

export default {
	title: 'Surfaces/Box',
	component: Box,
	args: {
		children: (
			<>
				<Text>Elemento box</Text>
			</>
		),
	},
	argTypes: {
		children: {
			control: {
				type: null,
			},
		},
	},
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
