import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { DemoInputs, DemoLabels, LoginContainer, LoginLeft, LoginLeftButton, LoginLeftLine, LoginLeftLogo, LoginRight } from './style'

import loginImage from '../../assets/login-image.png'
import earthIcon from '../../assets/earth-icon.svg'
import { Link } from 'react-router-dom'

function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <LoginContainer>
        <LoginLeft>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <LoginLeftLogo>Logotype</LoginLeftLogo>
                <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                    <img src={earthIcon} alt="" width={"28px"}/>
                    <p style={{color: "#2C2669", fontSize: "16px", marginTop: "0"}}>EN</p>
                </div>
            </div>

            <div>
                <h1 style={{marginBottom: "30px"}}>Sign In</h1>
                <DemoLabels htmlFor='email'>Email</DemoLabels>
                <DemoInputs type='email' placeholder='Enter email address' id='email' style={{margin: "8px 0 30px 0"}}/>

                <DemoLabels htmlFor='Password'>Password</DemoLabels>
                <DemoInputs type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' id='Password' style={{margin: "8px 0 30px 0", position: "relative", display: "flex", justifyContent: "end", paddingRight: "60px"}}/>
                <div style={{position: 'absolute', display: "flex", justifyContent: "end", width: "483px", alignItems: "center", marginTop: "-68px", marginLeft: "-20px"}} >
                  {showPassword ? <FaEyeSlash style={{transform: "scale(1.5)", cursor: "pointer"}} onClick={togglePasswordVisibility}/> : <FaEye style={{transform: "scale(1.5)", cursor: "pointer"}} onClick={togglePasswordVisibility}/>}
                </div>

                <Link to={"/profile"} style={{textDecoration: "none"}}><LoginLeftButton>Next</LoginLeftButton></Link>

                <LoginLeftLine/>

                <div style={{display: "flex", alignItems: 'center', marginTop: "30px", justifyContent: "space-between"}}>
                  <p>Don’t have an account? | <Link to={"/request-demo"} style={{textDecoration: "none"}}><span>Fill out an aplication</span></Link></p>
                  <Link to={"/login/forgot-password"} style={{textDecoration: "none"}}><b>Forgot Password?</b></Link>
                </div>
            </div>
        </LoginLeft>

        <LoginRight>
            <img src={loginImage} alt="" style={{borderRadius: "20px"}}/>
        </LoginRight>
    </LoginContainer>
  )
}

export default Login
