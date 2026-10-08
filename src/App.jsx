import React from "react";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

import DataProvider from "./DataProvider";
import CommonLoginScreen from "./Components/Login/CommonLoginScreen";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import PlacementReset from "./Components/PlacementReset/PlacementReset";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import SuccessfulPage from "./Components/SuccessfulPage/SuccessfulPage";

import "./App.css";

const router = createBrowserRouter(
    [
        { path: "/Login", element: <CommonLoginScreen /> },
        { path: "/ForgotPassword", element: <ForgotPassword /> },
        { path: "/ResetLinkSent", element: <PlacementReset /> },
        { path: "/ResetPassword", element: <ResetPassword /> },
        { path: "/PasswordResetSuccess", element: <SuccessfulPage /> },
        { path: "*", element: <Navigate to="/Login" replace /> },
    ],
    { basename: "/PRP_Portal" }
);

const App = () => {
    return (
        <DataProvider>
            <RouterProvider router={router} />
        </DataProvider>
    );
};

export default App;