import { FC } from 'react'

import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

import styles from './PaginationArrows.module.sass'

interface IPaginationProps {
	isPostsLoading: boolean
	postsLength: number
	prevPage: () => void
	nextPage: () => void
}

const PaginationArrows: FC<IPaginationProps> = (props: IPaginationProps) => {
	return (
		<div className={styles.pagination}>
			<button
				className={styles.page_btn}
				onClick={props.prevPage}
				disabled={props.isPostsLoading ? true : false}
			>
				<GrFormPrevious />
			</button>
			<button
				className={styles.page_btn}
				onClick={props.nextPage}
				disabled={
					props.isPostsLoading ? true : props.postsLength === 0 ? true : false
				}
			>
				<GrFormNext />
			</button>
		</div>
	)
}

export default PaginationArrows
