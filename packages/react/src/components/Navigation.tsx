import * as Toolbar from '@radix-ui/react-toolbar';
import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Navigation = styled(Toolbar.Root, {
	backgroundColor: '$white',
	height: '100%',
	width: 'fit-content',
	padding: '$5 $4',
	boxShadow: '1px 1px 1px rgba(175, 175, 175, 0.25)',
});

export const NavigationButton = styled(Toolbar.Button, {
	all: 'unset',
	padding: '$3',
	backgroundColor: '$white',
	color: '$gray450',
	fontFamily: '$default',
	fontWeight: '$medium',
	boxShadow: '1px 1px 1px rgba(175, 175, 175, 0.25)',
	borderRadius: '$md',
	display: 'flex',
	gap: '$3',
	minWidth: 230,

	'&:hover': {
		transform: 'scale(1.02)',
	},

	'&:active': {
		backgroundColor: '$blue100',
		color: '$blue300',
	},

	'& + button': {
		marginTop: '$2',
	},

	svg: {
		width: '$4',
		height: '$4',
		color: 'inherit',
	},
});

export interface NavigationProps extends ComponentProps<typeof Navigation> {
	as?: ElementType;
}
