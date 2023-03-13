import { createBrowserRouter } from "react-router-dom";

// Pages
import Inicio from "../pages/Inicio";
import Cartelera from "../pages/Cartelera";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/Cartelera",
    element: <Cartelera />,
  },
]);
