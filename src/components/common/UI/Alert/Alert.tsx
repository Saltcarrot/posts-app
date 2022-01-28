import { FC } from 'react'

import styles from './Alert.module.sass'

interface IAlertProps {
	type: string
	text: string | null
}

const Alert: FC<IAlertProps> = ({ type = 'success', text }: IAlertProps) => {
	return (
		<div
			className={`${styles.alert} ${
				type === 'error'
					? styles.error
					: type === 'warning'
					? styles.warning
					: type === 'info' && styles.info
			}`}
		>
			{text}
		</div>
	)
}

export default Alert
