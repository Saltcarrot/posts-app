import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'

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
			<section className='user-info'>
				{isUserLoading && <div>Loading...</div>}
				{userError && <div>{userError}</div>}
				{user && (
					<>
						<div className='main-info'>
							<h3 className='username'>{user.username}</h3>
							<h4 className='email'>{user.email}</h4>
							<p className='phone'>{user.phone}</p>
							<p className='website'>{user.website}</p>
						</div>
						<div className='company'>
							{user.company.name} - {user.company.catchPhrase} -{' '}
							{user.company.bs}
						</div>
						<div className='address'>
							{user.address.city} - {user.address.street} - {user.address.suite}{' '}
							- {user.address.zipcode}
						</div>
						<div className='geo'>
							{user.address.geo.lat} - {user.address.geo.lng}
						</div>
					</>
				)}
				<section className='user-posts'>
					<h3 className='title'>User posts</h3>
					{isPostsLoading && <div>Loading...</div>}
					{postsError && <div>{postsError}</div>}
					{posts &&
						posts.map((post) => (
							<article className='post'>
								<header className='post-header'>
									<h2 className='title'>{post.title}</h2>
								</header>
								<footer className='post-footer'>
									<Link to={`/posts/${post.id}`}>Read more...</Link>
								</footer>
							</article>
						))}
				</section>
			</section>
		</>
	)
}

export default UserProfile
