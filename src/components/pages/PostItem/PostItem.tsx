import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'
import { useTypeSelector } from '../../../hooks/useTypeSelector'

const PostItem: FC = () => {
	const { id } = useParams<{ id?: string }>()

	const navigate = useNavigate()

	const {
		post,
		error: postError,
		loading: isPostLoading,
	} = useTypeSelector((state) => state.post)
	const {
		comments,
		error: commentsError,
		loading: isCommentsLoading,
	} = useTypeSelector((state) => state.comments)
	const { fetchPost, fetchComments } = useActions()

	useEffect(() => {
		if (id) {
			fetchPost(id)
			fetchComments(id)
		}
	}, [])

	return (
		<article className='post'>
			<button onClick={() => navigate(-1)}>Back</button>
			{isPostLoading && <div>Loading post...</div>}
			{postError && <div>{postError}</div>}
			{post && (
				<>
					<header className='post-header'>
						<h1 className='title'>{post.title}</h1>
					</header>
					<section className='post-body'>
						<p className='text'>{post.body}</p>
					</section>
					<footer className='post-footer'>
						<Link to={`/users/${post.userId}`}>Read user profile</Link>
					</footer>
				</>
			)}
			<section className='comments'>
				{isCommentsLoading && <div>Loading comments...</div>}
				{commentsError && <div>{commentsError}</div>}
				{comments && (
					<>
						{comments.map((comment) => (
							<article key={comment.id} className='comment'>
								<h3 className='title'>{comment.name}</h3>
								<p className='email'>{comment.email}</p>
								<p className='text'>{comment.body}</p>
							</article>
						))}
					</>
				)}
			</section>
		</article>
	)
}

export default PostItem
