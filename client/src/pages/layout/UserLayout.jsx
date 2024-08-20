import { Navigate, Outlet } from "react-router-dom";
import FrontNav from "../../components/frontOffice/Navigation/FrontNav";

function UserLayout() {
  const connected = true;

  if (connected) {
    return (
      <>
        <FrontNav />
        <main>
          <Outlet />
        </main>
      </>
    );
  }
  return <Navigate to="/" replace />;
}

export default UserLayout;
