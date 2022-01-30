import { FC } from 'react'

import SinglePost from '../components/pages/SinglePost/SinglePost'
import PostsList from '../components/pages/PostsList/PostsList'
import CommentsList from '../components/pages/CommentsList/CommentsList'
import UserProfile from '../components/pages/UserProfile/UserProfile'

interface IRoute {
	path: string
	element: FC
}

export const routesList: IRoute[] = [
	{
		path: '/posts',
		element: PostsList,
	},
	{
		path: '/posts/:id',
		element: SinglePost,
	},
	{
		path: '/comments',
		element: CommentsList,
	},
	{
		path: '/users/:id',
		element: UserProfile,
	},
]
