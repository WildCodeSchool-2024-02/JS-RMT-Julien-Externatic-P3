import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ProfilDetails from "./pages/ProfilDetails/ProfilDetails";
import UserLayout from "./pages/ProfilDetails/UserLayout";
import Offers from "./pages/Offers/Offers"

import connexion from "./services/connexion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users/",
    element: <UserLayout />,
    children: [
      {
        path: ":id",
        element: <ProfilDetails />,
        loader: async ({ params }) => {
          const response = await connexion.get(`/api/profils/${params.id}`);

          return response.data;
        },
      },
    ],
  },
  {
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
