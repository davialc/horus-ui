import { Avatar, AvatarProps } from '@horus/react';
import { StoryObj, Meta } from '@storybook/react';

export default {
	title: 'Data display/Avatar',
	component: Avatar,
	args: {
		src: 'https://github.com/davialc.png',
		alt: 'Davi Alcântara',
	},
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithPlaceholder: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	},
};
