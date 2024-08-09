import { Navigate, Outlet } from "react-router-dom";

import BackNav from "../../components/backOffice/Navigation/BackNav";

import "./AdminConsultantLayout.css";

function ConsultantLayout() {
  const connected = true;

  if (connected) {
    return (
      <div className="consultant-layout">
        <BackNav />
        <main className="content">
          <Outlet />
        </main>
      </div>
    );
  }

  return <Navigate to="/" replace />;
}

export default ConsultantLayout;
