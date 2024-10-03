import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

import Contact from './components/Contact.jsx'
import Layout from './Layout.jsx'
import Projects from './components/Project.jsx'
import Skills from './components/Skills.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
      path: 'about',
      element: <About />
    },
    {
      path: 'project',
      element: <Projects />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'skills',
      element: <Skills />
    },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
