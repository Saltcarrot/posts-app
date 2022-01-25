import { ChangeEvent, FC, KeyboardEvent } from 'react'

interface IFieldProps {
	type?: string
	placeholder?: string
	value: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void
}

const Field: FC<IFieldProps> = ({
	type = 'text',
	placeholder = 'Enter some text here',
	value,
	onChange,
	onKeyDown,
}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onKeyDown={onKeyDown}
		/>
	)
}

export default Field
