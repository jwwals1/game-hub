import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailPages from "./pages/GameDetailPages";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPages /> },
    ],
  },
]);

export default router;
