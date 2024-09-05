import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ExternaticProvider } from "./context/ExternaticContext";

import connexion from "./services/connexion";
import App from "./App";
import SignUp from "./pages/frontOffice/SignUP/SignUp";
import Login from "./pages/frontOffice/Login/Login";
import Home from "./pages/frontOffice/Home/Home";

import ProfilDetails from "./pages/frontOffice/ProfilDetails/ProfilDetails";

import Offers from "./pages/frontOffice/Offers/Offers";
import OfferDetails from "./pages/frontOffice/OfferDetails/OfferDetails";

import Favories from "./pages/frontOffice/Favories/Favories";
import Candidacies from "./pages/frontOffice/Candidacies/Candidacies";

import UserLayout from "./pages/layout/UserLayout";
import ConsultantLayout from "./pages/layout/ConsultantLayout";
import AdminLayout from "./pages/layout/AdminLayout";

import BoardCompanies from "./pages/backOffice/Company/boardCompanies/BoardCompanies";
import DetailsCompany from "./pages/backOffice/Company/detailsCompany/DetailsCompany";

import BoardConsultant from "./pages/backOffice/Consultant/boardConsultants/BoardConsultants";
import DetailsConsultant from "./pages/backOffice/Consultant/detailsConsultant/DetailsConsultant";

import BoardOffers from "./pages/backOffice/Offers/BoardOffers/BoardOffers";
import BoardCandidates from "./pages/backOffice/Candidate/boardCandidates/BoardCandidates";
import DetailsCandidate from "./pages/backOffice/Candidate/detailsCandidate/DetailsCandidate";

import NotFound from "./pages/error404/notFound404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: async () => {
          try {
            const [consultantRes, offersRes] = await Promise.all([
              connexion.get("/api/users?role_id=2&&data=front"),
              connexion.get("/api/offers?type=HomeCarrousel"),
            ]);
            return [consultantRes.data, offersRes.data];
          } catch (error) {
            throw new Error(error);
          }
        },
      },
      {
        path: "/offres",
        element: <Offers />,
      },
      {
        path: "/offres/:id",
        element: <OfferDetails />,
        loader: async ({ params }) => {
          try {
            const offerDetails = await connexion.get(
              `/api/offers/${params.id}`
            );
            return { oneOffer: offerDetails.data };
          } catch (error) {
            throw new Error(error);
          }
        },
      },
      {
        path: "/inscription",
        element: <SignUp />,
      },
      {
        path: "/connexion",
        element: <Login />,
      },
    ],
  },
  {
    path: "/candidat/",
    element: <UserLayout />,
    children: [
      {
        path: ":id",
        element: <ProfilDetails />,
        loader: async ({ params }) => {
          const response = await connexion.get(
            `/api/profils/${params.id}?type=mine`
          );
          return response.data;
        },
      },
      {
        path: ":id/favoris",
        element: <Favories />,
        loader: async ({ params }) => {
          const response = await connexion.get(
            `/api/users/${params.id}/favories`
          );
          return response.data;
        },
      },
      {
        path: ":id/candidatures",
        element: <Candidacies />,
        loader: async ({ params }) => {
          const response = await connexion.get(
            `/api/users/${params.id}/candidacies`
          );
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
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const searchTerm = url.searchParams.get("filter");
          const filter = searchTerm ? `&filter=${searchTerm}` : "";
          const response = await connexion.get(
            `/api/offers?type=ByConsultant&consultant=7${filter}`
          );
          return response.data;
        },
      },
      {
        path: "offres/:id",
        element: <OfferDetails />,
        loader: async ({ params }) => {
          try {
            const offerDetails = await connexion.get(
              `/api/offers/${params.id}`
            );
            const candidacy = await connexion.get(
              `/api/offers/${params.id}/candidacies`
            );
            return { oneOffer: offerDetails.data, candidacies: candidacy.data };
          } catch (error) {
            throw new Error(error);
          }
        },
      },
      {
        path: "entreprises",
        element: <BoardCompanies />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const searchTerm = url.searchParams.get("filter");
          const filter = searchTerm ? `&filter=${searchTerm}` : "";
          const response = await connexion.get(
            `/api/companies?type=consultant${filter}`
          );
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
        path: "candidats",
        element: <BoardCandidates />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const searchTerm = url.searchParams.get("filter");
          const filter = searchTerm ? `&filter=${searchTerm}` : "";
          const response = await connexion.get(
            `/api/profils?type=byConsultant&consultantId=6${filter}`
          );
          return response.data;
        },
      },
      {
        path: "candidats/:id",
        element: <DetailsCandidate />,
        loader: async ({ params }) => {
          const candidat = await connexion.get(`/api/profils/${params.id}`);
          const candidacies = await connexion.get(
            `api/candidacy/users/${params.id}/candidacies`
          );
          return {oneProfil: candidat.data, candidacies: candidacies.data};
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
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const searchTerm = url.searchParams.get("filter");
          const filter = searchTerm ? `?filter=${searchTerm}` : "";
          const response = await connexion.get(`/api/companies${filter}`);
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
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const searchTerm = url.searchParams.get("filter");
          const filter = searchTerm ? `&filter=${searchTerm}` : "";
          const response = await connexion.get(
            `/api/users?role_id=2&data=back${filter}`
          );
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
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ExternaticProvider>
      <RouterProvider router={router} />
    </ExternaticProvider>
  </React.StrictMode>
);
