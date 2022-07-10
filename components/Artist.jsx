import Image from 'next/image';

import styles from '../styles/Home.module.css';

const Artist = (props) => {
	return(
		<div className={styles.artist}>
			<Image objectFit="cover" height="160px" width="160px" src={props.src} className={styles.artistImg} />
			<h2 className={styles.jung_text}>{props.text}</h2>
		</div>
	)
}

export default Artist;