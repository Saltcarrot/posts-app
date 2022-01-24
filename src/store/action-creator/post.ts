import axios from 'axios'
import { Dispatch } from 'react'
import { PostActionTypes, TPostAction } from '../../types/post'

export const fetchPost = (postId: number) => {
	return async (dispatch: Dispatch<TPostAction>) => {
		try {
			dispatch({ type: PostActionTypes.FETCH_POST })
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${postId}`
			)
			dispatch({
				type: PostActionTypes.FETCH_POST_SUCCESS,
				payload: response.data,
			})
		} catch {
			dispatch({
				type: PostActionTypes.FETCH_POST_ERROR,
				payload: 'Произошла ошибка при загрузке поста',
			})
		}
	}
}
