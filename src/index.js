import './index.css';
import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducers';
import { INITIAL_STATE } from './core';

const store = createStore(reducer, INITIAL_STATE);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);