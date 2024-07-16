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

                <div>
                    <h1 style={{ marginBottom: "30px" }}>Change Password</h1>
                    <p
                        style={{
                            marginTop: "-30px",
                            opacity: "0.5",
                            color: "black",
                            marginBottom: "30px",
                        }}
                    >
                        Please enter a new password for personal security
                    </p>
                    <DemoLabels htmlFor="email">New password</DemoLabels>
                    <DemoInputs
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter email address"
                        id="Password"
                        style={{
                            margin: "8px 0 30px 0",
                            position: "relative",
                            display: "flex",
                            justifyContent: "end",
                            paddingRight: "60px",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            display: "flex",
                            justifyContent: "end",
                            width: "483px",
                            alignItems: "center",
                            marginTop: "-68px",
                            marginLeft: "-20px",
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

                    <DemoLabels htmlFor="Password">
                        Repeat new password
                    </DemoLabels>
                    <DemoInputs
                        type={showPassword2 ? "text" : "password"}
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        placeholder="Enter email address"
                        id="Password"
                        style={{
                            margin: "8px 0 30px 0",
                            position: "relative",
                            display: "flex",
                            justifyContent: "end",
                            paddingRight: "60px",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            display: "flex",
                            justifyContent: "end",
                            width: "483px",
                            alignItems: "center",
                            marginTop: "-68px",
                            marginLeft: "-20px",
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
