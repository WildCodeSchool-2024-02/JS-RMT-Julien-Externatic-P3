import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import DetailsCompany from "./pages/backOffice/Company/DetailsCompany";
import AdminLayout from "./pages/backOffice/AdminLayout/AdminLayout";
import Offers from "./pages/Offers/Offers"

import connexion from "./services/connexion";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin/",
    element: <AdminLayout />,
    children: [
      {
        path: "entreprises/:id",
        element: <DetailsCompany />,
        loader: async ({ params }) => {
          const response = await connexion.get(`/api/companies/${params.id}`);
          return response.data;
        },
      },
    ],
    path: "/offres",
    element: <Offers />,
    loader: async () => {
      try {
        const offerTable = await connexion.get("/api/offers");
        return offerTable.data;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
