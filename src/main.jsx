import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Equipe from "./pages/Equipe.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        index: true, 
        element: <Home />, 
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "equipe",
        element: <Equipe />,
      },
      {
        path: "contact",
        element: <Contact />, 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
