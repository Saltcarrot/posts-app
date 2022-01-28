import { FC } from 'react'
import { IPost } from '../../../types/post'

import styles from './PostItem.module.sass'

interface IPostProps {
	post: IPost
}

const PostItem: FC<IPostProps> = ({ post }: IPostProps) => {
	return (
		<article key={post.id} className={styles.post}>
			<header className={styles.header}>
				<h2 className={styles.title}>{post.title}</h2>
			</header>
			<section className='post-body'>
				<p className='text'>{post.body}</p>
			</section>
			<footer className={styles.footer}>
				<button className={styles.btn}>Read</button>
			</footer>
		</article>
	)
}

export default PostItem
