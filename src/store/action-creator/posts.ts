import axios from 'axios'
import { Dispatch } from 'react'
import { PostsActionTypes, TPostsAction } from '../../types/posts'

export const fetchPosts = () => {
	return async (dispatch: Dispatch<TPostsAction>) => {
		try {
			dispatch({ type: PostsActionTypes.FETCH_POSTS })
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/posts'
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
