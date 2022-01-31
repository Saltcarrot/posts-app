import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/index'

// import App from './App'

import './assets/sass/global.sass'
import Routes from './routes/Routes'
import AppProvider from './providers/AppProvider'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <App /> */}
			{/* <Routes /> */}
			<AppProvider />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
