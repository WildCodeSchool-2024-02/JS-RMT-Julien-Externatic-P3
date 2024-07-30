import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import connexion from "./services/connexion";
import App from "./App";
import DetailsCompany from "./pages/backOffice/Company/DetailsCompany";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin/entreprises/:id",
    element: <DetailsCompany />,
    loader: async ({ params }) => {
      const response = await connexion.get(`/api/companies/${params.id}`);
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
