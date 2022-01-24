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
			return { loading: true, error: null, comments: [] }
		case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
			return { loading: false, error: null, comments: action.payload }
		case CommentsActionTypes.FETCH_COMMENTS_ERROR:
			return { loading: false, error: action.payload, comments: [] }
		default:
			return state
	}
}
