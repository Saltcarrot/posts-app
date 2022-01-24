import { IPost } from './post'

export interface IPostsState {
	posts: IPost[]
	loading: boolean
	error: string | null
}

export enum PostsActionTypes {
	FETCH_POSTS = 'FETCH_POSTS',
	FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
	FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
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

export type TPostsAction =
	| IFetchPostsAction
	| IFetchPostsSuccessAction
	| IFetchPostsErrorAction
