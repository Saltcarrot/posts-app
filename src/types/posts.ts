import { IPost } from './post'

export interface IPostsState {
	posts: IPost[]
	page: number
	limit: number
	loading: boolean
	error: string | null
}

export enum PostsActionTypes {
	FETCH_POSTS = 'FETCH_POSTS',
	FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
	FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',

	SET_POSTS_PAGE = 'SET_POSTS_PAGE',
	SET_POSTS_LIMIT = 'SET_POSTS_LIMIT',

	FETCH_POSTS_BY_USER_ID = 'FETCH_POSTS_BY_USER_ID',
}

interface IFetchPostsAction {
	type: PostsActionTypes.FETCH_POSTS
}

interface IFetchPostsSuccessAction {
	type: PostsActionTypes.FETCH_POSTS_SUCCESS
	payload: IPost[]
}

interface IFetchPostsErrorAction {
	type: PostsActionTypes.FETCH_POSTS_ERROR
	payload: string
}

interface IFetchPostsPageAction {
	type: PostsActionTypes.SET_POSTS_PAGE
	payload: number
}

interface IFetchPostsLimitAction {
	type: PostsActionTypes.SET_POSTS_LIMIT
	payload: number
}

// interface IFetchPostsByUserIdAction {
// 	type: PostsActionTypes.FETCH_POSTS_BY_USER_ID
// 	payload: IPost[]
// }

export type TPostsAction =
	| IFetchPostsAction
	| IFetchPostsSuccessAction
	| IFetchPostsErrorAction
	| IFetchPostsPageAction
	| IFetchPostsLimitAction
// | IFetchPostsByUserIdAction
