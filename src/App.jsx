import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Root from "./Pages/Root/Root";
import FemalesPage from "./Pages/Females/FemalesPage";
import Males from "./Pages/Males/Males";
import KidsPage from './Pages/Kids/KidsPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "/femalesPage", element: <FemalesPage /> },
        { path: "/malesPage", element: <Males /> },
        { path: "/kidsPage", element: <KidsPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
