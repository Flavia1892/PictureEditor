import React from "react";
import { Outlet } from "react-router-dom";
import ComponentNavTop from "../Components/ComponentNavTop";
import ComponentNavBottom from "../Components/ComponentNavBottom";
import { Transition } from "react-transition-group";
import { useState } from "react";
import { useEffect } from "react";

function Layout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 100);
  }, []);

  return (
    <div>
      <Transition in={isVisible} timeout={500}>
        {(state) => (
          <div
            style={{
              transition: "opacity 1s ease-in-out",
              opacity: state === "entered" ? 1 : 0,
            }}
          >
            <ComponentNavTop />
          </div>
        )}
      </Transition>

      <Outlet />

      <ComponentNavBottom />
    </div>
  );
}

export default Layout;
