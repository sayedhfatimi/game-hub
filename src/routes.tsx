import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "/", element: <HomePage /> },
      {
        path: "games/",
        element: <Navigate to="/" />,
      },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
