import { FC } from 'react'

import styles from './Layout.module.sass'

const Layout: FC = ({ children }) => {
	return <div className={styles.container}>{children}</div>
}

export default Layout
