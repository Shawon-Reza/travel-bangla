import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

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

import Admin from './Layout/Admin.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivetRoute from './PrivetRoute/PrivetRoute.jsx';
import AdminControl from './Layout/AdminControl.jsx';
import AdminTravelPostForm from './Components/AdminTravelPostForm.jsx';
import AdminSideTravelPostDisplay from './Components/AdminSideTravelPostDisplay.jsx';
import Review from './Components/Review.jsx';
import AdminTravelPostDetails from './Components/AdminTravelPostDetails.jsx';
import UserProfile from './UserProfile/UserProfile.jsx';
import UnderConstraction from './Components/UnderConstraction.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import UserOwnPostDisplay from './UserProfile/UserOwnPostDisplay.jsx';

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
    element: <Booking />,
    loader: () => fetch('http://localhost:5000/admin/travelposts').catch(error => console.log('Error on Fetching Booking details',error))
  }

  ,
  {
    path: "/admin",
    element: <Admin></Admin>
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
    element: <PrivetRoute> <TravelPost></TravelPost></PrivetRoute>
  },
  {
    path: "/travelpostdetails/:_id",
    element: <AdminTravelPostDetails></AdminTravelPostDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000/travelpostdetails/${params._id}`)

  },
  {
    path: '/userProfile',
    element: <PrivetRoute><UserProfile></UserProfile></PrivetRoute>,
    children: [
      {
        path: '',
        element: <UserOwnPostDisplay></UserOwnPostDisplay>
      },
      {
        path: 'post2',
        element: <UnderConstraction></UnderConstraction>
      },
      {
        path: 'post3',
        element: <UnderConstraction></UnderConstraction>
      }
    ]
  },

  {
    path: "/admincontrol",
    element: <AdminControl></AdminControl>,
    children: [
      {
        path: '',
        element: <AdminTravelPostForm></AdminTravelPostForm>
      },
      {
        path: 'adminsidetravelpost',
        element: <AdminSideTravelPostDisplay></AdminSideTravelPostDisplay>,
        loader: () => fetch('http://localhost:5000/admin/travelposts')

      },
      {
        path: "reviews",
        element: <Review></Review>,
        loader: () => fetch('http://localhost:5000/admin/reviews')
      },
    ]
  },
  {
    path: '*',
    element: <UnderConstraction></UnderConstraction>
  }





]);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>

    </AuthProvider>
  </StrictMode>,
)
