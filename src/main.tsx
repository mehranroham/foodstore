import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KindeProvider
      clientId={import.meta.env.VITE_Client_Id}
      domain={import.meta.env.VITE_Domain}
      redirectUri={import.meta.env.VITE_Redirect_Uri}
      logoutUri={import.meta.env.VITE_Logout_Uri}
    >
      <RouterProvider router={router} />
    </KindeProvider>
  </React.StrictMode>
);
