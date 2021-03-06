import { fetchUser } from './user'
import { fetchComments } from './comment'
import { fetchPost } from './post'
import {
	fetchPosts,
	fetchPostsByUserId,
	setPostsPage,
	setPostsLimit,
} from './posts'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	fetchUser,
	fetchComments,
	fetchPost,
	fetchPosts,
	fetchPostsByUserId,
	setPostsPage,
	setPostsLimit,
}
