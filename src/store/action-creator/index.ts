import * as UserActionCreators from './user'
import * as CommentsActionCreators from './comment'
import * as PostActionCreators from './post'

export default {
	...UserActionCreators,
	...CommentsActionCreators,
	...PostActionCreators,
}
