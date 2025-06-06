import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import MainPage from "./Home/MainPage.jsx";
import Notes from "./Home/Notes.jsx";
import Semister from "./Home/Semister.jsx";
import Projects from "./Home/Projects.jsx";
import Blogs from "./Home/Blogs.jsx";
import AnimatedIntro from "./Components/AnimatedIntro.jsx";
import Sem01 from "./SemComponents/Sem01.jsx";
import Sem02 from "./SemComponents/Sem02.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AnimatedIntro />,
      },
      {
        path: "home",
        element: <MainPage />,
      },
      {
        path: "notes",
        element: <Notes />,
        children: [
          {
            path: "sem01",
            element: <Sem01 />,
          },
          {
            path: "sem02",
            element: <Sem02 />,
          }
        ],
      },
      {
        path: "semister",
        element: <Semister />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
