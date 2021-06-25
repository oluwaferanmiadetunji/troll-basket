import styles from './style.module.scss';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LeftOutlined, DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { clearCart, setCart } from '../../redux';
import { ROUTES } from 'utils/constants';

const Product = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const MINUS = 'MINUS';
	const PLUS = 'PLUS';

	const randomNumber = Math.floor(Math.random() * 10);

	const { products, cart } = useSelector((state: any) => state);

	const clear = () => {
		dispatch(clearCart(null));
		history.push(ROUTES.SUCCESS);
	};

	const totalPrice = () => {
		if (cart.length === 0) {
			return 0;
		}
		let sum = 0;
		for (let i = 0; i < cart.length; i++) {
			sum += parseFloat(cart[i].price);
		}
		return sum;
	};

	const changeQTY = (id: string, type: string) => {
		if (type === MINUS) {
		} else {
		}
	};

	const deleteItem = (id: string) => {
		const newCart = cart.filter((item: any) => item.id !== id);

		dispatch(setCart(newCart));
	};

	return (
		<div className={styles.cart}>
			<header className={styles.container__header}>
				<div className={styles.container__header__icon} onClick={() => history.goBack()}>
					<LeftOutlined className={styles.container__header__icon__icon} />
				</div>

				<p className={styles.container__header__text}>Carts</p>

				<div className={styles.container__header__icons} />
			</header>

			<main className={styles.container}>
				{cart.length > 0 ? (
					<div className={styles.container__cart}>
						{cart.map(({ image, name, price, qty, id }: any, index: number) => (
							<div className={styles.container__cart__item} key={index}>
								<div className={styles.details}>
									<img src={image} className={styles.details__image} alt='' />
									<div className={styles.details__more}>
										<p className={styles.details__more__name}>{name}</p>
										<p className={styles.details__more__price}>&#8358; {price}</p>
									</div>
								</div>

								<hr style={{ color: '#F6F2F2', background: '#F6F2F2' }} />

								<div className={styles.container__cart__item__more}>
									<div className={styles.container__cart__item__more__delete} onClick={() => deleteItem(id)}>
										<DeleteOutlined className={styles.container__cart__item__more__delete__icon} />
										<p className={styles.container__cart__item__more__delete__text}>Delete</p>
									</div>

									<div className={styles.container__cart__item__more__buttons}>
										<div className={styles.container__cart__item__more__buttons__minus} onClick={() => changeQTY(id, MINUS)}>
											<MinusOutlined />
										</div>

										<p className={styles.container__cart__item__more__buttons__text}>{qty}</p>

										<div className={styles.container__cart__item__more__buttons__plus} onClick={() => changeQTY(id, PLUS)}>
											<PlusOutlined />
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className={styles.no__data}>No data</div>
				)}

				<div className={styles.container__price}>
					<div className={styles.container__price__total}>
						<p className={styles.container__price__total__label}>Subtotal</p>
						<p className={styles.container__price__total__value}>&#8358; {totalPrice()}</p>
					</div>

					<div className={styles.container__price__total}>
						<p className={styles.container__price__total__label}>Total</p>
						<p className={styles.container__price__total__value}>&#8358; {totalPrice()}</p>
					</div>

					<div className={styles.checkout} onClick={clear}>
						Checkout
					</div>
				</div>

				<div className={styles.container__recent}>
					<div className={styles.flex}>
						<p className={styles.flex__text}>Review and Ratings</p>
						<p className={styles.flex__view}>View All</p>
					</div>

					<div className={styles.grid}>
						{products.slice(randomNumber, randomNumber + 3).map(({ image, description, stock, price, id }: any, index: number) => (
							<div
								className={styles.container__recent__item}
								key={index}
								onClick={() => {
									history.push(`/product/${id}`);
								}}>
								<img src={image} className={styles.container__recent__item__image} alt='product' />
								<p className={styles.container__recent__item__description}>{description}</p>

								<p className={styles.container__recent__item__price}>&#8358; {price}</p>

								<p className={styles.container__recent__item__stock}>MOQ {stock} (pieces)</p>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
};

export default Product;
