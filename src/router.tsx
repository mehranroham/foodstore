import { createBrowserRouter } from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Shop from './routes/Shop';
import FoodDetail from './routes/FoodDetail';
import Recipes from './routes/Recipes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'shop/:foodId', element: <FoodDetail /> },

      { path: 'recipes', element: <Recipes /> },
      { path: '/*', element: <Home /> },
    ],
  },
]);
