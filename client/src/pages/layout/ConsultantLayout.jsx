import { Navigate, Outlet } from "react-router-dom";

import BackNav from "../../components/backOffice/Navigation/BackNav";

import { useExternatic } from "../../context/ExternaticContext";
import "./AdminConsultantLayout.css";

function ConsultantLayout() {
  const { logedUser } = useExternatic();

  if (logedUser) {
    if (logedUser.role_id !== 1) {
      return (
        <div className="consultant-layout">
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

export default ConsultantLayout;
