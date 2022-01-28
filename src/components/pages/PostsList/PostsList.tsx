import { FC, useEffect, useState } from 'react'

import { HiViewList } from 'react-icons/hi'
import { BsFillGridFill } from 'react-icons/bs'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

import { useActions } from '../../../hooks/useActions'
import { useTypeSelector } from '../../../hooks/useTypeSelector'

import Layout from '../../common/Layout'
import Header from '../../common/Header/Header'

import styles from './PostsList.module.sass'
import Loader from '../../common/UI/Loader/Loader'
import Alert from '../../common/UI/Alert/Alert'
import PostItem from '../../common/PostItem/PostItem'

const PostsList: FC = () => {
	const {
		posts,
		page: initialPage,
		limit: initialLimit,
		loading: isLoading,
		error,
	} = useTypeSelector((state) => state.posts)
	const { fetchPosts } = useActions()

	const [page, setPage] = useState<number>(initialPage)
	const [limit, setLimit] = useState<number>(initialLimit)
	const limits = [3, 5, 10]

	const [view, setView] = useState<boolean>(true)

	useEffect(() => {
		fetchPosts(page, limit)
	}, [page, limit])

	const nextPage = () => {
		if (posts.length !== 0) {
			setPage(page + 1)
		}
	}

	const prevPage = () => {
		if (page >= 2) {
			setPage(page - 1)
		}
	}

	return (
		<>
			<Header />
			<Layout>
				<div className={styles.sort_container}>
					<div className={styles.pagination}>
						<button
							className={styles.page_btn}
							onClick={prevPage}
							disabled={isLoading ? true : false}
						>
							<GrFormPrevious />
						</button>
						<button
							className={styles.page_btn}
							onClick={nextPage}
							disabled={isLoading ? true : posts.length === 0 ? true : false}
						>
							<GrFormNext />
						</button>
					</div>
					<div className={styles.limit_range}>
						{limits.map((l) => (
							<div
								key={l}
								className={`${styles.limit_item} ${
									l === limit && styles.active
								}`}
								onClick={() => setLimit(l)}
							>
								{l}
							</div>
						))}
					</div>
					<div className={styles.view_btns}>
						<button
							className={`${styles.btn} ${view ? styles.active : ' '}`}
							onClick={() => setView(!view)}
						>
							<HiViewList />
						</button>
						<button
							className={`${styles.btn} ${!view ? styles.active : ' '}`}
							onClick={() => setView(!view)}
						>
							<BsFillGridFill />
						</button>
					</div>
				</div>
				<div
					className={`${styles.posts_list} ${
						view ? styles.row : styles.column
					}`}
				>
					{isLoading ? (
						<Loader />
					) : error ? (
						<Alert type='error' text={error} />
					) : (
						posts &&
						posts.map((post) => {
							return <PostItem post={post} />
						})
					)}
				</div>
			</Layout>
		</>
	)
}

export default PostsList
