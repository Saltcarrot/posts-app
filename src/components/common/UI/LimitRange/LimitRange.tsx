import { FC } from 'react'

import styles from './LimitRange.module.sass'

interface ILimitRangeProps {
	limit: number
	setLimit: (l: number) => void
}

const LimitRange: FC<ILimitRangeProps> = (props: ILimitRangeProps) => {
	const limits = [3, 5, 10]
	return (
		<div className={styles.limit_range}>
			{limits.map((l) => (
				<div
					key={l}
					className={`${styles.limit_item} ${
						l === props.limit && styles.active
					}`}
					onClick={() => props.setLimit(l)}
				>
					{l}
				</div>
			))}
		</div>
	)
}

export default LimitRange
