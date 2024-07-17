import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx';
import Skills from './components/Skills.jsx';
import MyWorks from './components/MyWorks.jsx';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Hero /> },
      { path: 'contact', element: <Contact /> },
      { path: 'skills', element: <Skills /> },
      { path: 'projects', element: <MyWorks /> },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);