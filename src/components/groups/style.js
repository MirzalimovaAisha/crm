import styled from 'styled-components';

export const GroupsContainer = styled.div`
    padding-top: 40px;
    border-radius: 8px;
    background: #EFEEF8;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 256px;
`;

export const FiltersContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    padding: 10px 0;
    border-radius: 8px;
    /* width: 100%; */
`;

export const FilterSelect = styled.select`
    background-color: #FFFFFF;
    border: none;
    height: 44px;
    border-radius: 6px;
    padding: 14px 12px;
    margin-right: 10px;
    cursor: pointer;

    color: #6053B9;
    font-family: "Public Sans";
    font-size: 14px;
    width: ${(props)=> props.$student ? "150px" : "170px"};
    
    &:hover {
        background-color: #E0E0EB;
    }
    `;

export const ResetButton = styled.button`
    background-color: #FFFFFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    color: #A098D5;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    
    width: ${(props)=> props.$student ? "150px" : "170px"};
    display: flex;
    align-items: center;
    justify-content: center;
    gap:8px;

    &:hover {
        background-color: #E0E0EB;
    }
`;

export const AddGroupButton = styled.button`
    background-color: #2C2669;
    border: none;
    border-radius: 5px;
    padding: 14px 40px;
    height: 44px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #FFF;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; 
    gap: 8px;
`;

export const Table = styled.table`
    width: 1084px;
    background: #fff;
    overflow: hidden;
    border-radius: 16px;
    padding: -10px;
    font-family:"Public Sans" ;
    border-collapse: collapse;
    box-shadow: 0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
`;

export const Thead = styled.thead`
    box-shadow: 0px -1px 0px 0px #EDF2F7 inset;
    font-weight: bold;
    height: 52px;
    display: flex;
    align-items: center;
    background: #FAFAFB;
    user-select: none;
`;

export const Tr = styled.tr`
    display: flex;
    &:hover {
        background: ${(props) => props.$hoverNone ? "none" : "#938b8b14"};
        cursor: ${(props) => props.$hoverNone ? "default" : "pointer"};
    }
`;

export const Th = styled.th`
    text-align: left;
    color: #A098D5;
    font-family: "Public Sans";
    height: 100%;
    font-size: 12px;
    font-weight: 600;
    /* padding: ${(props)=> props.$big ? "0px 30px" : "0px 20px"}; */
    padding: 0px 20px;
    display: flex;
    justify-content: ${(props)=> props.$center? "center" : "left"};
    width: 44px;
`;

export const Td = styled.td`
    justify-content: ${(props)=> props.$center ? "center" : "left"};
    /* width: 170px; */
    height: 80px;
    padding: 0px 20px;
    border-top: 1px solid #EDF2F7;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
`;

export const NumberTd = styled.td`
    display: flex;
    align-items: center;
    /* padding: 0px 30px 0 15px; */
    padding: 19px;
    text-align: left;
    border-top: 1px solid #EDF2F7;

    color: #2C2669;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
`;

export const CircleIcon = styled.div`
    width: 32px;
    height: 32px;
    background-color: #6200EA;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-right: 10px; */
    font-weight: bold;
`;

export const PageSelect = styled.select`
    margin: 20px;
    padding: 10px 20px;
    border-radius: 6px;
    border: 1px solid #2C2669;
    cursor: pointer;
    background: transparent;

    color: #6053B9;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; 

    &:hover {
        background-color: #E0E0EB;
    }
`;
