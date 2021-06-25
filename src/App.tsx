import { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from 'utils/constants';

const Buy = lazy(() => import('pages/buy'));
const Cart = lazy(() => import('pages/cart'));
const Success = lazy(() => import('pages/success'));

function App() {
	return (
		<Suspense fallback={<div />}>
			<Switch>
				<Route exact path={ROUTES.CART} component={Cart} />
				<Route exact path={ROUTES.SUCCESS} component={Success} />
				<Route exact path={ROUTES.BUY} component={Buy} />

				<Route render={() => <Redirect to={ROUTES.BUY} />} />
			</Switch>
		</Suspense>
	);
}

export default App;
