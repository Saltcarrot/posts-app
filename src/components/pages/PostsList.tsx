import { useEffect, useState } from 'react'
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
		<div>
			<Header />
			<div className='container my-0 mx-auto'>
				{posts &&
					posts.map((post) => (
						<article key={post.id}>
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</article>
					))}
			</div>
		</div>
	)
}

export default PostsList
