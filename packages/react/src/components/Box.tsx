import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Box = styled('div', {
	padding: '$4',
	borderRadius: '$md',
	backgroundColor: '$gray100',
	border: '1px solid $gray400',

	variants: {
		size: {
			xs: {
				maxWidth: 200,
				maxHeight: 200,
				width: 200,
				height: 200,
			},
			sm: {
				maxWidth: 430,
				maxHeight: 430,
				width: 430,
				height: 430,
			},
			md: {
				maxWidth: 715,
				maxHeight: 715,
				width: 715,
				height: 715,
			},
			lg: {
				maxWidth: 1145,
				maxHeight: 1145,
				width: 1145,
				height: 1145,
			},
			none: {
				maxWidth: 'none',
			},
		},
	},
	defaultVariants: {
		size: 'none',
	},
});

export interface BoxProps extends ComponentProps<typeof Box> {
	as?: ElementType;
}

Box.displayName = 'Box';
