import { createBrowserRouter } from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Shop from './routes/Shop';
import FoodDetail from './routes/FoodDetail';
import Recipes from './routes/Recipes';
import NewRecipe from './routes/NewRecipe';
import Recipe from './components/Recipe';
import Cart from './routes/Cart';
import Contact from './routes/Contact';
import About from './routes/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'shop',
        element: <Shop />,
        children: [{ path: 'cart', element: <Cart /> }],
      },

      { path: 'shop/:foodId', element: <FoodDetail /> },

      { path: 'recipes', element: <Recipes /> },
      { path: 'recipes/:recipeId', element: <Recipe /> },
      { path: 'recipes/new', element: <NewRecipe /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about', element: <About /> },
      { path: '/*', element: <Home /> },
    ],
  },
]);
