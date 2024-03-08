import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './stylesheets/index.css';
import Home from './site-pages/home';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./error-page";
import Store from "./site-pages/store";
import CommunityEvents from "./site-pages/community";
import ContactUs from "./site-pages/contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/store',
        element: <Store/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/community',
        element: <CommunityEvents/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/contact',
        element: <ContactUs/>,
        errorElement: <ErrorPage/>
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
