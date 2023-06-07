/*  eslint-disable*/
import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { BiLogIn  } from 'react-icons/bi';

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);


  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };
       authService
      .signup(requestBody)
      .then((response) => {
        console.log("do i get here", response)
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className=" LoginPage  ">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit} className="login--form  ">
        <label>Email:</label>
        <input type="email"
         name="email" 
         value={email} 
         onChange={handleEmail}
         className="login--input" />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          className="login--input" />

        <label>Name:</label>
        <input type="text" name="name" value={name} 
        onChange={handleName} 
      className="login--input" />

        <button type="submit" className="login--loginButton"> Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p className="login--p">Already have account?
      <Link to={"/login"} className="login--signupLink"> Login <BiLogIn /></Link> </p>
    </div>
     );
}

export default SignupPage;
