import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Landing from '../Components/Landing';
import { Login } from '../Components/Login';
import BasicExample from '../Components/Navbar';

export const AllRoutes = () => {
  return (
    <div>
     {/* <BasicExample/>
     <Landing/> */}
     <Routes>
        {/* <Route path='/' element={<BasicExample/>} /> */}
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
     </Routes>
    </div>
  )
};
