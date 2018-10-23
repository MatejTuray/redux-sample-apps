import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise"
import rootReducer from './reducers/reducers';

const storeWithMiddleWare = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(<Provider store={storeWithMiddleWare(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}><App /></Provider>, document.getElementById('root'));
