import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import HomePage from './pages/Home';
import About from './pages/About';

const router = createHashRouter([
  {path:'/' , element:<HomePage/>},
  {path: '/about', element: <About/>}
]);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
