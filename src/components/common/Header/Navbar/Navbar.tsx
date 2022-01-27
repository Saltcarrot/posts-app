import { FC } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'

import styles from './Navbar.module.sass'
import { navbarItems } from '../../../../types/navbar'

const Navbar: FC = () => {
	const location = useLocation()

	return (
		<nav className={styles.nav_menu}>
			{navbarItems.map((nav_item) => {
				return (
					<li key={nav_item.path} className={styles.nav_item}>
						<Link
							to={nav_item.path}
							className={`${styles.item_link}  ${
								!!matchPath(location.pathname, nav_item.path)
									? styles.active
									: ''
							}`}
						>
							{<nav_item.icon />}
							{nav_item.title}
						</Link>
					</li>
				)
			})}
		</nav>
	)
}

export default Navbar
