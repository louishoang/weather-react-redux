import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from './localStorage';
import { BrowserRouter } from 'react-router-dom';

const persistedState = loadState();
const store = createStore(
  rootReducer, 
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState({
    cities: store.getState().cities
  });
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));

registerServiceWorker();
