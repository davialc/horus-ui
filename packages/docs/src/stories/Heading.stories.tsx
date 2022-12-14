import { Heading, HeadingProps } from '@horus-finance/react';
import { StoryObj, Meta } from '@storybook/react';

export default {
	title: 'Typography/Heading',
	component: Heading,
	args: {
		children: 'Heading example',
		variant: 'md',
	},
	argTypes: {
		variant: {
			options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
			control: {
				type: 'inline-radio',
			},
		},
	},
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
	args: {
		children: 'H1 Heading',
		as: 'h1',
	},
	parameters: {
		docs: {
			description: {
				story:
					'By default the heading element will be a "h2" element, but it can be changed with the "as" property',
			},
		},
	},
};
