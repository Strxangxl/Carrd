import Image from 'next/image';
import Broken from '../assets/broken.png';

import styles from '../styles/Home.module.css';

const Header = () => {
	return(
		<div className={styles.heading}>
			<h1 className={styles.title}>Good Evening!!!</h1>
			<Image width="64px" height="64px" className={styles.roundImg} src={Broken} objectFit="cover" />
		</div>
	)
}

export default Header;