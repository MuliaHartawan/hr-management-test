import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import ManajemenKaryawan from "./pages/ManajemenKaryawan";
import Absensi from "./pages/Absensi";
import Laporan from "./pages/Laporan";

const RouterParent = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <ManajemenKaryawan /> },
        { path: "/login", element: <Login /> },
        { path: "/attendance", element: <Absensi /> },
        { path: "/report", element: <Laporan /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterParent;
