import { IconType } from 'react-icons'

import { MdArticle } from 'react-icons/md'
import { FaCommentAlt } from 'react-icons/fa'

export interface INavbar {
	path: string
	icon: IconType
	title: string
}

export const navbarItems: INavbar[] = [
	{
		path: '/posts',
		icon: MdArticle,
		title: 'Posts',
	},
	{
		path: '/comments',
		icon: FaCommentAlt,
		title: 'Comments',
	},
]
