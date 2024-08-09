import { Navigate, Outlet } from "react-router-dom";

import BackNav from "../../components/backOffice/Navigation/BackNav";

import "./AdminConsultantLayout.css";

function AdminLayout() {
  const connected = true;

  if (connected) {
    return (
      <div className="admin-layout">
        <BackNav />
        <main className="content">
          <Outlet />
        </main>
      </div>
    );
  }

  return <Navigate to="/" replace />;
}

export default AdminLayout;
