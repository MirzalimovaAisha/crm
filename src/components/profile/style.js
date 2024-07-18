import styled from "styled-components";

export const ProfileContainer = styled.div`
    background: #EFEEF8;
    margin-top: 40px;
    margin-left: 296px;
`

export const ProfileCard = styled.div`
    width: 340px;
    height: 294px;
    border-radius: 26px;
    border: 1px solid var(--200, #CFCBEA);
    background: var(--Color-7, #FFF);
    box-shadow: 2px 2px 4px 0px rgba(174, 191, 237, 0.25);
    padding: 6px;
`

export const ProfileCardTop = styled.div`
    display: flex;
    width: 100%;
    height: 106px;
    padding-right: 20px;
    justify-content: flex-end;
    align-items: center;
    border-radius: 20px;
    background: var(--300, #BFBAE3);

    position: relative;
`

export const EditProfileButton = styled.button`
    display: flex;
    height: 36px;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 6px;
    background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
    border: none;
    color: white;
    cursor: pointer;
    img {
        width: 12px;
    }
`

export const Avatar = styled.div`
    width: 92px;
    height: 92px;
    background: #FFF;
    border-radius: 50%;
    padding: 5px;
    position: relative;
    top: -60px;
    right: -30px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Username = styled.p`
    color: var(--600, #2C2669);
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; 
    margin-top: -50px;
`

export const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    border-radius: 6px;
    color: white;
    width: 42px;
    background: var(--400, #A098D5);
    margin-top: 6px;
    font-size: 10px;
    line-height: 16px;
`

export const CardSpaceBetween = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    p {
        color: var(--400, #A098D5);
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; 
    }
    
    b {
        color: var(--600, #2C2669);
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
    }
`

