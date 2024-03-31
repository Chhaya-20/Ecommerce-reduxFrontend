// Navbar.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles.css'

function Navbar() {
  const location = useLocation();
  const [token,settoken] = useState("");
  const t = localStorage.getItem('token');

  
  
  useEffect(()=>{
    settoken(t);
  })


  const logout = ()=>{
    localStorage.removeItem('token');
    alert("Logout Successfully...");
    settoken("");
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/cart' ? 'active' : ''}`}>
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/order' ? 'active' : ''}`}>
              <Link className="nav-link" to="/order">Orders</Link>
            </li>
            {token && (
              <li className={`nav-item ${location.pathname === '/logout' ? 'active' : ''}`}>
                <button onClick={logout} className="nav-link" to="/logout">Logout</button>
              </li>
            )}
            {!token && (
              <>
                <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/signup' ? 'active' : ''}`}>
                  <Link className="nav-link" to="/signup">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// Navbar.js
// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../styles.css';

// function Navbar() {
//   const location = useLocation();
//   const [token, setToken] = useState("");
//   const t = localStorage.getItem('token');

//   useEffect(() => {
//     setToken(t);
//   }, [t]);

//   const logout = () => {
//     localStorage.removeItem('token');
//     alert("Logout Successfully...");
//     setToken("");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary fixed-top"> {/* Added 'fixed-top' class */}
//       <div className="container-fluid">
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
//             <li className={`nav-item ${location.pathname === '/cart' ? 'active' : ''}`}>
//               <Link className="nav-link" to="/cart">Cart</Link>
//             </li>
//             <li className={`nav-item ${location.pathname === '/order' ? 'active' : ''}`}>
//               <Link className="nav-link" to="/order">Orders</Link>
//             </li>
//             {token && (
//               <li className={`nav-item ${location.pathname === '/logout' ? 'active' : ''}`}>
//                 <button onClick={logout} className="nav-link" to="/logout">Logout</button>
//               </li>
//             )}
//             {!token && (
//               <>
//                 <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
//                   <Link className="nav-link" to="/login">Login</Link>
//                 </li>
//                 <li className={`nav-item ${location.pathname === '/signup' ? 'active' : ''}`}>
//                   <Link className="nav-link" to="/signup">Register</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

