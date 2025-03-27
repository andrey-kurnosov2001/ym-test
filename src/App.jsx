import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import RedirectPage from "./pages/RedirectPage/RedirectPage";
import Layout from "./pages/Layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<Layout><MainPage /></Layout>),
    },
    {
        path: "about",
        element: (<Layout><AboutPage /></Layout>),
    },
    {
        path: "redirect",
        element: (<Layout><RedirectPage /></Layout>),
    },
]);


const App = () => {
    return (
        <div>
        <h1>Ym test experiments v1.1</h1>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;