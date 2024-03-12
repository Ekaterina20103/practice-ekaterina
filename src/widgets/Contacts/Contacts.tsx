import { TelegramIcon } from '@/shared/icons';
import Link from 'next/link';
import styles from './Contacts.module.scss';

export const Contacts = () => {
	return (
		<div className='container'>
			<div className={styles.map}>
				<iframe
					src='https://yandex.ru/map-widget/v1/?ll=45.150979%2C54.159838&mode=search&oid=1061221958&ol=biz&z=16.84'
					width='610'
					height='400'
					allowFullScreen
				></iframe>
				<div className={styles.content}>
					<div className={styles.card}>
						<div className={styles.column}>
							<p className={styles.cardText}>
								<b>Местоположение:</b>
							</p>
							<p className={styles.cardText}>
								г. Саранск, ул. Транспортная, 13
							</p>
						</div>
					</div>
					<br />
					<div className={styles.card}>
						<div className={styles.column}>
							<p className={styles.cardText}>
								<b>Контакты:</b>
							</p>
							<p className={styles.cardText}>
								тел:{' '}
								<Link href={'tel:+79999999999'} className={styles.link}>
									+7 (999) 999 99-99
								</Link>
							</p>
							<p className={styles.cardText}>
								e-mail:{' '}
								<Link
									href={'mailto:belyaeva.ekaterina2004@mail.ru'}
									className={styles.link}
								>
									belyaeva.ekaterina2004@mail.ru
								</Link>
							</p>
						</div>
					</div>
					<br />
					<div className={styles.card}>
						<div className={styles.column}>
							<p className={styles.cardText}>
								<b>Способы связи:</b>
							</p>
							<div className={styles.icons}>
								<Link
									aria-label='телеграм'
									href={'https://t.me/nemaruusik'}
									target='_blank'
								>
									<TelegramIcon className={styles.navIcon} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
