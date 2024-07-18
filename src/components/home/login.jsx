import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
    DemoInputs,
    DemoLabels,
    LoginContainer,
    LoginContainerAnimation,
    LoginLeft,
    LoginLeftLine,
    LoginLeftLogo,
    LoginRight,
    SendButton,
} from "./style";

import loginImage from "../../assets/login-image.png";
import earthIcon from "../../assets/earth-icon.svg";
import { Link } from "react-router-dom";
import { AddNewTeacher, ModalInput, ModalInputContainer, ModalLabel } from "../teachers/style";

function Login() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <LoginContainer>
            <div  style={{position:"relative", overflow:"hidden", borderRadius:"20px"}}>
                <LoginContainerAnimation>
                    <LoginLeft>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <LoginLeftLogo>Logotype</LoginLeftLogo>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                }}
                            >
                                <img src={earthIcon} alt="" width={"28px"} />
                                <p
                                    style={{
                                        color: "#2C2669",
                                        fontSize: "16px",
                                        marginTop: "0",
                                    }}
                                >
                                    EN
                                </p>
                            </div>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", gap:"30px"}}>
                            <h1>Sign In</h1>

                            <ModalInputContainer>
                                <ModalLabel htmlFor="email">Email</ModalLabel>
                                <ModalInput
                                    type="email"
                                    placeholder="Enter email address"
                                    id="email"
                                />
                            </ModalInputContainer>

                            <ModalInputContainer>
                                <ModalLabel htmlFor="Password">Password</ModalLabel>
                                <ModalInput
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    id="Password"
                                    style={{
                                        position: "relative",
                                        padding: "0px 50px 0px 16px"
                                    }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "43px",
                                        right: "20px",
                                    }}
                                >
                                    {showPassword ? (
                                        <FaEyeSlash
                                            style={{
                                                transform: "scale(1.5)",
                                                cursor: "pointer",
                                            }}
                                            onClick={togglePasswordVisibility}
                                        />
                                    ) : (
                                        <FaEye
                                            style={{
                                                transform: "scale(1.5)",
                                                cursor: "pointer",
                                            }}
                                            onClick={togglePasswordVisibility}
                                        />
                                    )}
                                </div>
                            </ModalInputContainer>

                            <Link
                                to={"/profile"}
                                style={{ textDecoration: "none" }}
                            >
                                <SendButton>Next</SendButton>
                            </Link>

                            <LoginLeftLine />

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <p>
                                    Don’t have an account? |{" "}
                                    <Link
                                        to={"/request-demo"}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <span>Fill out an aplication</span>
                                    </Link>
                                </p>
                                <Link
                                    to={"/login/forgot-password"}
                                    style={{ textDecoration: "none" }}
                                >
                                    <b>Forgot Password?</b>
                                </Link>
                            </div>
                        </div>
                    </LoginLeft>
                </LoginContainerAnimation>
            </div>

            <LoginRight>
                <img src={loginImage} alt="" style={{ borderRadius: "20px" }} />
            </LoginRight>
        </LoginContainer>
    );
}

export default Login;
