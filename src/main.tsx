import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';
import { Provider } from 'react-redux';
import store from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <KindeProvider
        clientId='63896a6ec97b4df78e43f403db93213b'
        domain='https://foodstore.kinde.com'
        redirectUri='https://foodstore1.netlify.app'
        logoutUri='https://foodstore1.netlify.app'
      >
        <RouterProvider router={router} />
      </KindeProvider>
    </Provider>
  </React.StrictMode>
);
