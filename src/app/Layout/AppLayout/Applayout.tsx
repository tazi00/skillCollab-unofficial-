import { Outlet } from "react-router-dom";
import { Footer, Header } from "./Components";
import EditProfile from "@/app/Pages/AppPages/Profile/Components/EditProfile";

function Applayout() {
  return (
    <div className="app_layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <EditProfile />
    </div>
  );
}

export default Applayout;
