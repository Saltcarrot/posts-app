import { IPostState, PostActionTypes, TPostAction } from '../../types/post'

const initialState: IPostState = {
	post: null,
	loading: false,
	error: null,
}

export const postReducer = (
	state = initialState,
	action: TPostAction
): IPostState => {
	switch (action.type) {
		case PostActionTypes.FETCH_POST:
			return { ...state, loading: true }
		case PostActionTypes.FETCH_POST_SUCCESS:
			return { ...state, post: action.payload }
		case PostActionTypes.FETCH_POST_ERROR:
			return { ...state, error: action.payload }
		default:
			return state
	}
}
