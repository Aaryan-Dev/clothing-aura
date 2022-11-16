import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './Pages/AllProducts'
import Cart from './Pages/Cart'
import { Dashboard } from './Pages/Dashboard'
import Homepage from './Pages/Homepage'
import MensProduct from './Pages/MensProduct'
import Singleproductpage from './Pages/Singleproductpage'
import Womenpage from './Pages/Womenpage'
import AdminPage from './Pages/AdminPage'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/men' element={<MensProduct />} />
        <Route path='/women' element={<Womenpage />} />
        <Route path='/boys' element={<MensProduct />} />
        <Route path='/girls' element={<Womenpage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/alldata' element={<AllProducts />} />
        <Route path='/alldata/:id' element={<Singleproductpage />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>
    </div>
  )
}
export default Allroutes