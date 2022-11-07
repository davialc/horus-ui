import { styled } from '../styles';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ComponentProps, ElementType, useRef } from 'react';
import { CaretDown } from 'phosphor-react';

export const Select = SelectPrimitive.Root;
export const SelectPortal = SelectPrimitive.Portal;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;
export const SelectItemText = SelectPrimitive.ItemText;

const SelectTriggerContainer = styled(SelectPrimitive.Trigger, {
	padding: '$3 14px',
	color: '$gray450',
	backgroundColor: '$gray150',
	borderRadius: '$lg',
	fontFamily: '$default',
	fontWeight: '$medium',
	border: '2px solid $gray300',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: 8,
	height: 'fit-content',
	cursor: 'pointer',

	'&:focus': {
		outline: 0,
		border: '2px solid $blue300',
	},

	svg: {
		width: '$4',
		height: '$4',
		color: '$background',
	},
});

const Prefix = styled('span', {
	fontFamily: '$default',
	color: '$background',
	fontWeight: '$medium',
});

export interface SelectTriggerProps
	extends ComponentProps<typeof SelectTriggerContainer> {
	prefix?: string;
}

export const SelectTrigger = ({
	prefix,
	children,
	...props
}: SelectTriggerProps) => {
	return (
		<SelectTriggerContainer {...props}>
			{!!prefix && <Prefix>{prefix}</Prefix>}
			{children}
			<CaretDown weight="bold" />
		</SelectTriggerContainer>
	);
};

export interface SelectProps extends ComponentProps<typeof Select> {}

const StyledContent = styled(SelectPrimitive.Content, {
	borderRadius: '$lg',
	padding: '$2',
	width: 'inherit',
	fontFamily: '$default',
	fontWeight: '$regular',
	backgroundColor: '$gray150',
	border: '2px solid $gray300',
	boxSizing: 'border-box',
	zIndex: 999,
});

export const SelectViewport = styled(SelectPrimitive.Viewport, {
	padding: 5,
});

interface SelectContentProps extends ComponentProps<typeof SelectPortal> {}

export const SelectContent = ({ children, ...props }: SelectContentProps) => {
	return (
		<SelectPortal>
			<StyledContent {...props}>{children}</StyledContent>
		</SelectPortal>
	);
};

export const SelectLabel = styled(SelectPrimitive.Label, {
	fontSize: '$sm',
	textAlign: 'center',
	color: '$gray400',
	padding: '$2',
});

export const SelectItem = styled(SelectPrimitive.Item, {
	all: 'unset',
	fontFamily: '$default',
	fontWeight: '$regular',
	color: '$gray450',
	borderRadius: '$lg',
	display: 'flex',
	alignItems: 'center',
	padding: '$2',
	position: 'relative',
	userSelect: 'none',

	'&[data-disabled]': {
		color: '$gray200',
		pointerEvents: 'none',
	},

	'&[data-highlighted]': {
		backgroundColor: '$blue300',
		color: '$white',
	},
});
