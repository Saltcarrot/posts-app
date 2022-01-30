import { FC, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'
import { useTypeSelector } from '../../../hooks/useTypeSelector'

import Header from '../../common/Header/Header'
import Layout from '../../common/Layout'
import PostItem from '../../common/PostItem/PostItem'
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
		loading: isPostsLoading,
		error: postsError,
	} = useTypeSelector((state) => state.posts)
	const { fetchUser, fetchPostsByUserId } = useActions()

	useEffect(() => {
		if (id) {
			fetchUser(id)
			fetchPostsByUserId(id)
		}
	}, [])

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
				<section className={styles.posts_wrapper}>
					<h3>User posts - {posts.length} </h3>
				</section>
				<section className={styles.user_posts}>
					{isPostsLoading ? (
						<Loader />
					) : postsError ? (
						<Alert type='error' text={postsError} />
					) : (
						posts &&
						posts.map((post) => {
							return (
								<PostItem
									key={post.id}
									post={post}
									link={`/posts/${post.id}`}
								/>
							)
						})
					)}
				</section>
			</Layout>
		</>
	)
}

export default UserProfile
