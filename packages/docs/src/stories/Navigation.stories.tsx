import {
	Navigation,
	NavigationButton,
	NavigationProps,
} from '@horus-finance/react';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { ArrowsDownUp, ChartPieSlice, Gear } from 'phosphor-react';

export default {
	title: 'Surfaces/Navigation',
	component: Navigation,
	args: {
		children: (
			<>
				<NavigationButton>
					<ChartPieSlice />
					Dashboard
				</NavigationButton>
				<NavigationButton>
					<ArrowsDownUp />
					Transactions
				</NavigationButton>
			</>
		),
	},
} as Meta<NavigationProps>;

export const Primary: StoryObj<NavigationProps> = {};
