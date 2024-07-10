import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ForgetPassword from './Pages/ForgetPassword';
import ResetPassword from './Pages/ResetPassword';
import Shortener from './Pages/Shortener';
import Profile from './Pages/Profile';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [token,setToken]=useState("")

  return (
    
    <div>
      <BrowserRouter>
      <div>
        <ToastContainer/>
      </div>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/register' element={<Register/>} />
       <Route path='/login' element={<Login setToken={setToken}/>} />
       <Route path='/forgetpassword' element={<ForgetPassword/>}/>
       <Route path='/resetpassword/:id' element={<ResetPassword/>}/>
       <Route path='/urlshortener' element={<Shortener/>} />
       <Route path='/profile' element={<Profile token={token}/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;