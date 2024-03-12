import { IButton } from '@/shared/types';
import Link from 'next/link';
import styles from './BlueButton.module.scss';

export const BlueButton = ({
	link,
	text,
	icon,
	onClick,
	type,
	target,
}: IButton) => {
	if (type) {
		return (
			<button type={type} className={styles.blueButton} onClick={onClick}>
				{icon && icon}
				{text}
			</button>
		);
	}
	return (
		<Link
			type='button'
			href={link}
			className={styles.blueButton}
			onClick={onClick}
			target={target}
		>
			{icon && icon}
			{text}
		</Link>
	);
};
