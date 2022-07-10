import Image from 'next/image';

import styles from '../styles/Home.module.css';

const Card = (props) => {
	return(
		<div className={styles.card}>
			<div>
				<Image objectFit="cover"
				 height="90px" width="90px" src={props.src} className={styles.cardImg} />
			</div>
			{/*<img src={props.src} className={styles.cardImg} />*/}
			<h2 className={styles.desc}>{props.text}</h2>
		</div>
	)
}

export default Card;