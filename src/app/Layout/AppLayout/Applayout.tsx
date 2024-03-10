import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <div className="app_layout">
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <header>Footer</header>
    </div>
  );
}

export default Applayout;
