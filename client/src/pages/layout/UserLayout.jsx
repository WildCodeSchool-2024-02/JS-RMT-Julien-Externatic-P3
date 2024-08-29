import { Navigate, Outlet } from "react-router-dom";
import FrontNav from "../../components/frontOffice/Navigation/FrontNav";
import Footer from "../../components/frontOffice/Footer/Footer";
import { useExternatic } from "../../context/ExternaticContext";

function UserLayout() {
  const { logedUser } = useExternatic();

  if (logedUser) {
    if (logedUser.role_id === 1) {
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
  }
  return <Navigate to="/" replace />;
}

export default UserLayout;
