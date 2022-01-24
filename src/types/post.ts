export interface IPost {
	id: number
	userId: number
	title: string
	body: string
}

export interface IPostState {
	post: IPost | null
	loading: boolean
	error: string | null
}

export enum PostActionTypes {
	FETCH_POST = 'FETCH_POST',
	FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
	FETCH_POST_ERROR = 'FETCH_POST_ERROR',
}

interface IFetchPostAction {
	type: PostActionTypes.FETCH_POST
}

interface IFetchPostSuccessAction {
	type: PostActionTypes.FETCH_POST_SUCCESS
	payload: IPost | null
}

interface IFetchPostErrorAction {
	type: PostActionTypes.FETCH_POST_ERROR
	payload: string
}

export type TPostAction =
	| IFetchPostAction
	| IFetchPostSuccessAction
	| IFetchPostErrorAction
