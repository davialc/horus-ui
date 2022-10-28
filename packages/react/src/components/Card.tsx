import { colors } from '@horus-finance/tokens';
import { ComponentProps } from 'react';
import { styled } from '../styles';
import { currencyConvert } from '../utils/CurrencyConvert';

export interface CardProps extends ComponentProps<typeof CardContainer> {
	label: string;
	amount: number;
	colorType: 'red' | 'green' | 'blue';
}

const CardContainer = styled('div', {
	padding: '$4 30px',
	boxShadow: '0 0 0 2px #EEEEEE',
	borderRadius: '$md',
	width: 220,
	boxSizing: 'border-box',
	position: 'relative',
	overflow: 'hidden',

	'&:before': {
		content: '',
		display: 'block',
		backgroundColor: 'var(--color-type)',
		position: 'absolute',
		left: 0,
		top: 0,
		height: '100%',
		width: 8,
		zIndex: 2,
	},
});

const Label = styled('h3', {
	all: 'unset',
	display: 'block',
	fontFamily: '$default',
	fontWeight: '$medium',
	color: '$gray450',
});

const Amount = styled('span', {
	fontFamily: '$default',
	fontSize: '$lg',
	fontWeight: '$bold',
	display: 'block',
	color: '$background',
	marginTop: '$3',
});

export const Card = ({ amount, label, colorType }: CardProps) => {
	const colorValue =
		colorType === 'red'
			? colors.red500
			: colorType === 'blue'
			? colors.blue300
			: colors.green500;
	return (
		<CardContainer css={{ '--color-type': colorValue }}>
			<Label>{label}</Label>
			<Amount>{currencyConvert(amount)}</Amount>
		</CardContainer>
	);
};
