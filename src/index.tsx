import { ApolloProvider } from '@apollo/client/react';
import { createRoot } from 'react-dom/client';

import 'modern-normalize/modern-normalize.css';

import App from './App';
import { apolloClient } from './graphql/client';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
);
