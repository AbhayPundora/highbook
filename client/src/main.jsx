import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Profile from "./profile/Profile.jsx";
import Collection from "./profile/collection.jsx";
import SignUp from "./authentication/SignUp.jsx";
import Login from "./authentication/Login.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import Update from "./profileUpdatePage/profileUpdatePage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/collection",
    element: <Collection />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/update",
    element: <Update />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
);
