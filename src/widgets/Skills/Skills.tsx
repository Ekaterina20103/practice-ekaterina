import { skills } from '@/data/skills';
import { Title } from '@/shared/ui';
import styles from './Skills.module.scss';

const dots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isActive = (index: number, level: number) =>
	index + 1 < level ? styles.activeDot : styles.dot;

export const Skills = () => {
	return (
		<div className={styles.skillsPage}>
			<div className='container'>
				<div className={styles.wrapper}>
					<Title text={'Мои навыки'} />
					<div className={styles.skills}>
						{skills.map((skill, index) => (
							<div className={styles.skill} key={index}>
								<p className={styles.skillTitle}>{skill.title}</p>
								<div className={styles.dots}>
									{dots.map((_, index) => (
										<div
											className={isActive(index, skill.level)}
											key={index}
										></div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
