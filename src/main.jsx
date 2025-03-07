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
import TravelPost from './Components/TravelPost.jsx';

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
    element: <FindFriend></FindFriend>,
    loader:()=> fetch("http://localhost:5000/travelPostDetails")
  },
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
    element: <TravelPost></TravelPost>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
