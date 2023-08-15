import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Welcome from './routes/Welcome/Welcome'
import Root from './routes/Root/Root'
import Home from './routes/Home/Home'
import Store from './routes/Store/Store'
import ErrorPage from './routes/ErrorPage/ErrorPage'
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    // loader: rootLoader
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
        // loader: homeLoader
      },
      {
        path: "/store",
        element: <Store/>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
