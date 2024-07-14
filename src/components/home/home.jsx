import React from "react";
import {
    HomeContainer,
    HomeFooterContainer,
    HomeLine,
    RequestDemo,
} from "./style";
import HomeNavbar from "./homeNavbar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <HomeNavbar />

            <HomeContainer>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        flexDirection: "column",
                    }}
                >
                    <h1>A simple management system</h1>
                    <h1>for education</h1>
                    <Link
                        to={"/request-demo"}
                        style={{ textDecoration: "none" }}
                    >
                        <RequestDemo>Request a demo</RequestDemo>
                    </Link>
                </div>
                <HomeFooterContainer>
                    <HomeLine />
                    <p>© 2024 edumansim.com  All rights reserved</p>
                </HomeFooterContainer>
            </HomeContainer>
        </div>
    );
}

export default Home;
