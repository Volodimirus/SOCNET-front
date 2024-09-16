import React from "react";
import MainPage from "./pages/main-page/MainPage";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeProvider from "./providers/ThemeProvider";

import "./styles/general.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
]);

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
