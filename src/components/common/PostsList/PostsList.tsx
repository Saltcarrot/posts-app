import { FC, useState } from 'react'
import { IPost } from '../../../types/post'

import PostItem from '../PostItem/PostItem'
import Alert from '../UI/Alert/Alert'
import LimitRange from '../UI/LimitRange/LimitRange'
import Loader from '../UI/Loader/Loader'
import PaginationArrows from '../UI/PaginationArrows/PaginationArrows'
// import ViewBlock from '../UI/ViewBlock/ViewBlock'

import styles from './PostsList.module.sass'

interface IPostsListProps {
	posts: IPost[]
	page: number
	limit: number
	isLoading: boolean
	error: string | null
}

const PostsList: FC<IPostsListProps> = (props: IPostsListProps) => {
	// const [view, setView] = useState<string>('row')

	return (
		<>
			<div className={styles.list_view}>
				<PaginationArrows
					isPostsLoading={props.isLoading}
					postsLength={props.posts.length}
					page={props.page}
				/>
				<LimitRange limit={props.limit} />
			</div>
			<section className={styles.list}>
				{props.isLoading ? (
					<Loader />
				) : props.error ? (
					<Alert type='error' text={props.error} />
				) : props.posts && props.posts.length > 0 ? (
					props.posts.map((post) => {
						return (
							<PostItem key={post.id} post={post} link={`/posts/${post.id}`} />
						)
					})
				) : (
					<Alert type='error' text='Более постов не найдено' />
				)}
			</section>
		</>
	)
}

export default PostsList
