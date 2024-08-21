import { Outlet } from "react-router-dom";

import FrontNav from "./components/frontOffice/Navigation/FrontNav";
import Footer from "./components/frontOffice/Footer/Footer";

import "./App.css";

function App() {
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

export default App;
