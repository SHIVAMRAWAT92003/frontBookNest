import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './home/Home'
import Signup from './components/Signup'
import Courses from './courses/Courses'
import Contact from './contact.jsx/Contact'
import About from './About/About'
import { Navigate } from 'react-router-dom'
import Poll from "./components/Poll";
import {Toaster} from "react-hot-toast"
import { useAuth } from './context/AuthProvider'


const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
<div className='dark:bg-slate-900 dark:text-white'>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"></Navigate> } />
  <Route path='/signup' element={<Signup/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/about' element={<About/>} />
  <Route path="/poll" element={<Poll />} />
</Routes>
<Toaster/>
</div>




    </>
  )
}

export default App
