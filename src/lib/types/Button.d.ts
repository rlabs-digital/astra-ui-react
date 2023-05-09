import { HTMLAttributes, ReactNode } from 'react';

export type UnStyledButtonProps = HTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
};

export type ButtonProps = UnStyledButtonProps & {
	variant: string;
};
