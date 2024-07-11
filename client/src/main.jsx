import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import connexion from "./services/connexion";
import ProfilDetails from "./pages/ProfilDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profils/:id",
    element: <ProfilDetails />,
    loader: async ({ params }) => {
      const response = await connexion.get(`/api/profils/${params.id}`);

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
