import { UnStyledButtonProps } from '$types/Button';
import { FC } from 'react';

const Button: FC<UnStyledButtonProps> = ({ children, ...props }): JSX.Element => {
	return <button {...props}>{children}</button>;
};

export default Button;
