import { FC } from 'react'
import { IComment } from '../../../types/comment'

import styles from './CommentItem.module.sass'

interface ICommentProps {
	comment: IComment
}

const CommentItem: FC<ICommentProps> = ({ comment }: ICommentProps) => {
	return (
		<section className={styles.comment_container}>
			<article key={comment.id} className={styles.comment}>
				<h4 className={styles.title}>{comment.name}</h4>
				<span className={styles.email}>{comment.email}</span>
				<p className={styles.text}>{comment.body}</p>
			</article>
		</section>
	)
}

export default CommentItem
