import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layout/HomeLayout.jsx';
import Booking from './Pages/Booking.jsx';
import ContactUs from './Components/ContactUs.jsx';
import LoginRegistration from './Components/LoginRegistration';
import TravelPost from './Components/TravelPost.jsx';
import ConnectWithOthers from './Layout/ConnectWithOthers.jsx';
import { path } from 'framer-motion/client';
import { element } from 'three/tsl';
import Admin from './Layout/Admin.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivetRoute from './PrivetRoute/PrivetRoute.jsx';
import AdminControl from './Layout/AdminControl.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/connectWithOthers",
    element: <ConnectWithOthers></ConnectWithOthers>

  },
  {
    path: '/booking',
    element: <Booking></Booking>,
    // children: {
    //   path:'/',
    //   element: 
    // }
  },
  {
    path: "/admin",
    element: <Admin></Admin>
  }
  ,

  {
    path: '/contactus',
    element: <ContactUs></ContactUs>
  },
  {
    path: "/loginregistration",
    element: <LoginRegistration></LoginRegistration>
  },
  {
    path: "/travelPost",
    element: <PrivetRoute> <TravelPost></TravelPost></PrivetRoute>
  },
  {
    path: "/admincontrol",
    element: <AdminControl></AdminControl>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
