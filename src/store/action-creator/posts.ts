import axios from 'axios'
import { Dispatch } from 'react'
import { PostsActionTypes, TPostsAction } from '../../types/posts'

export const fetchPosts = (page: number = 1, limit: number = 5) => {
	return async (dispatch: Dispatch<TPostsAction>) => {
		try {
			dispatch({ type: PostsActionTypes.FETCH_POSTS })
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/posts',
				{
					params: { _page: page, _limit: limit },
				}
			)
			dispatch({
				type: PostsActionTypes.FETCH_POSTS_SUCCESS,
				payload: response.data,
			})
		} catch {
			dispatch({
				type: PostsActionTypes.FETCH_POSTS_ERROR,
				payload: 'Произошла ошибка при загрузке постов',
			})
		}
	}
}

export const setPostsPage = (page: number): TPostsAction => {
	return { type: PostsActionTypes.SET_POSTS_PAGE, payload: page }
}

export const setPostsLimit = (limit: number): TPostsAction => {
	return { type: PostsActionTypes.SET_POSTS_LIMIT, payload: limit }
}

export const fetchPostsByUserId = (
	userId: string,
	page: number = 1,
	limit: number = 5
) => {
	return async (dispatch: Dispatch<TPostsAction>) => {
		try {
			dispatch({ type: PostsActionTypes.FETCH_POSTS })
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/posts`,
				{ params: { userId: userId, _page: page, _limit: limit } }
			)
			dispatch({
				type: PostsActionTypes.FETCH_POSTS_SUCCESS,
				payload: response.data,
			})
		} catch {
			dispatch({
				type: PostsActionTypes.FETCH_POSTS_ERROR,
				payload: 'Произошла ошибка при загрузке постов',
			})
		}
	}
}
