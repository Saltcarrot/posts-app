import { FC } from 'react'
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { routesList } from '../types/route'

const Routes: FC = () => {
	const { isAuth } = useAuth()

	return (
		<Router>
			{isAuth && (
				<Switch>
					{routesList.map((route) => {
						return (
							<Route
								key={route.path}
								path={route.path}
								element={<route.element />}
							/>
						)
					})}
				</Switch>
			)}
		</Router>
	)
}

export default Routes
