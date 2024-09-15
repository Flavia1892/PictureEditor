import "./App.css";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import NotFound from "./Pages/NotFound";
import AboutUs from "./Pages/AboutUs";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="homepage" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="aboutus" element={<AboutUs />} />
    </Route>
  )
);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
