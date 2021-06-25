import styles from './style.module.scss';
import { useLocation } from 'react-router-dom';

const Product = () => {
	const location = useLocation();
	const id = location.pathname.split('/product/')[1];

	console.log(id);

	return <div className={styles.container}>Hi</div>;
};

export default Product;
