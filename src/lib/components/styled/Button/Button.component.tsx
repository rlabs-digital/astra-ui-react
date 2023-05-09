import { ButtonProps } from '$types/Button';
import { FC } from 'react';
import BaseButton from '$base/Button.component';
import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({ children, variant, ...props }): JSX.Element => {
	console.log(variant);
	return (
		<BaseButton className={styles.btn} {...props}>
			{children}
		</BaseButton>
	);
};

export default Button;
