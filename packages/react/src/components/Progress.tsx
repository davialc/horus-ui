import * as Slider from '@radix-ui/react-slider';
import { ComponentProps } from 'react';
import { styled } from '../styles';

const ProgressContainer = styled(Slider.Root, {
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	userSelect: 'none',
	touchAction: 'none',
	width: 200,

	'&[data-orientation="horizontal"]': {
		height: 20,
	},

	'&[data-orientation="vertical"]': {
		flexDirection: 'column',
		width: 20,
		height: 100,
	},
});

const Range = styled(Slider.Range, {
	position: 'absolute',
	backgroundColor: '$blue300',
	borderRadius: '$full',
	height: '100%',
});

const Track = styled(Slider.Track, {
	backgroundColor: '$gray300',
	position: 'relative',
	flexGrow: 1,
	borderRadius: '$full',
	overflow: 'hidden',

	'&[data-orientation="horizontal"]': { height: 5 },
	'&[data-orientation="vertical"]': { width: 5 },
});

export interface ProgressProps
	extends ComponentProps<typeof ProgressContainer> {}

export const Progress = ({ ...props }: ProgressProps) => {
	return (
		<ProgressContainer max={100} orientation="horizontal" disabled {...props}>
			<Track>
				<Range />
			</Track>
		</ProgressContainer>
	);
};
