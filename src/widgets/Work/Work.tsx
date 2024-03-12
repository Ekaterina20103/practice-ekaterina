import { IProject } from '@/shared/types';
import { BlueButton } from '@/shared/ui';
import Image from 'next/image';
import styles from './Work.module.scss';

interface IWork {
	work: IProject;
	index: number;
}

const isRevert = (index: number) =>
	index % 2 === 0 ? styles.work : `${styles.work} ${styles.revert}`;

export const Work = ({ work, index }: IWork) => {
	return (
		<>
			<div className={isRevert(index)} key={index}>
				<div className={styles.content}>
					<h3 className={styles.workTitle}>{work.title}</h3>
					<h4 className={styles.workSubtitle}>{work.subtitle}</h4>
					{work.repo && (
						<div className={styles.buttonWrapper}>
							<BlueButton link={work.repo} target='_blank' text='Подробнее' />
						</div>
					)}
				</div>
				<div className={styles.photosWrapper}>
					<div className={styles.photos}>
						{work.photos.map((photo, index) => (
							<Image
								key={index}
								src={photo}
								alt={`Photo ${index + 1}`}
								width={550}
								height={500}
								className={styles.photo}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
