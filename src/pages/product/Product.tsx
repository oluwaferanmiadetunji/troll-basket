import styles from './style.module.scss';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LeftOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import clsx from 'clsx';

const Product = () => {
	const history = useHistory();

	const productId = useLocation().pathname.split('/product/')[1];
	const { products, cart } = useSelector((state: any) => state);

	const { image, name, description, id, price, location, stock } = products.find((item: any) => item.id === productId);

	return (
		<div className={styles.product}>
			<header className={styles.container__header}>
				<div className={styles.container__header__icon} onClick={() => history.goBack()}>
					<LeftOutlined className={styles.container__header__icon__icon} />
				</div>

				<p className={styles.container__header__text}>Details</p>

				<div className={styles.container__header__icons}>
					<div className={styles.container__header__icon}>
						<SearchOutlined className={styles.container__header__icon__icon} />
					</div>

					<div className={clsx(styles.container__header__icon, styles.container__header__cart__icon)}>
						<ShoppingCartOutlined className={styles.container__header__icon__icon} />
						<div>
							<span className={styles.container__header__cart__icon__text}>{cart.length}</span>
						</div>
					</div>
				</div>
			</header>

			<main className={styles.container}>
				<div className={styles.details}>
					<div className={styles.details__image}>
						<img src={image} alt='product' className={styles.details__image__image} />
					</div>

					<div className={styles.details__container}>
						<p className={styles.details__container__name}>{name}</p>

						<p className={styles.details__container__description}>{description}</p>

						<p className={styles.details__container__price}>
							&#8358; {price} <span className={styles.details__container__price__small}>/ piece</span>
						</p>
					</div>
				</div>
			</main>

			<footer className={styles.footer}>
				<div className={styles.add__to__cart}>Add to Cart</div>

				<div className={styles.wishlist}>Wishlist</div>
			</footer>
		</div>
	);
};

export default Product;
