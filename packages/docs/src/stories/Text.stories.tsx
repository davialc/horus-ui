import { Text, TextProps } from '@horus/react';
import { StoryObj, Meta } from '@storybook/react';

export default {
	title: 'Typography/Text',
	component: Text,
	args: {
		children: 'Text example',
	},
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
	args: {
		children: 'Strong text',
		as: 'strong',
	},
};
