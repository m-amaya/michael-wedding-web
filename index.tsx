import { App } from 'app/App';
import { configure } from 'mobx';
import { enableLogging } from 'mobx-logger';
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from 'styles/GlobalStyles';

/**
 * MobX configuration
 */
configure({ enforceActions: 'observed' });

if (process.env.NODE_ENV !== 'production') {
  enableLogging({
    action: true,
    reaction: true,
    transaction: true,
    compute: true,
  });
}

/**
 * Bootstrap
 */
ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('app'),
);
