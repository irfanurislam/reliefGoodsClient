import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { store } from "./redux/features/store.ts";
import Login from "./pages/Login.tsx";
import RegisterForm from "./pages/RegisterForm.tsx";
import MainLayout from "./components/layout/MainLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
    ],
  },
  { path: "/login", element: <Login></Login> },
  { path: "/regis", element: <RegisterForm></RegisterForm> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store} children={undefined}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
