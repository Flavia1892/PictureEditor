import React from "react";
import { Outlet } from "react-router-dom";
import ComponentNavTop from "../Components/ComponentNavTop";
import ComponentNavBottom from "../Components/ComponentNavBottom";

function Layout() {
  return (
    <div>
      <ComponentNavTop />

      <Outlet />

      <ComponentNavBottom />
    </div>
  );
}

export default Layout;
