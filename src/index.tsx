import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layouts/Layout';
import App from './pages/Register';
import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Layout pageTitle={'Register'}>
      <App />
    </Layout>
  </React.StrictMode>
);
