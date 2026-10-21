import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DataProvider from "./DataProvider";
import CommonLoginScreen from "./Components/Login/CommonLoginScreen";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import PlacementReset from "./Components/PlacementReset/PlacementReset";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import SuccessfulPage from "./Components/SuccessfulPage/SuccessfulPage";
import TrainingCoordinator from "./Components/TrainingCoordinator/TrainingCoordinator";

import "./App.css";

const router = createBrowserRouter([
    {
        path: "/PRP_Portal/Login",
        element: <CommonLoginScreen />,
    },
    {
        path: "/PRP_Portal/TrainingCoordinator",
        element: <TrainingCoordinator />,
    },
    {
        path: "/PRP_Portal/ForgotPassword",
        element: <ForgotPassword />,
    },
    {
        path: "/PRP_Portal/ResetLinkSent",
        element: <PlacementReset />,
    },
    {
        path: "/PRP_Portal/ResetPassword",
        element: <ResetPassword />,
    },
    {
        path: "/PRP_Portal/PasswordResetSuccess",
        element: <SuccessfulPage />,
    },
]);

const App = () => {
    return (
        <DataProvider>
            <RouterProvider router={router} />
        </DataProvider>
    );
};

export default App;