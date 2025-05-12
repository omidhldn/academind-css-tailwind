import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
