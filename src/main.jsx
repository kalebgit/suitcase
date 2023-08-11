import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Welcome from './routes/Welcome/Welcome'
import Root from './routes/Root/Root'
import Home from './routes/Home/Home'
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
        path: "Home",
        element: <Home/>
        // loader: homeLoader
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
