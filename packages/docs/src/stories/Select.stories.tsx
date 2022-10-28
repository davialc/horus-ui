import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectItemText,
	SelectLabel,
	SelectProps,
	SelectTrigger,
	SelectValue,
	SelectViewport,
} from '@horus-finance/react';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { ArrowsDownUp, CaretDown, ChartPieSlice, Gear } from 'phosphor-react';

export default {
	title: 'Form/Select',
	component: Select,
	args: {
		children: (
			<>
				<SelectTrigger prefix="Customer: ">
					<SelectValue placeholder="Select a customer..." />
				</SelectTrigger>
				<SelectContent>
					<SelectViewport>
						<SelectGroup>
							<SelectLabel>Customers</SelectLabel>
							<SelectItem value="John Doe">
								<SelectItemText>John Doe</SelectItemText>
							</SelectItem>
							<SelectItem value="Doe John">
								<SelectItemText>Doe John</SelectItemText>
							</SelectItem>
						</SelectGroup>
					</SelectViewport>
				</SelectContent>
			</>
		),
	},
} as Meta<SelectProps>;

export const Primary: StoryObj<SelectProps> = {};
