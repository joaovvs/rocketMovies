import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn'
import { Register } from '../pages/Register'

export function AuthRoutes(){
    return( 
       <Routes>
         <Route path="/register" element={<Register />} />
         <Route path="/" element={<SignIn />} />
       </Routes>
    );
 }