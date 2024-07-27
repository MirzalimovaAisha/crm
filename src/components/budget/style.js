import styled from "styled-components";

export const BudgetData =styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: #fff;
    border-radius: 6px;
    color: #6053B9;
    font-size: 14px;
    font-weight: 500;
`

export const BudgetTopText = styled.p`
    color: ${(props)=> props.$dark ? "#2C2669" : "#6053B9"};
    font-size: ${(props)=> props.$dark ? "34px" : "30px"};
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 13px;
`
export const BudgetTopTextContainer = styled.div`
    display: flex;
    justify-content: ${(props)=> props.$jus ? "space-between" : ""};
    margin: ${(props)=> props.$jus ? "" : "6px 0px 30px"};
    gap: 20px;
    align-items: center;
`

export const CategoryIconButton = styled.button`
    background: white;
    border: ${(props)=> props.$trash ? "1px solid #FF2E00" : "1px solid #2C2669"};
    width: 32px;
    height: 32px;
    border-radius: 6px;
    cursor: pointer;
`