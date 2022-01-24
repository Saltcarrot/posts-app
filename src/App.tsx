import { FC, useEffect } from 'react'
import { useActions } from './hooks/useActions'
import { useTypeSelector } from './hooks/useTypeSelector'

const App: FC = () => {
	///////////// Single user

	// const { user, loading, error } = useTypeSelector((state) => state.user)
	// const { fetchUser } = useActions()

	// useEffect(() => {
	// 	fetchUser(3)
	// }, [])

	// if (loading) {
	// 	return <h1>Loading...</h1>
	// } else if (error) {
	// 	return <h1>{error}</h1>
	// } else {
	// 	return <div>{user?.name}</div>
	// }

	//////////// Comments to post

	// const { comments, loading, error } = useTypeSelector(
	// 	(state) => state.comments
	// )
	// const { fetchComments } = useActions()

	// useEffect(() => {
	// 	fetchComments(5)
	// }, [])

	// if (loading) {
	// 	return <h1>Loading...</h1>
	// } else if (error) {
	// 	return <h1>{error}</h1>
	// } else {
	// 	return (
	// 		<div>
	// 			{comments.map((comment) => (
	// 				<div>
	// 					{comment.name} <br /> {comment.body}
	// 				</div>
	// 			))}
	// 		</div>
	// 	)
	// }

	////////////// Post with author and comments
	const {
		user: author,
		loading: isAuthorLoading,
		error: authorError,
	} = useTypeSelector((state) => state.user)
	const {
		post,
		loading: isPostLoading,
		error: postError,
	} = useTypeSelector((state) => state.post)
	const {
		comments,
		loading: isCommentsLoading,
		error: commentsError,
	} = useTypeSelector((state) => state.comments)

	const { fetchPost, fetchUser, fetchComments } = useActions()

	useEffect(() => {
		fetchPost(4)
		fetchComments(4)
	}, [])

	useEffect(() => {
		fetchUser(post?.userId!)
	}, [post])

	if (isPostLoading) {
		return <h1>Loading...</h1>
	} else if (postError) {
		return <h1>{postError}</h1>
	} else {
		return (
			<>
				<div>
					{isAuthorLoading && <h2>Загрузка автора</h2>}
					{authorError && <h2>{authorError}</h2>}
					{author && <h1>{author.email}</h1>}
				</div>
				<div>{post?.body}</div>
				<hr />
				<div>
					{isCommentsLoading && <h2>Загрузка комментариев</h2>}
					{commentsError && <h2>{commentsError}</h2>}
					{comments ? (
						<div>
							{comments.map((comment) => (
								<div>
									{comment.name} <br /> {comment.body}
								</div>
							))}
						</div>
					) : (
						<div>У этого поста нет комментариев</div>
					)}
				</div>
			</>
		)
	}
}

export default App
