import styles from './Preloader.module.scss';

export const Preloader = () => {
	return (
		<div className={styles.preloader}>
			<p className={styles.logoPreloader}>
				k<span>/</span>real
			</p>
		</div>
	);
};
