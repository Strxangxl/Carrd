import Image from 'next/image';

import jung from '../assets/jung.jpeg';

import styles from '../styles/Home.module.css';

const Jungkook = () => {
	return(
		<div className={styles.jungkook}>
			<Image className={styles.jung} src={jung} objectFit="cover" width="150px" height="150px" />
			<h3 className={styles.jung_text}>Strxangxl</h3>
		</div>
	)
}

export default Jungkook;