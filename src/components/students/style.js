import styled from "styled-components";

export const GroupBox = styled.div`
`;

export const GroupName = styled.div`
    display: inline-block; 
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: #EFEEF8;

    color: #6053B9;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; 
    margin-bottom: 5px;
    font-size: ${(props)=> props.$small ? "12px" : "14px"};
`;

export const StudentName = styled.div`
    color: #2C2669;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; 
`

export const TelNumber = styled.div`
    color: #6053B9;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
`

export const PlusIcon = styled.img`
    width: 16px;
    height: 16px;
    cursor: pointer;
`

export const SpaceBetweenContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px 0 0;
`

export const SearchIcon = styled.img`
    /* position: absolute;
    left: 7px;
    top: 10px; */
`

export const SearchInput = styled.input`
    width: 100%;
    border-radius: 6px;
    border: none;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    
    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #BFBAE3;
    }
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`;

export const CustomCheckbox = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => (props.checked ? '#6053B9' : '#fff')};
    border: 2px solid #6053B9;
    cursor: pointer;
`;

export const CheckboxContainer = styled.div`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
`;

export const CheckboxLabel = styled.label`
    margin-left: 8px;
    cursor: pointer;
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
    display: none;
`;

export const CustomRadio = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => (props.checked ? '#6053B9' : '#fff')};
    border: 2px solid #6053B9;
    cursor: pointer;
`;

export const RadioContainer = styled.div`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    background-color: blue;
`;

export const RadioLabel = styled.label`
    margin-left: 8px;
    cursor: pointer;
`;

export const DropdownButton = styled.div`
    background: #f4f3ff;
    border: 1px solid #6c63ff;
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    width: 150px;
`;

export const DropdownContent = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    border-radius: 5px;
    width: 150px;
    margin-top: 5px;
`;


export const StyledCheckbox = styled.div`
    width: 16px;
    height: 16px;
    background: ${({ checked }) => (checked ? '#6c63ff' : '#ffffff')};
    border: 1px solid #6c63ff;
    border-radius: 3px;
    transition: all 150ms;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: '${({ checked }) => (checked ? '✓' : '')}';
        color: #ffffff;
        font-size: 12px;
    }
`;


export const GenderOption = styled.label`
    display: flex;
    align-items: center;
    color: var(--400, #A098D5);
    font-size: 14px;
    font-weight: 500;
    gap: 8px;
`;

export const RadioInput = styled.input`
    cursor: pointer;
`;

// Student Profile
export const StudentCardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`

export const Balance = styled.div`
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: #EFEEF8;

    color: #6053B9;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; 
`;

export const AddButton = styled.button`
    padding: 13px 39px 13px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    border: 1px solid #2C2669;
    background: transparent;
    cursor: pointer;

    color: #2C2669;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
`;

export const TablistButton = styled.button`
    width: 300px;
    display: flex;
    padding: 14px 20px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: transparent;
    cursor: pointer;
    border-radius: 6px;
    border: none;
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669;

    color: #FFF;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; 
`;

export const StudentGroupsPage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 100px;
`;

export const CommentContent = styled.div`
    padding: 0 20px 0 0;
    /* background-color: blue; */
    color: #2C2669;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`;

export const HistoryCardTop = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const HistoryGap = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
`

export const HistoryCardData = styled.div`
    color: #2C2669;
    text-align: right;
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
`

export const HistoryCardMyName = styled.div`
    color: #6053B9;
    font-family: "Public Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; 
    margin: 0 0px  20px 0;
`
