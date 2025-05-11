
import { Outlet, RouterProvider } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
