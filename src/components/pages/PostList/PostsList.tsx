import { FC, useEffect, useState } from 'react'

import { HiViewList } from 'react-icons/hi'
import { BsFillGridFill } from 'react-icons/bs'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

import { useActions } from '../../../hooks/useActions'
import { useTypeSelector } from '../../../hooks/useTypeSelector'

import Layout from '../../common/Layout'
// import Header from '../../common/Header'

import styles from './PostsList.module.sass'

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
			{/* <Header /> */}
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
					{isLoading && <div>Loading posts...</div>}
					{error && <div>{error}</div>}
					{posts &&
						posts.map((post) => (
							<article key={post.id} className={styles.post}>
								<header className={styles.header}>
									<h2 className={styles.title}>{post.title}</h2>
								</header>
								<section className='post-body'>
									<p className='text'>{post.body}</p>
								</section>
								<footer className={styles.footer}>
									<button className={styles.btn}>Read</button>
								</footer>
							</article>
						))}
				</div>
			</Layout>
		</>
	)
}

export default PostsList
