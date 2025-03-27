import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import RedirectPage from "./pages/RedirectPage/RedirectPage";
import Layout from "./pages/Layout/Layout";
import {MetricaExperimentsProvider} from "yandex-metrica-ab-react";

const clientId = "metrika.98662215";


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
        <MetricaExperimentsProvider clientId={clientId}>
        <h1>Ym test Update Test hit defer true</h1>
            <RouterProvider router={router} />
        </MetricaExperimentsProvider>
    );
};

export default App;