import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import About from './Pages/About'
import Profile from './Pages/Profile'
import SignUp from './Pages/SignUp'
import Header from './Components/Header'
import PrivateRoute from './Components/privateRoute'
import CreateListing from './Pages/CreateListing'



export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/about' element={<About />} />
      <Route element={<PrivateRoute />}>
      <Route path='/profile' element={<Profile />} />
      <Route path='/create-listing' element={<CreateListing />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
