import { Avatar, AvatarProps } from '@horus-finance/react';
import { StoryObj, Meta } from '@storybook/react';

export default {
	title: 'Data display/Avatar',
	component: Avatar,
	args: {
		src: 'https://github.com/davialc.png',
		alt: 'Davi Alcântara',
	},
	argTypes: {
		src: {
			control: {
				type: 'text',
			},
		},
	},
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithPlaceholder: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	},
};
