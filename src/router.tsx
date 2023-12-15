import { createBrowserRouter } from 'react-router-dom';
import { Home } from '@src/pages/Home';
import { Pokemon } from '@src/pages/Pokemon';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokemon/:id',
    element: <Pokemon />,
  },
]);
