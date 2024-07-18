import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
    DemoInputs,
    DemoLabels,
    LoginContainer,
    LoginLeft,
    LoginLeftLogo,
    LoginRight,
    SendButton,
} from "./style";

import loginImage from "../../assets/login-image.png";
import earthIcon from "../../assets/earth-icon.svg";
import { Link } from "react-router-dom";
import { ModalInput, ModalInputContainer, ModalLabel } from "../teachers/style";

function ChangePassword() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [password2, setPassword2] = useState("");
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    return (
        <LoginContainer>
            <LoginLeft>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
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
                    <div>
                        <h1>Change Password</h1>
                        <p
                            style={{
                                opacity: "0.5",
                                color: "black",
                            }}
                        >
                            Please enter a new password for personal security
                        </p>
                    </div>

                    <ModalInputContainer>
                        <ModalLabel htmlFor="email">New password</ModalLabel>
                        <ModalInput
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter new password"
                            id="Password"
                            style={{
                                position: "relative",
                                display: "flex",
                                justifyContent: "end",
                                padding: "0px 50px 0px 16px" 
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                display: "flex",
                                justifyContent: "end",
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


                    <ModalInputContainer>
                        <ModalLabel htmlFor="Password">
                            Repeat new password
                        </ModalLabel>
                        <ModalInput
                            type={showPassword2 ? "text" : "password"}
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            placeholder="Repeat new password"
                            id="Password"
                            style={{
                                position: "relative",
                                display: "flex",
                                justifyContent: "end",
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
                            {showPassword2 ? (
                                <FaEyeSlash
                                    style={{
                                        transform: "scale(1.5)",
                                        cursor: "pointer",
                                    }}
                                    onClick={togglePasswordVisibility2}
                                />
                            ) : (
                                <FaEye
                                    style={{
                                        transform: "scale(1.5)",
                                        cursor: "pointer",
                                    }}
                                    onClick={togglePasswordVisibility2}
                                />
                            )}
                        </div>
                    </ModalInputContainer>

                    <Link to={"/"}>
                        <SendButton>Next</SendButton>
                    </Link>
                </div>
            </LoginLeft>

            <LoginRight>
                <img src={loginImage} alt="" style={{ borderRadius: "20px" }} />
            </LoginRight>
        </LoginContainer>
    );
}

export default ChangePassword;
