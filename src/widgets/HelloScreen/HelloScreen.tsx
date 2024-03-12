import photo1 from '@/data/images/my-photos/photo1.jpeg';
import { BlueButton, Icon, Icons } from '@/shared/ui';
import Image from 'next/image';
import type { ReactNode } from 'react';
import styles from './HelloScreen.module.scss';

interface HelloScreenProps {
	title?: string | ReactNode;
	description?: string | ReactNode;
}

export const HelloScreen = ({ title, description }: HelloScreenProps) => {
	return (
		<header className={styles.helloScreen}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<h1 className={styles.title}>
							{title ? (
								title
							) : (
								<>
									Привет, я <span>Екатерина</span>
								</>
							)}
						</h1>
						<h2 className={styles.description}>
							{description ? (
								description
							) : (
								<>
									<p>Я студентка 4 курса, Веб-разработчик</p>
								</>
							)}
						</h2>
						<div className={styles.buttons}>
							<BlueButton
								link='https://t.me/nemaruusik'
								text='Написать мне'
								target='_blank'
								icon={<Icon icon={Icons.message(styles.icon)} />}
							/>
						</div>
					</div>
					<div className={styles.wrapperImg}>
						<Image
							src={photo1}
							alt="It's me!"
							className={styles.human}
							draggable={false}
						/>
					</div>
				</div>
			</div>
		</header>
	);
};
