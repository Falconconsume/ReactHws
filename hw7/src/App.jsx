import "./App.css";
import Battle from "../../hw6/src/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/components/Home/Home.jsx";
import "@fontsource/roboto/500.css";
import RouteRepository from "./components/route/RouteRepository.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "battle",
        element: <Battle />,
      },
      {
        path: "/repository/:repositoryId",
        element: <RouteRepository />,
      },
      {
        path: "/repository/battle",
        element: <Battle />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
