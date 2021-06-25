import { useState } from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';
import {
	EnvironmentOutlined,
	DownOutlined,
	SearchOutlined,
	HomeOutlined,
	MenuOutlined,
	TagOutlined,
	ShoppingCartOutlined,
	WalletOutlined,
	ArrowDownOutlined,
} from '@ant-design/icons';
import CategoriesImage from 'assets/categories.svg';
import ProductsImage from 'assets/products.svg';
import RecommendedImage from 'assets/recommended.svg';
import ShopImage from 'assets/shops.svg';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from 'utils/constants';

const Home = (): JSX.Element => {
	const history = useHistory();
	const limit = 6;
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(limit);

	const { products, cart } = useSelector((state: any) => state);

	const [allProducts, setAllProducts] = useState(products.slice(start, end));

	const [visible, setVisible] = useState(true);

	const getMoreData = () => {
		if (allProducts.length === products.length) {
			setVisible(false);
		} else {
			const newStart = start + limit;
			const newEnd = end + limit;

			setAllProducts([...allProducts, ...products.slice(newStart, newEnd)]);

			setStart(newStart);
			setEnd(newEnd);
		}
	};

	return (
		<div className={styles.home}>
			<div className={styles.container}>
				<h1 className={styles.container__heading}>Trollbasket</h1>

				<header className={styles.container__header}>
					<div className={clsx(styles.container__header__item, styles.bordered)}>
						<div className={styles.container__header__item__icon__container}>
							<EnvironmentOutlined className={styles.container__header__item__icon} style={{ color: '#227EFF' }} />
						</div>
						<p className={styles.container__header__item__text}>Lagos</p>
						<DownOutlined style={{ color: '#071827', fontWeight: 900, fontSize: 14 }} />
					</div>

					<div className={clsx(styles.container__header__item, styles.bordered)}>
						<div className={styles.container__header__item__icon__container}>
							<WalletOutlined className={styles.container__header__item__icon} style={{ color: '#7E42F5' }} />
						</div>
						<p className={styles.container__header__item__text}>My Orders</p>
					</div>

					<div className={clsx(styles.container__header__item)} onClick={() => history.push(ROUTES.CART)}>
						<div className={styles.container__header__item__icon__container}>
							<ShoppingCartOutlined className={styles.container__header__item__icon} style={{ color: '#2E4457' }} />
							<div>
								<span className={styles.container__header__item__icon__text}>{cart.length}</span>
							</div>
						</div>
						<p className={styles.container__header__item__text}>Cart</p>
					</div>
				</header>

				<main className={styles.container__main}>
					<div className={styles.container__main__search__bar}>
						<input placeholder='Search Merchbuy' className={styles.container__main__search__bar__input} />
						<SearchOutlined className={styles.container__main__search__bar__icon} />
					</div>

					<div className={styles.container__main__header}>
						<div className={styles.container__main__header__first} />
						<div className={styles.container__main__header__second} />
						<div className={styles.container__main__header__third} />
					</div>

					<div className={styles.container__main__details}>
						<div className={styles.container__main__details__header}>
							<div className={styles.container__main__details__header__item}>
								<img src={CategoriesImage} alt='' />
								<p className={styles.container__main__details__header__item__text}>Product Categories</p>
							</div>

							<div className={styles.container__main__details__header__item}>
								<img src={ProductsImage} alt='' />
								<p className={styles.container__main__details__header__item__text}>Popular Products</p>
							</div>

							<div className={styles.container__main__details__header__item}>
								<img src={RecommendedImage} alt='' />
								<p className={styles.container__main__details__header__item__text}>Recommended Products</p>
							</div>

							<div className={styles.container__main__details__header__item}>
								<img src={ShopImage} alt='' />
								<p className={styles.container__main__details__header__item__text}>Shops</p>
							</div>
						</div>

						<div className={styles.container__main__details__container}>
							{allProducts.map(({ image, description, stock, price, id }: any, index: number) => (
								<div
									className={styles.container__main__details__container__item}
									key={index}
									onClick={() => {
										history.push(`/product/${id}`);
									}}>
									<img src={image} className={styles.container__main__details__container__item__image} alt='product' />
									<p className={styles.container__main__details__container__item__description}>{description}</p>

									<p className={styles.container__main__details__container__item__price}>&#8358; {price}</p>

									<p className={styles.container__main__details__container__item__stock}>MOQ {stock} (pieces)</p>
								</div>
							))}
						</div>

						{visible && (
							<div className={styles.container__main__details__more} onClick={getMoreData}>
								<span className={styles.container__main__details__more__text}>More</span>
								<ArrowDownOutlined className={styles.container__main__details__more__icon} />
							</div>
						)}
					</div>
				</main>
			</div>

			<footer className={styles.footer}>
				<div className={styles.item}>
					<HomeOutlined className={styles.icon} />
					<p className={styles.text}>Home</p>
				</div>

				<div className={clsx(styles.item, styles.active)}>
					<ShoppingCartOutlined className={styles.icon} />
					<p className={styles.text}>Buy</p>
				</div>

				<div className={styles.item}>
					<TagOutlined className={styles.icon} />
					<p className={styles.text}>Deals</p>
				</div>

				<div className={styles.item}>
					<WalletOutlined className={styles.icon} />
					<p className={styles.text}>Wallet</p>
				</div>

				<div className={styles.item}>
					<MenuOutlined className={styles.icon} />
					<p className={styles.text}>More</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;
