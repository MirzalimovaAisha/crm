import styled from "styled-components";
import homeBackground from "../../assets/homepage-background.png";

// Home
export const HomeContainer = styled.div`
    background-image: url(${homeBackground});
    background-color: #2C2669;
    position: absolute;
    top: 0px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    height: 100vh; 
    width: 100vw; 
    background-position: 10% 88%;
    flex-direction: column;
    color: white;
    h1 {
        font-size: 50px;
    }
`;

export const RequestDemo = styled.button`
    width: 196px;
    height: 52px;
    background: white;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    margin-top: 30px;
`;

export const HomeFooterContainer = styled.div`
    padding: 0px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    position: absolute;
    bottom: 0;
    /* gap: 20px; */
    p{
        margin: 20px 0;
    }
`;

export const HomeLine = styled.div`
    width: 100%;
    height: 2px;
    background: #fff;
`;

// Navbar
export const NavbarContainer = styled.div`
    width: 100vw;
    height: 70px;
    background: white;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 45px;
    top: 0;
    z-index: 100;
`;

export const NavbarLeft = styled.p`
    color: black;
    font-size: 30px;
    font-weight: 700;
`;

export const NavbarRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const NavbarRightButton = styled.button`
    width: ${(props) => (props.$eng ? "88px" : "120px")};
    height: 40px;
    cursor: pointer;
    gap: 4px;
    border-radius: 4px;
    border: ${(props) =>
        props.$eng ? "1px solid var(--600, #2C2669)" : "none"};
    background: ${(props) =>
        props.$eng
            ? "none"
            : "var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669)"};
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Demo
export const DemoContainer = styled.div`
    background-color: #efeef8;
    padding-top: 35px;
    padding-bottom: 50px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    gap: 60px;
`;

export const DemoLeftContainer = styled.div`
    width: 563px;
    height: 850px;
    border-radius: 20px;
    background: var(--Color-7, #fff);
    padding: 30px 40px;
    p {
        color: var(--600, #2c2669);
        font-family: "Public Sans";
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        text-align: center;
        margin-bottom: 30px;
    }
`;

export const DemoLabels = styled.label`
    color: var(--500, #6053b9);
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
`;

export const DemoInputs = styled.input`
    height: 58px;
    border-radius: 8px;
    border: 1px solid var(--200, #cfcbea);
    background: var(--100, var(--100, #efeef8));
    width: 100%;
    padding: 0 15px;
    font-size: 18px;
    &::placeholder {
        font-size: 18px;
        color: var(--200, #cfcbea);
    }
    &:focus {
        outline-style: groove;
    }
`;

export const SendButton = styled.button`
    border-radius: 6px;
    background: var(
        --600,
        linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
        #2c2669
    );
    height: 44px;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    font-size: 18px;
`;

export const DemoLeftLine = styled.div`
    width: 100%;
    height: 1px;
    background: #6053b9;
    margin-top: 20px;
`;

export const DemoRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    h1 {
        color: var(--600, #2c2669);
        font-family: "Public Sans";
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
    }
    p {
        color: var(--500, #6053b9);
        font-family: "Public Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        width: 532px;
        margin-top: 30px;
    }
`;

export const DemoRightLine = styled.div`
    width: 532px;
    height: 1px;
    background: #6053b9;
    margin-top: 40px;
`;

export const DemoRightContactText = styled.h2`
    color: #2c2669;
    font-family: "Public Sans";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    margin-top: 30px;
    line-height: 30px;
    margin-bottom: 23px;
`;

export const DemoRightBox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const RequestDemoButton = styled.button`
    border-radius: 6px;
    background: var(
        --600,
        linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
        #2c2669
    );
    display: flex;
    width: 226px;
    height: 44px;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: 40px;
    font-size: 18px;
    cursor: pointer;
    border: none;
`;

// Login
export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: 100vh;
    background: #efeef8;
`;

export const LoginLeft = styled.div`
    width: 563px;
    height: 890px;
    border-radius: 20px;
    padding: 40px;
    background: var(--Color-7, #fff);

    h1 {
        color: var(--600, #2c2669);
        font-family: "Public Sans";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
        margin-top: 80px;
    }

    p {
        color: var(--600, #2c2669);
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
    }

    span {
        color: var(--500, #6053b9);
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }

    b {
        color: #6053b9;
        margin-top: -3px;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;

export const LoginLeftLogo = styled.div`
    width: 208px;
    height: 44px;
    border-radius: 36.221px;
    background: var(
        --600,
        linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
        #2c2669
    );
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginLeftButton = styled.button`
    display: flex;
    width: 483px;
    height: 44px;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    border-radius: 6px;
    background: var(
        --600,
        linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
        #2c2669
    );
    cursor: pointer;
    border: none;
`;

export const LoginLeftLine = styled.div`
    width: 100%;
    height: 1px;
    background: #6053b9;
    margin-top: 30px;
`;

export const LoginRight = styled.div`
    display: flex;
    width: 767px;
    overflow: hidden;
`;

export const ForgotPasswordDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    gap: 12px;
    width: 50px;
    cursor: pointer;
`;
