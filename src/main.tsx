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
        clientId={import.meta.env.VITE_Client_Id}
        domain={import.meta.env.VITE_Domain}
        redirectUri={import.meta.env.VITE_Redirect_Uri}
        logoutUri={import.meta.env.VITE_Logout_Uri}
      >
        <RouterProvider router={router} />
      </KindeProvider>
    </Provider>
  </React.StrictMode>
);
