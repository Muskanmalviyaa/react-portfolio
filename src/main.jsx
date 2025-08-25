import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Router } from 'react-router-dom';
import './index.css';
import Layout from '../Layout';
import Home from './components/NavbarItems/Home';
import Education from './components/NavbarItems/Education';
import Skill from './components/NavbarItems/Skill';
import Project from './components/NavbarItems/Project';
import Contact from './components/NavbarItems/Contact';

// Router setup
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />  
    <Route path="home" element={<Home />} /> 
    <Route path='education' element={<Education />} />
    <Route path="skill" element={<Skill />} /> 
    <Route path="project" element={<Project />} /> 
    <Route path="contact" element={<Contact />} /> 
   
  </Route>
  )
);
// Rendering the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
