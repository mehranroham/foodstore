import { createBrowserRouter } from 'react-router-dom';
import Layout from './routes/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
]);
