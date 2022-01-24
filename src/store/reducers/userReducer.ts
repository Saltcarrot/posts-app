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
			return { loading: true, error: null, user: null }
		case UserActionTypes.FETCH_USER_SUCCESS:
			return { loading: false, error: null, user: action.payload }
		case UserActionTypes.FETCH_USER_ERROR:
			return { loading: false, error: action.payload, user: null }
		default:
			return state
	}
}
