import { styled } from '../../styles';
import { Text } from '../Text';

export const MultiStepContainer = styled('div', {});

export const MultiStepLabel = styled(Text, {
	color: '$gray500',

	defaultVariants: {
		variant: 'xs',
	},
});

export const Steps = styled('div', {
	display: 'grid',
	gridTemplateColumns: 'repeat(var(--steps-length), 1fr)',
	gap: '$2',
	marginTop: '$1',
});

export const Step = styled('div', {
	height: '$1',
	borderRadius: '$px',
	backgroundColor: '$gray400',

	variants: {
		active: {
			true: {
				backgroundColor: '$blue300',
			},
		},
	},
});
