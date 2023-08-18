import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Welcome from './routes/Welcome/Welcome'
import Root from './routes/Root/Root'
import Home from './routes/Home/Home'
import Store from './routes/Store/Store'
import Cart from './routes/Cart/Cart'
import Test from './routes/Test/Test'
import Data from './routes/Data/Data'
import ErrorPage from './routes/ErrorPage/ErrorPage'
import {Loader} from './routes/Loader/Loader'
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    // loader: rootLoader
    errorElement: <ErrorPage/>,
    loader: Loader,
    children: [
      {
        path: "/",
        element: <Home/>
        // loader: homeLoader
      },
      {
        path: "/store",
        element: <Store/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/data",
        element: <Data/>
      },
      {
        path: "/test",
        element: <Test/>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
