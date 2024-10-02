import Layout from '../Layout';

import TickersPage from '../../pages/Tickers';
import CalculatorPage from '../../pages/Calculator';

import { Heading1 } from '../typography';

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
        element: (
          <Heading1
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          >
            PAGE NOT FOUND
          </Heading1>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
