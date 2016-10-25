
import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { Router } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import routes from './routes'
import api from './middleware/api'
import rootReducer from './reducers'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware,api)(createStore);
let store=createStoreWithMiddleware(rootReducer);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
  , document.querySelector('.container'));


  // <Provider store={createStoreWithMiddleware(reducers)}>
  //   <App />

  // </Provider>