import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';


let nav = {
  "main" : '/index',
  "about" : "/about",
  "price" : "/buy/price"
};

ReactDOM.render(
  <React.StrictMode>
    <App title = "My site is The BEST" hero= "hello hello" nav={nav}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
