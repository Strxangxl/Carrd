import Jungkook from './Jungkook';
import Artist from './Artist';

import blackpink from '../assets/blackpink.jpg';
import twice from '../assets/twice.jpeg'

import styles from '../styles/Home.module.css';

const Recent = () => {
	return(
		<div className={styles.recent}>
			<h1 className={styles.recent_title}>Recently Played</h1>
			<div className={styles.recent_second}>
				<Jungkook />
				<Artist src={blackpink} text="Blackpink" />
				<Artist src={twice} text="Twice" />
			</div>
		</div>
	)
}

export default Recent;