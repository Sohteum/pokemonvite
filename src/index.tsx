// import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import LoginPage from './components/LoginPage';
import "./css/style.css";
import "./css/login.css";
import "./css/modal.css";
import CompHeader from './components/CompHeader';
import {
  RecoilRoot,
  
} from 'recoil'
import PokeList from './components/PokeList';
const url = 'sdf';//...?
// const setModalOpen = 'sdf';//...?
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [{
      path: ":Details",
      element: <App />
    }]
  },
  {
    path: "/header",
    element: <CompHeader />
  },
  {
    path: "/PokeList",
    element: <PokeList url={url} />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  // {
  //   path: "/Details",
  //   element: <PokeDetails />
  // }

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
 <RecoilRoot>
    <RouterProvider router={router} />
 </RecoilRoot>
);


// .  {
//   path: "/",
//   element: <App />, 
//   children: [{
//     path: ":Details",
//     element: <App />
//   }]
// },
// {
//   path: "/header",
//   element: <CompHeader />
// },
// {
//   path: "/PokeList",
//   element: <PokeList url={url} />
// },
// {
//   path: "/login",
//   element: <LoginPage />
// },
