import Card from './Card';
import CardTwo from './CardTwo';

import lisa from '../assets/lisa.jpg';
import rose from '../assets/rose.jpeg';
import jisoo from '../assets/jisoo.jpeg';
import jennie from '../assets/jennie.jpeg';

import styles from '../styles/Home.module.css';

const Cards = () => {
	return(
		<div className={styles.cards}>
			<div className={styles.first}>
				<Card src={lisa} text="About Me" />
				<Card src={rose} text="Likes/Dislikes" />
			</div>
			<div className={styles.second}>
				<CardTwo src={jisoo} text="Stans" />
				<CardTwo src={jennie} text="Social" />
			</div>
		</div>
	)
}

export default Cards;