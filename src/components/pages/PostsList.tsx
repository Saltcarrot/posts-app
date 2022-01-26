import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import Header from '../common/Header'

const PostsList = () => {
	const {
		posts,
		page: initialPage,
		limit: initialLimit,
		loading: isloading,
		error,
	} = useTypeSelector((state) => state.posts)
	const { fetchPosts } = useActions()

	const [page, setPage] = useState<number>(initialPage)
	const [limit, setLimit] = useState<number>(initialLimit)

	useEffect(() => {
		fetchPosts()
	}, [])

	return (
		<>
			<Header />
			<div className='container my-0 mx-auto'>
				{isloading && <div>Loading posts...</div>}
				{error && <div>{error}</div>}
				{posts &&
					posts.map((post) => (
						<article key={post.id} className='post'>
							<header className='post-header'>
								<h2>{post.title}</h2>
							</header>
							<section className='post-body'>
								<p className='text'>{post.body}</p>
							</section>
							<footer className='post-footer'>
								<Link to={`/posts/${post.id}`}>Read more...</Link>
							</footer>
						</article>
					))}
			</div>
		</>
	)
}

export default PostsList
