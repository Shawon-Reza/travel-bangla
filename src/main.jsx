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
import FindFriend from './Pages/FindFriend.jsx';
import ContactUs from './Components/ContactUs.jsx';
import LoginRegistration from './Components/LoginRegistration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: '/booking',
    element: <Booking></Booking>
  }
  ,
  {
    path: '/findfriends',
    element: <FindFriend></FindFriend>
  },
  {
    path: '/contactus',
    element: <ContactUs></ContactUs>
  },
  {
    path:"/loginregistration",
    element: <LoginRegistration></LoginRegistration>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
