import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import Layout from './Pages/Layout';

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
      </Route>
  ) );

  export default function App() {
    return <RouterProvider router={router} />;
  }