import { FC, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Routes from '../routes/Routes'

const AppProvider: FC = () => {
	const [isAuth, setIsAuth] = useState<boolean>(true)

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			<Routes />
		</AuthContext.Provider>
	)
}

export default AppProvider
