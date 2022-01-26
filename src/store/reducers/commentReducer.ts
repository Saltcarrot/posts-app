import {
	CommentsActionTypes,
	ICommentState,
	TCommentsAction,
} from '../../types/comment'

const initialState: ICommentState = {
	comments: [],
	loading: false,
	error: null,
}

export const commentReducer = (
	state = initialState,
	action: TCommentsAction
): ICommentState => {
	switch (action.type) {
		case CommentsActionTypes.FETCH_COMMENTS:
			return { ...state, loading: true }
		case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
			return { ...state, loading: false, comments: action.payload }
		case CommentsActionTypes.FETCH_COMMENTS_ERROR:
			return { ...state, error: action.payload }
		default:
			return state
	}
}
