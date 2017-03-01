import React from 'react';
import { render } from 'react-dom';
import MainPage from './pages/main-page'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(<Provider store={createStoreWithMiddleware(reducers)}><MainPage/></Provider>, document.getElementById('app'));