import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, root);
});
