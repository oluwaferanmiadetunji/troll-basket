import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import './style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Store from './redux';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={Store}>
			<App />
			<ToastContainer
				position='top-center'
				autoClose={5000}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				draggable
				pauseOnHover
			/>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
