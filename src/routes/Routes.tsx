import { FC } from 'react'
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom'
import PostItem from '../components/pages/PostItem'
import PostsList from '../components/pages/PostsList'
import UserProfile from '../components/pages/UserProfile'

const Routes: FC = () => {
	return (
		<Router>
			<Switch>
				<Route path={'/'} element={<div>Home</div>} />
				<Route path={'/posts'} element={<PostsList />} />
				<Route path={'/posts/:id'} element={<PostItem />} />
				<Route path={'/users/:id'} element={<UserProfile />} />
			</Switch>
		</Router>
	)
}

export default Routes
