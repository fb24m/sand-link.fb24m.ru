import type { ReactNode } from 'react'
import styles from './MainHeader.module.scss'
import Link from 'next/link'
import Burger from '../Burger/Burger.component'
import { Container } from '@/components/Container/Container.component'
import { Logo } from '@/components/Logo/Logo.component'
import { Profile } from '../Profile/Profile.component'

export const MainHeader = (): ReactNode => {
	return (
		<div className={styles.header}>
			<Container className={styles.container}>
				<Logo />
				<div className={styles.wrapper}>
					<ul className={styles.menu}>
						<li className={styles.menuItem}><Link href="https://github.com/iFB24M/link/issues" className={styles.link}>Нашли ошибку?</Link></li>
						<li className={styles.menuItem}><Link prefetch={false} href="/post" className={styles.link}>Новый пост</Link></li>
					</ul>
					<Profile />
				</div>
				<Burger openedClass={styles.opened} />
			</Container>
		</div>
	)
}
