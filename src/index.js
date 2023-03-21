import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider,createBrowserRouter}from"react-router-dom";
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Error from './Pages/Error';

const routers =createBrowserRouter([{
  page:"/", element:<Layout/>,
  errorElement:<Error/>,
  children:[{
  index:true ,element:<Home/>
  }]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routers}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RouterProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
