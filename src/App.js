import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import SideNav from './Components/SideNav/SideNav';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Profile from './Page/Profile';

function App() {
  let routes = createBrowserRouter([
    {path:"", element:<Layout/>,children:[
      {index:true ,element: <Home/> },
      {path:"profile/:id", element:<Profile/>}
    ]}
  ])
  return (
    <>
     
     <RouterProvider router={routes} />


    </>
  );
}

export default App;
