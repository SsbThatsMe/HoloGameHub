import { useState, useEffect } from 'react'
import './App.css'
import HigherLowerMemberSelect from './pages/GuessingGameMemberSelect';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import HigherLowerPlay from './pages/GuessingGamePlay';
//import ButtonBar from './assets/components/ButtonBar';

const router = createBrowserRouter([
  {path: "/HoloGameHub/", element: <HigherLowerMemberSelect/>},
  {path: "/HoloGameHub/guessing/:member", element: <HigherLowerPlay/>},
  {path: "*", element: <NotFound/>},
]);

function App() {
  const [pageState, setPageState] = useState("memberSelect") //Acceptable values "memberSelect, playing, resultScreen"

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
