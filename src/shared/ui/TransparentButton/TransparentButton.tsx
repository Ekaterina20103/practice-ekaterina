import { IButton } from '@/shared/types';
import Link from 'next/link';
import styles from './TransparentButton.module.scss';

export const TransparentButton = ({ link, text, icon }: IButton) => {
	return (
		<Link href={link} className={styles.transparentButton}>
			{icon && icon}
			{text}
		</Link>
	);
};
