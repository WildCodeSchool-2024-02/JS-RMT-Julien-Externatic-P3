import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

import BackNav from "../../components/backOffice/Navigation/BackNav";
import HeaderBackOffice from "../../components/backOffice/header/HeaderBackOffice";
import "./AdminConsultantLayout.css";

function AdminLayout() {
  const [selectedLink, setSelectedLink] = useState("");
  const connected = true;

  const handleLinkSelect = (linkName) => {
    setSelectedLink(linkName);
  };

  if (connected) {
    return (
      <div className="admin-layout">
        <BackNav onLinkSelect={handleLinkSelect} />
        <div className="header-content">
          <HeaderBackOffice
            selectedLink={selectedLink}
            css="header-title-back"
          />
          <main className="content">
            <Outlet />
          </main>
        </div>
      </div>
    );
  }

  return <Navigate to="/" replace />;
}

export default AdminLayout;
