import { FC, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'
import { useTypeSelector } from '../../../hooks/useTypeSelector'

import Header from '../../common/Header/Header'
import Layout from '../../common/Layout'
import Loader from '../../common/UI/Loader/Loader'
import Alert from '../../common/UI/Alert/Alert'
import PostItem from '../../common/PostItem/PostItem'
import CommentItem from '../../common/CommentItem/CommentItem'
import PrevPageBtn from '../../common/UI/PrevPageBtn/PrevPageBtn'

import styles from './SinglePost.module.sass'

const SinglePost: FC = () => {
	const { id } = useParams<{ id?: string }>()

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
		<>
			<Header />
			<Layout>
				<PrevPageBtn />
				<section className={styles.post_container}>
					{isPostLoading ? (
						<Loader />
					) : postError ? (
						<Alert type='error' text={postError} />
					) : (
						post && <PostItem post={post} link={`/users/${post.userId}`} />
					)}
				</section>
				<section className={styles.comments_section}>
					<h3>Post comments</h3>
				</section>
				{isCommentsLoading ? (
					<Loader />
				) : commentsError ? (
					<Alert type='error' text={commentsError} />
				) : (
					comments &&
					comments.map((comment) => (
						<CommentItem key={comment.id} comment={comment} />
					))
				)}
			</Layout>
		</>
	)
}

export default SinglePost
