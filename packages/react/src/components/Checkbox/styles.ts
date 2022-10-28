import { styled, keyframes } from '../../styles';
import * as Checkbox from '@radix-ui/react-checkbox';

export const CheckboxContainer = styled(Checkbox.Root, {
	all: 'unset',
	width: '$6',
	height: '$6',
	backgroundColor: '$gray150',
	borderRadius: '$xs',
	lineHeight: 0,
	cursor: 'pointer',
	overflow: 'hidden',
	boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	border: '2px solid $gray400',

	'&[data-state="checked"]': {
		backgroundColor: '$blue300',
	},

	'&:focus': {
		border: '2px solid $blue300',
	},
});

const slideIn = keyframes({
	from: {
		transform: 'translateY(-100%)',
	},
	to: {
		transform: 'translateY(0)',
	},
});

const slideOut = keyframes({
	from: {
		transform: 'translateY(0)',
	},
	to: {
		transform: 'translateY(-100%)',
	},
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
	color: '$gray200',
	width: '$4',
	height: '$4',

	'&[data-state="checked"]': {
		animation: `${slideIn} 200ms ease`,
	},

	'&[data-state="unchecked"]': {
		animation: `${slideOut} 200ms ease`,
	},
});
