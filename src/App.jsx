import Body from "./components/Body";
import { createBrowserRouter } from 'react-router-dom'
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
// import Group from "./components/Group";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { lazy, Suspense } from "react";
const Group= lazy(()=>import("./components/Group"))

const App = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/create-group",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <Group />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default App;