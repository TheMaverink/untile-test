import Layout from '../Layout';

import TickersPage from '../../pages/Tickers';
import CalculatorPage from '../../pages/Calculator';
import NotFoundPage from '../../pages/NotFound';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/calculator" replace />,
      },
      {
        path: 'calculator',
        element: <CalculatorPage />,
      },
      {
        path: 'tickers',
        element: <TickersPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
