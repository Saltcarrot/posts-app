import { FC } from 'react'
import PostsList from './components/pages/PostsList'

const App: FC = () => {
	return (
		<div>
			<PostsList />
		</div>
	)
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
	// const {
	// 	post,
	// 	loading: isPostLoading,
	// 	error: postError,
	// } = useTypeSelector((state) => state.post)
	// const {
	// 	comments,
	// 	loading: isCommentsLoading,
	// 	error: commentsError,
	// } = useTypeSelector((state) => state.comments)
	// const { fetchPost, fetchComments } = useActions()
	// useEffect(() => {
	// 	fetchPost(4)
	// 	fetchComments(4)
	// }, [])
	// if (isPostLoading) {
	// 	return <h1>Loading...</h1>
	// } else if (postError) {
	// 	return <h1>{postError}</h1>
	// } else {
	// 	return (
	// 		<>
	// 			<div>{post?.body}</div>
	// 			<hr />
	// 			<div>
	// 				{isCommentsLoading && <h2>Загрузка комментариев</h2>}
	// 				{commentsError && <h2>{commentsError}</h2>}
	// 				{comments ? (
	// 					<div>
	// 						{comments.map((comment) => (
	// 							<div key={comment.id}>
	// 								{comment.name} <br /> {comment.body}
	// 							</div>
	// 						))}
	// 					</div>
	// 				) : (
	// 					<div>У этого поста нет комментариев</div>
	// 				)}
	// 			</div>
	// 		</>
	// 	)
	// }
}

export default App
