import { Navigate, Outlet } from "react-router-dom";

import BackNav from "../../components/backOffice/Navigation/BackNav";

import { useExternatic } from "../../context/ExternaticContext";
import "./AdminConsultantLayout.css";

function AdminLayout() {
  const { logedUser } = useExternatic();

  if (logedUser) {
    if (logedUser.role_id === 3) {
      return (
        <div className="admin-layout">
          <BackNav />
          <main className="content">
            <Outlet />
          </main>
        </div>
      );
    }
  }
  return <Navigate to="/" replace />;
}

export default AdminLayout;
