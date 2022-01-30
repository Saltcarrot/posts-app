import { FC, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'
import { useTypeSelector } from '../../../hooks/useTypeSelector'

import Header from '../../common/Header/Header'
import Layout from '../../common/Layout'
import PostsList from '../../common/PostsList/PostsList'
import Alert from '../../common/UI/Alert/Alert'
import Loader from '../../common/UI/Loader/Loader'

import styles from './UserProfile.module.sass'

const UserProfile: FC = () => {
	const { id } = useParams<{ id?: string }>()
	const {
		user,
		loading: isUserLoading,
		error: userError,
	} = useTypeSelector((state) => state.user)
	const {
		posts,
		page,
		limit,
		loading: isPostsLoading,
		error: postsError,
	} = useTypeSelector((state) => state.posts)
	const { fetchUser, fetchPostsByUserId } = useActions()

	useEffect(() => {
		if (id) {
			fetchUser(id)
		}
	}, [])

	useEffect(() => {
		if (id) {
			fetchPostsByUserId(id, page, limit)
		}
	}, [page, limit])

	return (
		<>
			<Header />
			<Layout>
				<section className={styles.user_info}>
					{isUserLoading ? (
						<Loader />
					) : userError ? (
						<Alert type='error' text={userError} />
					) : (
						user && (
							<>
								<h2 className={styles.username}>
									<span>Username: </span>
									{user.username}
								</h2>
								<p className={styles.email}>
									<span>Email: </span>
									{user.email}
								</p>
								<p className={styles.phone}>
									<span>Phone: </span>
									{user.phone}
								</p>
								<p className={styles.website}>
									<span>Website: </span>
									{user.website}
								</p>
								<p className={styles.company}>
									<span>Company: </span>
									{user.company.name}
								</p>
							</>
						)
					)}
				</section>
				<div className={styles.posts_title}>
					<h3>User posts</h3>
				</div>
				<PostsList
					posts={posts}
					page={page}
					limit={limit}
					isLoading={isPostsLoading}
					error={postsError}
				/>
			</Layout>
		</>
	)
}

export default UserProfile
