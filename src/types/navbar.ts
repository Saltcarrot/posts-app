import { IconType } from 'react-icons'

import { MdArticle } from 'react-icons/md'

interface INavbar {
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
]
