// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getuser } from '../reducers/UserSlice';
// import { useNavigate, Link } from 'react-router-dom';
// import '../styles.css'

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(false); // Add loading state
//  let loginStatus = useSelector((state) => state.User.status);

//   // const login = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true); 
//   //   const result = dispatch(getuser({ email, password }));
//   //  console.log(loginStatus);
//   //   if(loginStatus=='idle')
//   //   {
//   //     navigate("/")
//   //   }
//   //   else{
//   //     setLoading(false);
//   //     alert("Login failed")
//   //   }
  

//   // };



//   // const login = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true); 
//   //   console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnn");
//   //   dispatch(getuser({ email, password }));
//   //   console.log("ttttttttttttttttttttt")
//   //   // try {
//   //   //   // Dispatch the action and wait for it to be fulfilled
//   //   //   await dispatch(getuser({ email, password }));
  
//   //   //   // Once the action is fulfilled, check the login status
      
//   //   //   console.log(loginStatus); // This should show 'idle' if login is successful
  
//   //   //   if (loginStatus === 'idle') {
//   //   //     navigate("/");
//   //   //   } else {
//   //   //     setLoading(false);
//   //   //     alert("Login failed");
//   //   //   }
//   //   // } catch (error) {
//   //   //   console.error("Error:", error);
//   //   //   setLoading(false);
//   //   //   alert("An error occurred while logging in.");
//   //   // }
//   // };
//   const login = async (e) => {
//     e.preventDefault();
//     setLoading(true); 
  
//     // Dispatch the action and wait for it to be fulfilled
//     dispatch(getuser({ email, password }))
//       .then(() => {
//         let loginStatus = useSelector((state) => state.User.status);
//         console.log("ttttttttttttttttttt")
//         // Once the action is fulfilled, check the login status
//         console.log(loginStatus); // This should show 'idle' if login is successful
  
//         if (loginStatus === 'idle') {
//           navigate("/");
//         } else {
//           setLoading(false);
//           alert("Login failed");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         setLoading(false);
//         alert("An error occurred while logging in.");
//       });
//   };
  

//   return (
//     <>
//       {loading ? (
//         <div
//           className="flex flex-col justify-center items-center m-0 p-0"
//           style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}
//         >
//           <img
//             style={{ height: "10vh" }}
//             src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
//             alt=""
//           />
//           <p>Loading....</p>
//         </div>
//       ) : (
//         <div className="upper">
//           <div className="forms content">
//             <form method="POST">
//               <h1 className='text-center mb-5'>Login To Account</h1>
//               <div className="mb-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                 <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                 <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
//               </div>
//               <div className="mb-3 form-check" style={{ 'padding': 0 }}>
//                 <Link to="/forget">Forgot Password ? </Link>
//               </div>
//               <button onClick={login} type="submit" className="btn btn-primary" style={{ width: "100%" }}>Login</button>
//               <div className="mt-3 form-check" style={{ 'padding': 0 }}>
//                 Don't have an account ?<Link to="/signup"> Create Account </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { getuser } from '../reducers/UserSlice';
// import { useDispatch } from 'react-redux';
// import { useNavigate, Link } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false); 
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const login = async (e) => {
//     e.preventDefault();
//     setLoading(true); 

//     try {
//       // Dispatch the action and wait for it to be fulfilled
//       await dispatch(getuser({ email, password }));
      
//       // Navigate to the home page if login is successful
//       navigate("/");
//     } catch (error) {
//       console.error("Error:", error);
//       setLoading(false);
//       alert("An error occurred while logging in.");
//     }
//   };

//   return (
//     <div className="upper">
//       <div className="forms content">
//         <form method="POST">
//           <h1 className='text-center mb-5'>Login To Account</h1>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
//           </div>
//           <button onClick={login} type="submit" className="btn btn-primary" style={{width:"100%"}}>Login</button>
//           <div className="mt-3 form-check" style={{'padding':0}}>
//             Don't have an account ?<Link to="/signup"> Create Account </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState, useEffect } from 'react';
import { getuser } from '../reducers/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import '../styles.css'
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.User.status);

  useEffect(() => {
    if (loginStatus === 'idle') {
      navigate("/");
    } else if (loginStatus === 'error') {
      setLoading(false);
      alert("Login failed");
    }
  }, [loginStatus, navigate]);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      // Dispatch the action and wait for it to be fulfilled
      await dispatch(getuser({ email, password }));
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className="upper">
      <div className="forms content">
        <form method="POST">
          <h1 className='text-center mb-5'>Login To Account</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <button onClick={login} type="submit" className="btn btn-primary" style={{width:"100%"}}>Login</button>
          <div className="mt-3 form-check" style={{'padding':0}}>
            Don't have an account ?<Link to="/signup"> Create Account </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

