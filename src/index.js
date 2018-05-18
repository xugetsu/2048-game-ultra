import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers =  composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, composedEnhancers);
//console.log('composedEnhancers', composedEnhancers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

window.addEventListener("keydown", (e) => {
    // space and arrow keys
    if([32, 37, 38, 39, 40].includes(e.keyCode)) {
        e.preventDefault();
    }
}, false);