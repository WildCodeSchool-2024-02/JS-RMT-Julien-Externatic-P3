import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import instance from "./services/connexion";

import App from "./App";
import BoardCompanies from "./pages/backOffice/Company/BoardCompanies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin/entreprises",
    element: <BoardCompanies />,
    loader: async () => {
      const response = await instance.get("/api/companies");

      return response.data;
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
