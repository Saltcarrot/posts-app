import { FC } from 'react'

import PostItem from '../components/pages/PostItem/PostItem'
import PostsList from '../components/pages/PostsList/PostsList'
import CommentsList from '../components/pages/CommentsList/CommentsList'

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
		path: '/post/:id',
		element: PostItem,
	},
	{
		path: '/comments',
		element: CommentsList,
	},
]
