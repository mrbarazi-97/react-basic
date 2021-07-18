import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Message from './Message';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from './Welcome';

ReactDOM.render(
  <React.StrictMode>
    <Welcome name1='mohammad' family1='mirzaee' name2='ali' family2='naseri'/>
    <Message message="React is my dearm" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
