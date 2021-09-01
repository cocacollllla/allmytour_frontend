import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './styles/init/Reset.scss';
import './styles/init/Common.scss';
import './styles/init/Mixin.scss';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
