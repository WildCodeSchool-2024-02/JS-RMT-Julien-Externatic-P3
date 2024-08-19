import { Outlet } from "react-router-dom";
import FrontNav from "./components/frontOffice/Navigation/FrontNav";
import "./App.css";

function App() {
  return (
    <>
      <FrontNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
