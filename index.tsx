import { configure } from 'mobx';
import { enableLogging } from 'mobx-logger';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'app/App';

//* Configure MobX
configure({ enforceActions: 'observed' });

if (process.env.NODE_ENV !== 'production') {
  enableLogging({
    action: true,
    reaction: true,
    transaction: true,
    compute: true,
  });
}

//* Bootstrap React app
ReactDOM.render(<App />, document.getElementById('app'));
