import "./App.css";
import Battle from "../../hw6/src/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/components/Home/Home.jsx";
import "@fontsource/roboto/500.css";
import Header from "../src/components/Header";
import RouteRepository from "./components/route/RouteRepository.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="homeBorder">
        <Header />
        <Home />
      </div>
    ),
  },
  {
    path: "battle",
    element: (
      <div className="homeBorder">
        <Header />
        <Battle />
      </div>
    ),
  },
  {
    path: "/repository/:repositoryId",
    element: (
      <div className="homeBorder">
        <Header />
        <RouteRepository />
      </div>
    ),
  },
  {
    path: "/repository/battle",
    element: (
      <div className="homeBorder">
        <Header />
        <Battle />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;  
}

export default App;
