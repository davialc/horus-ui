import { styled } from '../styles';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ComponentProps, ElementType, useRef } from 'react';
import { CaretDown } from 'phosphor-react';

export const Dropdown = DropdownMenu.Root;
export const DropdownPortal = DropdownMenu.Portal;

const DropdownTriggerContainer = styled(DropdownMenu.Trigger, {
	padding: '$3 14px',
	color: '$gray450',
	backgroundColor: '$gray150',
	borderRadius: '$lg',
	fontFamily: '$default',
	fontWeight: '$medium',
	border: '2px solid $gray300',
	display: 'flex',
	gap: 8,
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

export interface DropdownTriggerProps
	extends ComponentProps<typeof DropdownTriggerContainer> {
	prefix?: string;
}

export const DropdownTrigger = ({ prefix, children }: DropdownTriggerProps) => {
	return (
		<DropdownTriggerContainer>
			{!!prefix && <Prefix>{prefix}</Prefix>}
			{children}
			<CaretDown weight="bold" />
		</DropdownTriggerContainer>
	);
};

export interface DropdownProps extends ComponentProps<typeof Dropdown> {}

const StyledContent = styled(DropdownMenu.Content, {
	borderRadius: '$lg',
	width: 'var(--width)',
	padding: '$2',
	fontFamily: '$default',
	fontWeight: '$regular',
	backgroundColor: '$gray150',
	border: '2px solid $gray300',
	boxSizing: 'border-box',
});

interface DropdownContentProps extends ComponentProps<typeof DropdownPortal> {
	width: string;
}

export const DropdownContent = ({
	children,
	width,
	...props
}: DropdownContentProps) => {
	return (
		<DropdownPortal>
			<StyledContent {...props} css={{ '--width': width }}>
				{children}
			</StyledContent>
		</DropdownPortal>
	);
};

export const DropdownItem = styled(DropdownMenu.Item, {
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
