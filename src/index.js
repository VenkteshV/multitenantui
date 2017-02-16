import 'babel-polyfill';
import React from 'react';
import {Route} from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/ItemList';
import DataGrid from './components/DataGrid';
import { Router, browserHistory } from 'react-router';


const store = configureStore();

render(
    <Provider store={store}>
    <Router history={browserHistory}>
   <Route path="/" component={ItemList} />
    <Route path="/datagrid/:value" component={DataGrid} />
 </Router>
    </Provider>,
    document.getElementById('app')
);
