import { IPostsState, PostsActionTypes, TPostsAction } from '../../types/posts'

const initialState: IPostsState = {
	posts: [],
	page: 1,
	limit: 5,
	loading: false,
	error: null,
}

export const postsReducer = (
	state = initialState,
	action: TPostsAction
): IPostsState => {
	switch (action.type) {
		case PostsActionTypes.FETCH_POSTS:
			return { ...state, loading: true }
		case PostsActionTypes.SET_POSTS_PAGE:
			return { ...state, page: action.payload }
		case PostsActionTypes.SET_POSTS_LIMIT:
			return { ...state, limit: action.payload }
		case PostsActionTypes.FETCH_POSTS_SUCCESS:
			return { ...state, loading: false, posts: action.payload }
		case PostsActionTypes.FETCH_POSTS_ERROR:
			return { ...state, error: action.payload }
		default:
			return state
	}
}
