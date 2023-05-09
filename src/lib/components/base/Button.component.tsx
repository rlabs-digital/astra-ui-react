import { UnStyledButtonProps } from '$types/Button';
import React from 'react';

const Button: React.FC<UnStyledButtonProps> = ({ children, ...props }): JSX.Element => {
	return <button {...props}>{children}</button>;
};

export default Button;
