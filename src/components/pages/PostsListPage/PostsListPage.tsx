import { FC, useEffect } from 'react'

import { useActions } from '../../../hooks/useActions'
import { useTypeSelector } from '../../../hooks/useTypeSelector'

import Layout from '../../common/Layout'
import Header from '../../common/Header/Header'

import Posts from '../../common/PostsList/PostsList'

import styles from './PostsList.module.sass'

const PostsListPage: FC = () => {
	const {
		posts,
		page,
		limit,
		loading: isLoading,
		error,
	} = useTypeSelector((state) => state.posts)
	const { fetchPosts } = useActions()

	useEffect(() => {
		fetchPosts(page, limit)
	}, [page, limit])

	return (
		<>
			<Header />
			<Layout>
				<Posts
					posts={posts}
					page={page}
					limit={limit}
					isLoading={isLoading}
					error={error}
				/>
			</Layout>
		</>
	)
}

export default PostsListPage
