import { Navigate, Outlet } from "react-router-dom";

function UserLayout() {
  const connected = true;

  if (connected) {
    return <Outlet />;
  }
  return <Navigate to="/" replace />;
}

export default UserLayout;
