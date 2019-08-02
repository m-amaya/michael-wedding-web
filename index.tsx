import { App } from 'app/App';
import { configure } from 'mobx';
import { enableLogging } from 'mobx-logger';
import React from 'react';
import ReactDOM from 'react-dom';
import { Store, StoreContext } from 'store';
import { style, StyleContext } from 'styles';
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
 * Setup
 */
const store = new Store();

/**
 * Context Providers
 */
const Providers: React.FC = ({ children }) => (
  <StoreContext.Provider value={store}>
    <StyleContext.Provider value={style}>{children}</StyleContext.Provider>
  </StoreContext.Provider>
);

/**
 * Bootstrap
 */
ReactDOM.render(
  <>
    <GlobalStyles />
    <Providers>
      <App />
    </Providers>
  </>,
  document.getElementById('app'),
);
