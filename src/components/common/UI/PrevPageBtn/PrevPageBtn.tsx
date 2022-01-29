import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { IoIosArrowBack } from 'react-icons/io'

import styles from './PrevPageBtn.module.sass'

const PrevPageBtn: FC = () => {
	const navigate = useNavigate()
	return (
		<button className={styles.btn} onClick={() => navigate(-1)}>
			<IoIosArrowBack />
		</button>
	)
}

export default PrevPageBtn
