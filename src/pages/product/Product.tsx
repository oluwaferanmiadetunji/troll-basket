import styles from './style.module.scss';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LeftOutlined, SearchOutlined, ShoppingCartOutlined, RightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import UserImage from 'assets/user.svg';
import { setCart } from '../../redux';
import { toast } from 'react-toastify';

const Product = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const productId = useLocation().pathname.split('/product/')[1];
	const { products, cart } = useSelector((state: any) => state);

	const { image, name, description, id, price, location, stock } = products.find((item: any) => item.id === productId);

	const addToCart = () => {
		toast.success('Item added to cart');

		const item = cart.find((item: any) => item.id === productId);

		if (item) {
			let newCart = [...cart];
			const positionOfItem = newCart.indexOf(item);
			const cartItem = newCart[positionOfItem];
			const { qty } = cartItem;

			newCart[positionOfItem] = { ...cartItem, qty: qty + 1 };

			dispatch(setCart(newCart));
		} else {
			const newCart = [...cart, { image, name, description, id, price, location, stock, qty: 1 }];
			dispatch(setCart(newCart));
		}
	};

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

					<div className={styles.details__production__description}>
						<p className={styles.details__production__description__text}>Product Description</p>
						<RightOutlined className={styles.details__production__description__icon} />
					</div>

					<div className={styles.details__production__review}>
						<div className={styles.details__production__review__header}>
							<p className={styles.details__production__review__header__text}>Review and Ratings</p>
							<p className={styles.details__production__review__header__view}>View All</p>
						</div>

						<div className={styles.details__production__review__rating}>
							<span className={clsx('fa fa-star', styles.star, styles.checked)}></span>
							<span className={clsx('fa fa-star', styles.star, styles.checked)}></span>
							<span className={clsx('fa fa-star', styles.star, styles.checked)}></span>
							<span className={clsx('fa fa-star', styles.star)} style={{ color: '#EEEFF2' }}></span>
							<span className={clsx('fa fa-star', styles.star)} style={{ color: '#EEEFF2' }}></span>
						</div>

						<p className={styles.details__production__review__rating__text}>
							This is the best product I have used in a long while and the size fits perfectly and I love the colors!!!!!
						</p>

						<div className={styles.details__production__review__user}>
							<img src={UserImage} className={styles.details__production__review__user__image} alt='' />
							<p className={styles.details__production__review__user__text}>Segun Arinze</p>
						</div>
					</div>
				</div>
			</main>

			<footer className={styles.footer}>
				<div className={styles.add__to__cart} onClick={addToCart}>
					Add to Cart
				</div>

				<div className={styles.wishlist}>Wishlist</div>
			</footer>
		</div>
	);
};

export default Product;
