import { Navigate, Outlet } from "react-router-dom";
import FrontNav from "../../components/frontOffice/Navigation/FrontNav";
import Footer from "../../components/frontOffice/Footer/Footer";

function UserLayout() {
  const connected = true;

  if (connected) {
    return (
      <>
        <FrontNav />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
  return <Navigate to="/" replace />;
}

export default UserLayout;
