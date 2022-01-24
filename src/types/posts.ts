import { IPost } from './post'

export interface IPostsState {
	posts: IPost[]
	loading: boolean
	error: string | null
}

export enum PostActionTypes {
	FETCH_POSTS = 'FETCH_POSTS',
	FETCH_POSTS_SUCCESS = 'FETCH_POSTS',
	FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}

interface IFetchPostsAction {
	type: PostActionTypes.FETCH_POSTS
}

interface IFetchPostsSuccessAction {
	type: PostActionTypes.FETCH_POSTS_SUCCESS
	payload: IPost[]
}

interface IFetchPostsErrorAction {
	type: PostActionTypes.FETCH_POSTS_ERROR
	payload: string
}

export type TPostAction =
	| IFetchPostsAction
	| IFetchPostsSuccessAction
	| IFetchPostsErrorAction
