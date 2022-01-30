import { FC } from 'react'
import { useActions } from '../../../../hooks/useActions'

import styles from './LimitRange.module.sass'

interface ILimitRangeProps {
	limit: number
}

const LimitRange: FC<ILimitRangeProps> = (props: ILimitRangeProps) => {
	const { setPostsLimit } = useActions()
	const limits = [3, 5, 10]
	return (
		<div className={styles.limit_range}>
			<span>Display items:</span>
			{limits.map((l) => (
				<div
					key={l}
					className={`${styles.limit_item} ${
						l === props.limit && styles.active
					}`}
					onClick={() => setPostsLimit(l)}
				>
					{l}
				</div>
			))}
		</div>
	)
}

export default LimitRange
