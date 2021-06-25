import styles from './style.module.scss';
import clsx from 'clsx';
import { EnvironmentOutlined, DownOutlined, WalletOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';

const Home = (): JSX.Element => {
	return (
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

				<div className={clsx(styles.container__header__item)}>
					<div className={styles.container__header__item__icon__container}>
						<ShoppingCartOutlined className={styles.container__header__item__icon} style={{ color: '#2E4457' }} />
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
			</main>
		</div>
	);
};

export default Home;
