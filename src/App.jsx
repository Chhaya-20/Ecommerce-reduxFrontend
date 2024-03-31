
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'
// import Login from '../components/login';
 import Signup from './pages/SignUp';
 import Cart from './pages/Cart'
 import Home from './pages/Home';
 import Navbar  from './pages/Navbar';
 import Order from './pages/Orders'

function App() {
  return (
   
    <Router>
     
      <Routes>
     
      <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/order" element={<Order />} />

        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  );
}

export default App;