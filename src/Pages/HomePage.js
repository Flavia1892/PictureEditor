import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Suspense } from "react";
import { lazy } from "react";
import { Transition } from "react-transition-group";

const ContainerHomePage = lazy(() =>
  delayForLoad(import("../Components/ContainerHomePage"))
);

let theme = localStorage.getItem("theme");

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 1700);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Transition in={isVisible} timeout={800}>
          {(state) => (
            <div
              style={{
                transition: "opacity 1s ease-in-out",
                opacity: state === "entered" ? 1 : 0,
              }}
            >
              <ContainerHomePage />
            </div>
          )}
        </Transition>
      </Suspense>
    </>
  );
}

function Loading() {
  return (
    <div>
      <div class="flex justify-center items-center pt-3 pb-4 h-screen">
        <Spinner
          animation="border"
          variant={theme}
          style={{ width: "200px", height: "200px", background: theme }}
        />
      </div>
    </div>
  );
}

function delayForLoad(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1700);
  }).then(() => promise);
}
