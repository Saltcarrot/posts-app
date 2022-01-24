import axios from 'axios'
import { Dispatch } from 'react'
import { TUseAction, UserActionTypes } from '../../types/user'

export const fetchUser = (userId: number) => {
	return async (dispatch: Dispatch<TUseAction>) => {
		try {
			dispatch({ type: UserActionTypes.FETCH_USER })
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/users/${userId}`
			)
			dispatch({
				type: UserActionTypes.FETCH_USER_SUCCESS,
				payload: response.data,
			})
		} catch {
			dispatch({
				type: UserActionTypes.FETCH_USER_ERROR,
				payload: 'Произошла ошибка при загрузке пользователя',
			})
		}
	}
}
