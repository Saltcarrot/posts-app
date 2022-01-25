import { ChangeEvent, KeyboardEvent, useState } from 'react'
import Field from './UI/Field'

const Header = () => {
	const [query, setQuery] = useState<string>('')

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value)
	}

	const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' || event.keyCode === 13) {
			console.log(query)
			setQuery('')
		}
	}

	return (
		<header>
			<div className='container my-0 mx-auto'>
				<Field
					value={query}
					onChange={onChangeHandler}
					onKeyDown={onKeyDownHandler}
				/>
			</div>
		</header>
	)
}

export default Header
