import { facts } from '@/data/facts';
import image2 from '@/data/images/my-photos/photo3.jpeg';
import { Title } from '@/shared/ui';
import Image from 'next/image';
import styles from './AboutMe.module.scss';

export const AboutMe = () => {
	return (
		<div className={styles.aboutMePage} id='anketa'>
			<div className='container'>
				<Title text={'Моя анкета'} className={styles.title} />
				<div className={styles.wrapper}>
					<Image src={image2} alt='Developer' className={styles.img} />
					<div className={styles.content}>
						<div className={styles.description}>
							<p>
								Как вы уже могли понять, меня зовут Екатерина. Я
								студентка,заканчиваю 4 курса по специальности
								<b> Информационные системы и программирование</b> в
								&quot;Саранском электромеханическом колледже&quot; и в будущем я
								смогу работать &quot;Веб-разработчиком &quot;.
							</p>
							<p>Над каждым сайтом я упорно работаю и вкладываю душу!</p>
							<br />
							<p>
								<b>Немного статистики:</b>
							</p>
						</div>
						<div className={styles.facts}>
							{facts.map((fact, index) => (
								<div className={styles.fact} key={index}>
									<p className={styles.factTitle}>{fact.title}</p>
									<p className={styles.factDescription}>{fact.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
