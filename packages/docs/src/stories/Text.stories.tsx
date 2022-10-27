import { Text, TextProps } from '@horus-finance/react';
import { StoryObj, Meta } from '@storybook/react';

export default {
	title: 'Typography/Text',
	component: Text,
	args: {
		children: 'Text example',
		variant: 'md',
	},
	argTypes: {
		variant: {
			options: [
				'xxs',
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
				'2xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl',
			],
			control: {
				type: 'inline-radio',
			},
		},
	},
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
	args: {
		children: 'Strong text',
		as: 'strong',
	},
};
