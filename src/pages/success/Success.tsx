import styles from './style.module.scss';
import CheckImage from 'assets/check.svg';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'utils/constants';

const Success = (): JSX.Element => {
	const history = useHistory();

	return (
		<div className={styles.container}>
			<img src={CheckImage} alt='' className={styles.image} />

			<p className={styles.big__text}>Checkout Succesful</p>

			<p className={styles.small__text}>Your checkout is now successful.</p>

			<div className={styles.button} onClick={() => history.push(ROUTES.BUY)}>
				Got It
			</div>
		</div>
	);
};

export default Success;
