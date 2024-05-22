import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/layout/Main.tsx";
import "primeflex/primeflex.css";
import Login from "./pages/login/Login.tsx";
import { adminRoutes } from "./routes/adminRoutes.tsx";
import { managerRoutes } from "./routes/managerRoutes.tsx";
import { employeeRoutes } from "./routes/emplyeeRoutes.tsx";

const adminRoute = adminRoutes;

const managerRoute = managerRoutes;

const employeeRoute = employeeRoutes;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        ...adminRoute,
      },
      {
        ...managerRoute,
      },
      {
        ...employeeRoute,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);
