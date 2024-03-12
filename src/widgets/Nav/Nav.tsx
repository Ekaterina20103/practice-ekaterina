'use client';

import { Logo } from '@/shared/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import styles from './Nav.module.scss';

export const Nav = () => {
	const path = usePathname();
	const wrapper = useRef<HTMLDivElement>(null);

	const isActiveLink = (link: string) => {
		return path === link ? `${styles.link} ${styles.active}` : styles.link;
	};

	const handleNav = () => {
		if (wrapper.current) {
			wrapper.current.classList.toggle(styles.active);
			document.body.classList.toggle('overflow');
		}
		const navLinks = document.querySelectorAll(`.${styles.link}`);

		navLinks.forEach((link) => {
			link.addEventListener('click', () => {
				if (wrapper.current) {
					wrapper.current.classList.remove(styles.active);
					document.body.classList.remove('overflow');
				}
			});
		});
	};

	return (
		<nav className={styles.nav}>
			<div className='container'>
				<div className={styles.wrapper} ref={wrapper}>
					<Logo />
					<div className={styles.pages}>
						<Link href={'/'} className={isActiveLink('/')}>
							Мои достижения
						</Link>
						<Link href={'/#anketa'} className={isActiveLink('/anketa')}>
							Анкета
						</Link>
						<Link href={'/photos'} className={isActiveLink('/photos')}>
							Фотогалерея
						</Link>
						<Link href={'/contacts'} className={isActiveLink('/contacts')}>
							Полезные ссылки
						</Link>
					</div>
					<div className={styles.burger} onClick={handleNav}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</nav>
	);
};
