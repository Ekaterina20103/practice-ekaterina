import { Logo } from '@/shared/ui';
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div className={styles.nav}>
						<Logo />
					</div>
				</div>
			</div>
		</div>
	);
};
