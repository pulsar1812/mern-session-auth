import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store';
import { checkLoggedIn } from './util/session';

const renderApp = preloadedState => {
  const store = configureStore(preloadedState);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

(async () => renderApp(await checkLoggedIn()))();
