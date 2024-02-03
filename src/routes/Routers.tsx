import Home from '../pages/Home';
import Services from  '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup'; 
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import Video from '../pages/Video';
import { Routes, Route } from 'react-router-dom';
import Providers from '../pages/Providers';
import Signinotp from '../pages/Signinotp';
import Signupdoc from '../pages/Signupdoc'
import OTPSignup from '../pages/OTPSignup'
import Otpdoc from '../pages/Otpdoc'
const Routers = () => {
  return (
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/home"  element={<Home />}/>
      <Route path="/doctors"  element={<Doctors />}/>
      <Route path="/doctors/:id"  element={<DoctorDetails/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/register"  element={<Signup />}/>
      <Route path="/contact"  element={<Providers />}/>
      <Route path="/services"  element={<Services />}/>
      <Route path='/video' element={<Video />}/>
      <Route path='/Signinotp' element={<Signinotp/>}/>
      <Route path='/Signupdoc' element={<Signupdoc/>}/>
      <Route path='/normalregotp' element={<OTPSignup/>}/>
      <Route path='docregotp' element={<Otpdoc/>}/>
    </Routes>
  )
}

export default Routers