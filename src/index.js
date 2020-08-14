// importing packages
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
// import { Provider } from 'react-redux';

// importing files
import './index.css';
import App from './component/App';
import movies from './reducers';

const store = createStore(movies);
console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);