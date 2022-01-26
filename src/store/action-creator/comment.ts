import axios from 'axios'
import { Dispatch } from 'react'
import { CommentsActionTypes, TCommentsAction } from '../../types/comment'

export const fetchComments = (postId: string) => {
	return async (dispatch: Dispatch<TCommentsAction>) => {
		try {
			dispatch({ type: CommentsActionTypes.FETCH_COMMENTS })
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
			)
			dispatch({
				type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
				payload: response.data,
			})
		} catch {
			dispatch({
				type: CommentsActionTypes.FETCH_COMMENTS_ERROR,
				payload: 'Произошла ошибка при загрузке комментариев',
			})
		}
	}
}
