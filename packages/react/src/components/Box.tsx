import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Box = styled('div', {
	padding: '$4',
	borderRadius: '$md',
	backgroundColor: '$gray100',
	border: '1px solid $gray400',
});

export interface BoxProps extends ComponentProps<typeof Box> {
	as?: ElementType;
}

Box.displayName = 'Box';
