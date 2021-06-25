import styles from './style.module.scss';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LeftOutlined, DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { clearCart, setCart } from '../../redux';

const Product = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const { products, cart } = useSelector((state: any) => state);

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
				<div className={styles.container__cart}>
					{cart.map(({ image, name, price, qty }: any, index: number) => (
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
								<div className={styles.container__cart__item__more__delete}>
									<DeleteOutlined className={styles.container__cart__item__more__delete__icon} />
									<p className={styles.container__cart__item__more__delete__text}>Delete</p>
								</div>

								<div className={styles.container__cart__item__more__buttons}>
									<div className={styles.container__cart__item__more__buttons__minus}>
										<MinusOutlined />
									</div>

									<p className={styles.container__cart__item__more__buttons__text}>{qty}</p>

									<div className={styles.container__cart__item__more__buttons__plus}>
										<PlusOutlined />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className={styles.container__price}>
					<div className={styles.container__price__total}>
						<p className={styles.container__price__total__label}>Subtotal</p>
						<p className={styles.container__price__total__value}>&#8358; 185,000</p>
					</div>

					<div className={styles.container__price__total}>
						<p className={styles.container__price__total__label}>Total</p>
						<p className={styles.container__price__total__value}>&#8358; 185,000</p>
					</div>

					<div className={styles.checkout}>Checkout</div>
				</div>
			</main>
		</div>
	);
};

export default Product;
