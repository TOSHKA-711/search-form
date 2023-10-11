// /* eslint-disable jsx-a11y/alt-text */
// import React from "react";
// import "./Login.css";
// import { Outlet, Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';


// function Login() {

//   const navigate = useNavigate();

//   let emailInput = document.getElementById("email");
// let passwordInput = document.getElementById("password");
// let submitButton = document.getElementById("submit-button");
// let userName = "admin";
// let userPassword = "0000";

// const handleSubmit = (e) => {
//   e.preventDefault();

//   console.log(emailInput.value );
//   console.log(passwordInput.value);
//   if (emailInput.value === userName && passwordInput.value === userPassword) {

//     navigate('/dashboard');

//   } else {
//     alert("Invalid username or password");
//   }
// };

// submitButton.addEventListener("click", handleSubmit);

   

//   return (
//     <div className="login">
//       <div className="login-wrap">
//         <h1>Login</h1>
//         <input
//           placeholder="Email"
//           id="email"
//           name="email"
//           type="text"
//         />
//         <input
//           placeholder="Password"
//           id="password"
//           name="password"
//           type="password"
//         />
//         <input  className="btn" type="submit" id="submit"  for="submit-button" onClick={handleSubmit}/>
//         <Link to="/login" id="submit-button"  onClick={handleSubmit}/>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userName = "admin";
  const userPassword = "0000";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === userName && password === userPassword) {
      // Navigate to the dashboard route upon successful login
      navigate('/dashboard');
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login">
      <div className="login-wrap">
        <h1>Login</h1>
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="cssbuttons-io-button login-submit-btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <Link to="/dashboard"></Link>
      </div>
    </div>
  );
}

export default Login;

