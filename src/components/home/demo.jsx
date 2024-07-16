import React, { useState } from "react";
import HomeNavbar from "./homeNavbar";
import {
    DemoContainer,
    DemoInputs,
    DemoLabels,
    DemoLeftContainer,
    DemoLeftLine,
    DemoRightBox,
    DemoRightContactText,
    DemoRightContainer,
    DemoRightLine,
    LoginButton,
    LoginContainerAnimation,
    RequestDemoButton,
    SendButton,
} from "./style";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import phoneIcon from "../../assets/phone-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import { Link } from "react-router-dom";

function Demo() {
    const [phone, setPhone] = useState("");
    return (
        <div>
            <HomeNavbar />
            <DemoContainer>
                <div
                    style={{
                        display: "flex",
                        gap: "60px",
                        alignItems: "center",
                        // height: "850px",
                    }}
                >
                    <div style={{position:"relative", overflow:"hidden", borderRadius:"20px"}}>
                        <LoginContainerAnimation>
                            <DemoLeftContainer>
                                <p>Fill out an aplication</p>

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "30px",
                                    }}
                                >
                                    <div>
                                        <DemoLabels htmlFor="name">Name</DemoLabels>
                                        <DemoInputs
                                            id="name"
                                            placeholder="Enter name"
                                            type="text"
                                        />
                                    </div>

                                    <div>
                                        <DemoLabels htmlFor="Surname">
                                            Surname
                                        </DemoLabels>
                                        <DemoInputs
                                            id="Surname"
                                            placeholder="Enter surname"
                                            type="text"
                                        />
                                    </div>

                                    <div>
                                        <DemoLabels htmlFor="phone">
                                            Phone number
                                        </DemoLabels>
                                        <PhoneInput
                                            country={"us"}
                                            value={phone}
                                            onChange={(phone) => setPhone(phone)}
                                            inputStyle={{ width: "300px" }}
                                            buttonStyle={{
                                                height: "58px",
                                                borderRadius: "8px 0 0 8px",
                                                background: "#EFEEF8",
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <DemoLabels htmlFor="Email">Email</DemoLabels>
                                        <DemoInputs
                                            id="Email"
                                            placeholder="Enter email"
                                            type="email"
                                        />
                                    </div>

                                    <div>
                                        <DemoLabels htmlFor="company">
                                            Company name
                                        </DemoLabels>
                                        <DemoInputs
                                            id="company"
                                            placeholder="Enter company name"
                                            type="text"
                                        />
                                    </div>

                                    <Link
                                        to={"/profile"}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <SendButton>Send</SendButton>
                                    </Link>

                                    <DemoLeftLine />

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color: "#6053B9",
                                                fontSize: "14px",
                                                marginBottom: "0",
                                            }}
                                        >
                                            Are you already registered?
                                        </p>
                                        <Link to={"/login"}>
                                            <LoginButton><div>Login</div></LoginButton>
                                        </Link>
                                    </div>
                                </div>
                            </DemoLeftContainer>
                        </LoginContainerAnimation>
                    </div>

                    <DemoRightContainer>
                        <h1>Request demo</h1>
                        <p>
                            If you wand to know ore about Options opportunities.
                            fill out the application and enjoy 14 days for free
                        </p>
                        <DemoRightLine />
                        <DemoRightContactText>
                            Contact us if you have any questions
                        </DemoRightContactText>

                        <DemoRightBox>
                            <img src={phoneIcon} alt="" />
                            <p style={{ marginTop: "0" }}>010-1234-9876</p>
                        </DemoRightBox>
                        <DemoRightBox style={{ marginTop: "12px" }}>
                            <img src={mailIcon} alt="" />
                            <p style={{ marginTop: "0" }}>mir31090@gmail.com</p>
                        </DemoRightBox>

                        <RequestDemoButton>Request a demo</RequestDemoButton>
                    </DemoRightContainer>
                </div>
            </DemoContainer>
        </div>
    );
}

export default Demo;
