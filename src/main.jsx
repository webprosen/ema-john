import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout/Layout';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/loader';
import Register from './components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
);