import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
