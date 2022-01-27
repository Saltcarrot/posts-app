import { FC } from 'react'

import Navbar from './Navbar/Navbar'

import styles from './Header.module.sass'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Navbar />
			</div>
		</header>
	)
}

export default Header
