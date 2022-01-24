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
			return { loading: true, error: null, post: null }
		case PostActionTypes.FETCH_POST_SUCCESS:
			return { loading: false, error: null, post: action.payload }
		case PostActionTypes.FETCH_POST_ERROR:
			return { loading: false, error: action.payload, post: null }
		default:
			return state
	}
}
