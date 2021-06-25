import { Suspense, lazy, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from 'utils/constants';
import { useDispatch } from 'react-redux';
import Products from 'data.json';
import { setProducts } from './redux';

const Buy = lazy(() => import('pages/buy'));
const Product = lazy(() => import('pages/product'));
const Cart = lazy(() => import('pages/cart'));
const Success = lazy(() => import('pages/success'));

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setProducts(Products));
	}, [dispatch]);

	return (
		<Suspense fallback={<div />}>
			<Switch>
				<Route exact path={ROUTES.CART} component={Cart} />
				<Route exact path={ROUTES.PRODUCT} component={Product} />
				<Route exact path={ROUTES.SUCCESS} component={Success} />
				<Route exact path={ROUTES.BUY} component={Buy} />

				<Route render={() => <Redirect to={ROUTES.BUY} />} />
			</Switch>
		</Suspense>
	);
}

export default App;
