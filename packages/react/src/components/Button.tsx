import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Button = styled('button', {
	all: 'unset',
	borderRadius: '$sm',
	padding: '0 $4',
	fontSize: '$sm',
	fontWeight: '$medium',
	fontFamily: '$default',
	textAlign: 'center',
	minWidth: 120,
	boxSizing: 'border-box',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '$2',

	cursor: 'pointer',

	svg: {
		width: '$4',
		height: '$4',
	},

	'&:disabled': {
		backgroundColor: '$gray200',
		cursor: 'not-allowed',
	},

	variants: {
		variant: {
			primary: {
				color: '$white',
				backgroundColor: '$blue300',

				'&:not(:disabled):hover': {
					backgroundColor: '$blue200',
				},

				'&:disabled': {
					backgroundColor: '$gray200',
					color: '$gray400',
				},
			},
			secondary: {
				color: '$blue300',
				border: '2px solid $blue300',

				'&:not(:disabled):hover': {
					backgroundColor: '$blue300',
					color: '$white',
				},

				'&:disabled': {
					color: '$gray200',
					borderColor: '$gray200',
				},
			},
			tertiary: {
				color: '$gray400',
				border: '2px solid $gray300',

				'&:not(:disabled):hover': {
					color: '$gray200',
				},

				'&:disabled': {
					color: '$gray600',
					borderColor: '$gray600',
				},
			},
		},

		size: {
			sm: {
				height: 38,
			},
			md: {
				height: 46,
			},
		},
	},

	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
});

export interface ButtonProps extends ComponentProps<typeof Button> {
	as?: ElementType;
}

Button.displayName = 'Button';
