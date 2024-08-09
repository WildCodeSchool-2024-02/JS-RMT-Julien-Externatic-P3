import { Navigate, Outlet } from "react-router-dom";

import BackNav from "../../components/backOffice/Navigation/BackNav";

import "./AdminConsultantLayout.css";

function AdminLayout() {
  const connected = true;

  if (connected) {
    return (
      <div className="admin-layout">
        <BackNav />
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }

  return <Navigate to="/" replace />;
}

export default AdminLayout;
