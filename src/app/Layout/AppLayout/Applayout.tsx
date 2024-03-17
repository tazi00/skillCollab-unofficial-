import { Outlet } from "react-router-dom";
import { Footer, Header } from "./Components";

function Applayout() {
  return (
    <div className="app_layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Applayout;
