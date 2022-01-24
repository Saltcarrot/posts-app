import { combineReducers } from 'redux'
import { commentReducer } from './commentReducer'
import { postReducer } from './postReducer'
import { postsReducer } from './postsReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
	user: userReducer,
	comments: commentReducer,
	post: postReducer,
	posts: postsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
