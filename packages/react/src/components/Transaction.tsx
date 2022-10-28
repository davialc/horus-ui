import { colors } from '@horus-finance/tokens';
import { ArrowsDownUp } from 'phosphor-react';
import { ComponentProps } from 'react';
import { styled } from '../styles';
import { currencyConvert } from '../utils/CurrencyConvert';

export const TransactionContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '$4',
	justifyContent: 'space-between',
	minWidth: '100%',
});

const Box = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	flex: 1,
});

export const Icon = styled('div', {
	width: 54,
	height: 54,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '$blue100',
	borderRadius: '$lg',
	color: '$white',
	position: 'relative',

	'&:before': {
		content: '',
		display: 'block',
		borderRadius: '$full',
		position: 'absolute',
		backgroundColor: '$blue300',
		height: 32,
		width: 32,
	},

	svg: {
		width: '$5',
		height: '$5',
		zIndex: 2,
	},
});

export const Label = styled('h3', {
	all: 'unset',
	fontFamily: '$default',
	fontWeight: '$bold',
	color: '$background',
});

export const Date = styled('time', {
	fontFamily: '$default',
	fontWeight: '$regular',
	color: '$background',
});

const Amount = styled('span', {
	color: 'var(--transaction-type)',
	fontFamily: '$default',
	fontWeight: '$regular',
});

export interface TransactionProps
	extends ComponentProps<typeof TransactionContainer> {
	label: string;
	date: string;
	amount: number;
	type: 'incoming' | 'withdraw';
}

export const Transaction = ({
	amount,
	date,
	label,
	type,
}: TransactionProps) => {
	const colorValue = type === 'withdraw' ? colors.red500 : colors.green500;
	return (
		<TransactionContainer>
			<Icon>
				<ArrowsDownUp weight="bold" />
			</Icon>
			<Box>
				<Label>{label}</Label>
				<Date>{date}</Date>
			</Box>
			<Amount css={{ '--transaction-type': colorValue }}>
				{type === 'incoming' ? '+ ' : '- '}
				{currencyConvert(amount)}
			</Amount>
		</TransactionContainer>
	);
};
