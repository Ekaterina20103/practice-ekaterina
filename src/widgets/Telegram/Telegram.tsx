import { Icon, Icons } from '@/shared/ui';
import Link from 'next/link';
import styles from './Telegram.module.scss';

interface ITelegram {
	link: string;
	title: string;
	name: string;
}

export const Telegram = ({ link, title, name }: ITelegram) => {
	return (
		<Link href={link} className={styles.telegramWidget}>
			<h3 className={styles.linkTitle}>{title}</h3>
			<div className={styles.linkWrapper}>
				<Icon icon={Icons.telegram(styles.icon)} />
				<h3 className={styles.name}>{name}</h3>
			</div>
		</Link>
	);
};
