import { Heading, HeadingProps } from '@horus/react';
import { StoryObj, Meta } from '@storybook/react';

export default {
	title: 'Typography/Heading',
	component: Heading,
	args: {
		children: 'Heading example',
	},
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
	args: {
		children: 'H1 Heading',
		as: 'h1',
	},
};
