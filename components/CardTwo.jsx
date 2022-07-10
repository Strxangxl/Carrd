import Image from 'next/image';

import styles from '../styles/Home.module.css';

const Card = (props) => {
	return(
		<div className={styles.cardTwo}>
			<h2 className={styles.desc}>{props.text}</h2>
			<Image objectFit="cover" height="80px" width="80px" src={props.src} className={styles.cardImg} />
		</div>
	)
}

export default Card;