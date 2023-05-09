import { ButtonProps } from '$types/Button';
import { FC } from 'react';
import BaseButton from '$base/Button.component';

const Button: FC<ButtonProps> = ({ children, variant, ...props }): JSX.Element => {
	console.log(variant);
	return <BaseButton {...props}>{children}</BaseButton>;
};

export default Button;
