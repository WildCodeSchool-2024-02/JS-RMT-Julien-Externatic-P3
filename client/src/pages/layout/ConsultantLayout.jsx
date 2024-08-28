import { Navigate, Outlet } from "react-router-dom";

import BackNav from "../../components/backOffice/Navigation/BackNav";
import HeaderBackOffice from "../../components/backOffice/header/HeaderBackOffice";

import { useExternatic } from "../../context/ExternaticContext";
import "./AdminConsultantLayout.css";

function ConsultantLayout() {
  const { logedUser } = useExternatic();

  if (logedUser) {
    if (logedUser.role_id !== 1) {
      return (
        <div className="admin-layout">
          <BackNav />
          <div className="header-content">
            <HeaderBackOffice css="header-title-back" />
            <main className="content">
              <Outlet />
            </main>
          </div>
        </div>
      );
    }
  }

  return <Navigate to="/" replace />;
}

export default ConsultantLayout;
