import { FC } from 'react'

import SinglePost from '../components/pages/SinglePost/SinglePost'
import PostsListPage from '../components/pages/PostsListPage/PostsListPage'
import UserProfile from '../components/pages/UserProfile/UserProfile'

interface IRoute {
	path: string
	element: FC
}

export const routesList: IRoute[] = [
	{
		path: '/posts',
		element: PostsListPage,
	},
	{
		path: '/posts/:id',
		element: SinglePost,
	},
	{
		path: '/users/:id',
		element: UserProfile,
	},
]
