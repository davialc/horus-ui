import { styled } from '../../styles';

export const TextInputContainer = styled('div', {
	backgroundColor: '$white',
	padding: '$3 $4',
	borderRadius: '$md',
	boxSizing: 'border-box',
	border: '2px solid $gray300',
	display: 'flex',
	alignItems: 'baseline',

	'&:has(input:focus)': {
		borderColor: '$blue300',
	},

	'&:has(input:disabled)': {
		opacity: 0.5,
		cursor: 'not-allowed',
	},
});

export const Prefix = styled('span', {
	fontFamily: '$default',
	fontSize: '$sm',
	color: '$gray400',
	fontWeight: '$regular',
});

export const Input = styled('input', {
	fontFamily: '$default',
	fontSize: '$sm',
	color: '$background',
	fontWeight: '$regular',
	background: 'transparent',
	border: 0,
	width: '100%',

	'&:focus': {
		outline: 0,
	},

	'&:disabled': {
		cursor: 'not-allowed',
		color: '$gray400',
	},

	'&:placeholder': {
		color: '$gray200',
	},
});
