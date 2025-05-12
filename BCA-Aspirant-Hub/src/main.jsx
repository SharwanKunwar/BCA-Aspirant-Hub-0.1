import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  // Correct import from 'react-router-dom'
import './index.css';
import App from './App.jsx';
import MainPage from './Home/MainPage.jsx';
import Notes from './Home/Notes.jsx';
import Semister from './Home/Semister.jsx';
import Intro from './Components/Intro.jsx';
import Projects from './Home/Projects.jsx';
import Blogs from './Home/Blogs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'/',
        element:<Intro/>
      },
      {
        path: 'home',  // Relative path, no leading /
        element: <MainPage />
      },
      {
        path: 'notes',  // Relative path, no leading /
        element: <Notes />
      },
      {
        path: 'semister',  // Relative path, no leading /
        element: <Semister />
      },
      {
        path: 'projects',
        element: <Projects/>
      },
      {
        path: 'blogs',
        element: <Blogs/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
