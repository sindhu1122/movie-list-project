import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
 import 'mdbreact/dist/css/mdb.css';
 import { createStore } from 'redux';
 import { Router } from 'react-router';
import { Provider } from 'react-redux'
import reducer from './reducers/index';
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history';
const store = createStore(reducer);
const history = createBrowserHistory();

ReactDOM.render(<Provider store={store}>
 <BrowserRouter>  <App></App></BrowserRouter>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();