import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './styles/reset.scss';
import './styles/common.scss';
import './styles/variables.scss';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
