import { works } from '@/data/works';
import type { IProject } from '@/shared/types';
import { Title } from '@/shared/ui';
import Link from 'next/link';
import { Work } from '../Work/Work';
import styles from './MyWorks.module.scss';

interface Props {
	title?: string;
	array?: IProject[];
	hasWorks?: boolean;
}

export const MyWorks = ({ title, array, hasWorks }: Props) => {
	return (
		<div className={styles.worksPage}>
			<div className='container'>
				<div className={styles.wrapper}>
					<Title text={title ? title : 'Мои работы'} />
					<div className={styles.works}>
						{array
							? array.map((work, index) => (
									<Work work={work} index={index} key={index} />
								))
							: works.map((work, index) => (
									<Work work={work} index={index} key={index} />
								))}
					</div>
					{hasWorks && (
						<Link href={'/works'} className={styles.link}>
							Смотреть все работы
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
