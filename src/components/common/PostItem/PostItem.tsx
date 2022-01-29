import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IPost } from '../../../types/post'

import styles from './PostItem.module.sass'

interface IPostProps {
	post: IPost
	link: string
}

const PostItem: FC<IPostProps> = ({ post, link }: IPostProps) => {
	return (
		<article key={post.id} className={styles.post}>
			<header className={styles.header}>
				<h2 className={styles.title}>{post.title}</h2>
			</header>
			<section className='post-body'>
				<p className='text'>{post.body}</p>
			</section>
			<footer className={styles.footer}>
				{link.includes('posts') ? (
					<Link to={link} className={styles.post_link}>
						Read post
					</Link>
				) : (
					link.includes('users') && (
						<Link to={link} className={styles.post_link}>
							Read user profile
						</Link>
					)
				)}
			</footer>
		</article>
	)
}

export default PostItem
