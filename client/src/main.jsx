import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Offers from "./pages/Offers/Offers";
import Offer from "./pages/Offer/Offer";
import BoardCompanies from "./pages/backOffice/Company/BoardCompanies";
import ProfilDetails from "./pages/ProfilDetails/ProfilDetails";
import UserLayout from "./pages/ProfilDetails/UserLayout";
import DetailsCompany from "./pages/backOffice/Company/DetailsCompany";
import AdminLayout from "./pages/backOffice/AdminLayout/AdminLayout";
import ConsultantLayout from "./pages/backOffice/ConsultantLayout/ConsultantLayout";
import Consultant from "./pages/backOffice/Consultant/Consultant";
import BoardOffers from "./pages/backOffice/Offers/BoardOffers";

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
    path: "/consultants/",
    element: <ConsultantLayout />,
    children: [
      {
        path: "offres",
        element: <BoardOffers />,
        loader: async () => {
          const response = await connexion.get(`/api/offers/consultant`);
          return response.data;
        },
      },
    ],
  },
  {
    path: "/admin/",
    element: <AdminLayout />,
    children: [
      {
        path: "entreprises",
        element: <BoardCompanies />,
        loader: async () => {
          const response = await connexion.get("/api/companies");
          return response.data;
        },
      },
      {
        path: "entreprises/:id",
        element: <DetailsCompany />,
        loader: async ({ params }) => {
          const response = await connexion.get(`/api/companies/${params.id}`);
          return response.data;
        },
      },
      {
        path: "consultants",
        element: <Consultant />,
        loader: async () => {
          const response = await connexion.get("/api/users/consultants");
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
  {
    path: "/offres/:id",
    element: <Offer />,
    loader: async ({ params }) => {
      try {
        const offerDetails = await connexion.get(`/api/offers/${params.id}`);
        return offerDetails.data;
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
