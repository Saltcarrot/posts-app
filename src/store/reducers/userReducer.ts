import { IUserState, TUseAction, UserActionTypes } from '../../types/user'

const initialState: IUserState = {
	user: null,
	loading: false,
	error: null,
}

export const userReducer = (
	state = initialState,
	action: TUseAction
): IUserState => {
	switch (action.type) {
		case UserActionTypes.FETCH_USER:
			return { ...state, loading: true }
		case UserActionTypes.FETCH_USER_SUCCESS:
			return { ...state, user: action.payload }
		case UserActionTypes.FETCH_USER_ERROR:
			return { ...state, error: action.payload }
		default:
			return state
	}
}
