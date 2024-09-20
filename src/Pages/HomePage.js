import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { Suspense } from "react";
import { lazy } from "react";

const ContainerHomePage = lazy(() =>
  delayForLoad(import("../Components/ContainerHomePage"))
);

let theme = localStorage.getItem("theme");

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ContainerHomePage />
      </Suspense>
    </>
  );
}

function Loading() {
  return (
    <div class="flex justify-center items-center pt-3 pb-4 h-screen">
      <Spinner animation="border" variant={theme} style={{ width: "200px", height: "200px" }} />

    </div>
  );
}

function delayForLoad(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
