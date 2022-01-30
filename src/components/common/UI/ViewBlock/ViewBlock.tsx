import { Dispatch, FC, SetStateAction } from 'react'

import { HiViewList } from 'react-icons/hi'
import { BsFillGridFill } from 'react-icons/bs'

import styles from './ViewBlock.module.sass'

interface IViewBlockProps {
	view: string
	setView: Dispatch<SetStateAction<string>>
}

const ViewBlock: FC<IViewBlockProps> = (props: IViewBlockProps) => {
	const setRowView = () => {
		if (props.view === 'column') {
			props.setView('row')
		}
	}

	const setColumnView = () => {
		if (props.view === 'column') {
			props.setView('row')
		}
	}

	return (
		<div className={styles.view_btns}>
			<button
				className={`${styles.btn} ${
					props.view === 'row' ? styles.active : ' '
				}`}
				onClick={setRowView}
			>
				<HiViewList />
			</button>
			<button
				className={`${styles.btn} ${
					props.view === 'column' ? styles.active : ' '
				}`}
				onClick={setColumnView}
			>
				<BsFillGridFill />
			</button>
		</div>
	)
}

export default ViewBlock
