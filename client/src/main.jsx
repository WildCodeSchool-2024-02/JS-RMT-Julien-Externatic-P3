import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Offers from "./pages/frontOffice/Offers/Offers";
import OfferDetails from "./pages/frontOffice/OfferDetails/OfferDetails";
import BoardCompanies from "./pages/backOffice/Company/boardCompanies/BoardCompanies";
import ProfilDetails from "./pages/frontOffice/ProfilDetails/ProfilDetails";
import UserLayout from "./pages/layout/UserLayout";
import DetailsConsultant from "./pages/backOffice/Consultant/detailsConsultant/DetailsConsultant";
import DetailsCompany from "./pages/backOffice/Company/detailsCompany/DetailsCompany";
import AdminLayout from "./pages/layout/AdminLayout";
import BoardConsultant from "./pages/backOffice/Consultant/boardConsultants/BoardConsultants";
import BoardOffers from "./pages/backOffice/Offers/BoardOffers";
import ConsultantLayout from "./pages/layout/ConsultantLayout";
import SignUp from "./pages/frontOffice/SignUP/SignUp";

import connexion from "./services/connexion";
import BoardCandidates from "./pages/backOffice/Candidate/boardCandidates/BoardCandidates";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inscription",
    element: <SignUp />,
  },
  {
    path: "/candidat/",
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
      {
        path: "/consultants/offres/:id",
        element: <OfferDetails />,
        loader: async ({ params }) => {
          try {
            const offerDetails = await connexion.get(
              `/api/offers/${params.id}`
            );
            return offerDetails.data;
          } catch (error) {
            throw new Error(error);
          }
        },
      },
      {
        path: "entreprises",
        element: <BoardCompanies />,
        loader: async () => {
          const response = await connexion.get("/api/companies");
          return response.data;
        },
      },
      {
        path: "candidats",
        element: <BoardCandidates />,
        loader: async () => {
          const res = await connexion.get(
            "/api/profils?type=byConsultant&consultantId=6"
          );
          return res.data;
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
        element: <BoardConsultant />,
        loader: async () => {
          const response = await connexion.get("/api/users/consultants");
          return response.data;
        },
      },
      {
        path: "consultants/:id",
        element: <DetailsConsultant />,
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
    element: <OfferDetails />,
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
