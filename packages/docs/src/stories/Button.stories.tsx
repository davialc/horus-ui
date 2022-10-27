import { Button, ButtonProps } from '@horus-finance/react';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Gear } from 'phosphor-react';

export default {
	title: 'Form/Button',
	component: Button,
	args: {
		children: 'Send',
		variant: 'primary',
		size: 'md',
	},
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'tertiary'],
			control: {
				type: 'inline-radio',
			},
		},
		size: {
			options: ['sm', 'md'],
			control: {
				type: 'inline-radio',
			},
		},
		disabled: {
			control: {
				type: 'boolean',
			},
		},
		onClick: {
			action: 'click',
		},
	},
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
	args: {
		variant: 'secondary',
		children: 'New',
	},
};

export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		variant: 'tertiary',
		children: 'Cancel',
	},
};

export const Small: StoryObj<ButtonProps> = {
	args: {
		size: 'sm',
	},
};

export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		children: (
			<>
				<Gear />
				Settings
			</>
		),
	},
};

export const Disabled: StoryObj<ButtonProps> = {
	args: {
		disabled: true,
	},
};
