import { ApolloProvider } from '@apollo/client/react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import 'modern-normalize/modern-normalize.css';

import App from './App';
import { apolloClient } from './graphql/client';
import { store } from 'store/store';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </Provider>,
);
