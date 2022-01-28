import { FC } from 'react'

import { HiViewList } from 'react-icons/hi'
import { BsFillGridFill } from 'react-icons/bs'

import styles from './ViewBlock.module.sass'

interface IViewBlockProps {
	view: boolean
	setView: (v: boolean) => void
}

const ViewBlock: FC<IViewBlockProps> = (props: IViewBlockProps) => {
	return (
		<div className={styles.view_btns}>
			<button
				className={`${styles.btn} ${props.view ? styles.active : ' '}`}
				onClick={() => props.setView(!props.view)}
			>
				<HiViewList />
			</button>
			<button
				className={`${styles.btn} ${!props.view ? styles.active : ' '}`}
				onClick={() => props.setView(!props.view)}
			>
				<BsFillGridFill />
			</button>
		</div>
	)
}

export default ViewBlock
