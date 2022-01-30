import { FC } from 'react'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useActions } from '../../../../hooks/useActions'

import styles from './PaginationArrows.module.sass'

interface IPaginationProps {
	isPostsLoading: boolean
	postsLength: number
	page: number
}

const PaginationArrows: FC<IPaginationProps> = (props: IPaginationProps) => {
	const { setPostsPage } = useActions()

	return (
		<div className={styles.pagination}>
			<button
				className={styles.page_btn}
				onClick={() => {
					props.page !== 1 && setPostsPage(props.page - 1)
				}}
				disabled={props.isPostsLoading ? true : props.page === 1 ? true : false}
			>
				<IoIosArrowBack />
			</button>
			<button
				className={styles.page_btn}
				onClick={() => {
					setPostsPage(props.page + 1)
				}}
				disabled={
					props.isPostsLoading ? true : props.postsLength === 0 ? true : false
				}
			>
				<IoIosArrowForward />
			</button>
		</div>
	)
}

export default PaginationArrows
