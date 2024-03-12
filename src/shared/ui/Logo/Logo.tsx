import styles from './Logo.module.scss';

export const Logo = () => {
	return (
		<p className={styles.logo}>
			Екатерина <span>{'</>'}</span>
		</p>
	);
};
