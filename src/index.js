import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux';
import reportWebVitals from './reportWebVitals';



//   () => console.log(store.getState())
//   )
// le suscribe permet d'écouter les changements au niveau de ntore store. On lui donne en paramètre une fonction

// redux offre un outil de debug intéressat, redux devtool

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
