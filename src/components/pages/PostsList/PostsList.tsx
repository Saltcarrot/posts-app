import { FC, useEffect, useState } from 'react'

import { useActions } from '../../../hooks/useActions'
import { useTypeSelector } from '../../../hooks/useTypeSelector'

import Layout from '../../common/Layout'
import Header from '../../common/Header/Header'

import styles from './PostsList.module.sass'
import Loader from '../../common/UI/Loader/Loader'
import Alert from '../../common/UI/Alert/Alert'
import PostItem from '../../common/PostItem/PostItem'
import PaginationArrows from '../../common/UI/PaginationArrows/PaginationArrows'
import LimitRange from '../../common/UI/LimitRange/LimitRange'
import ViewBlock from '../../common/UI/ViewBlock/ViewBlock'

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
					<PaginationArrows
						isPostsLoading={isLoading}
						postsLength={posts.length}
						prevPage={prevPage}
						nextPage={nextPage}
					/>
					<LimitRange limit={limit} setLimit={setLimit} />
					<ViewBlock view={view} setView={setView} />
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
