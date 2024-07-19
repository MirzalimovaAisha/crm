import styled from "styled-components";

// Teachers Page
export const TeachersPageContainer = styled.div`
    /* width: 100%; */
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    margin-left: 256px;
    gap: 50px;
`;

export const TeachersPageContainerTop = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SearchTeachers = styled.input`
    width: 320px;
    padding: 12px 12px 12px 30px;
    border: 1px solid #bfbae3;
    background: #fff;
    border-radius: 10px;

    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #bfbae3;
    }
`;

export const SearchIcon = styled.img`
    position: absolute;
    left: 7px;
    width: 20px;
    height: 20px;
`;

export const AddTeacherButton = styled.button`
    border-radius: 6px;
    background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 100%
        ),
        #2c2669;
    padding: 14px 38px;
    border: none;
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
`;

export const TeacherPhoto = styled.div`
    width: 40px;
    height: 40px;
    background: #a098d5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #2c2669;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
`;

export const Table = styled.table`
    width: 900px;
    background: #fff;
    /* border-top-right-radius: 20px;
    border-top-left-radius: 20px; */
    overflow: hidden;
    user-select: none;
    border-collapse: collapse;
    border-radius: 16px 16px 0px 0px;
    box-shadow: 0px 0px 1px 0px rgba(12, 26, 75, 0.24),
        0px 3px 8px -1px rgba(50, 50, 71, 0.05);
`;

export const THead = styled.thead`
    display: flex;
    background: #fafafb;
    justify-content: space-around;
    box-shadow: 0px -1px 0px 0px #edf2f7 inset;
`;

export const Tr = styled.tr`
    height: 70px;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 40px;
    border-top: 0.1px solid #edecf3;

    

    &:hover {
        background: #938b8b14;
        cursor: pointer;
    }
`;

export const TrHead = styled.tr`
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 30px;
`;

export const Td = styled.td`
    color: #6053b9;
    width: 150px;
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const TeacherTd = styled.td`
    width: ${(props) => (props.$big ? "286px" : "170px")};
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => (props.$number ? "#6053B9" : "#A098D5")};
    font-size: ${(props) => (props.$number ? "14px" : "12px")};

    font-family: "Public Sans";
    font-weight: 600;
    line-height: 14px;
`;

export const FullNameTd = styled.td`
    display: flex;
    gap: 20px;
    align-items: center;
    width: 420px;

    color: #2c2669;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
`;

// Teacher Profile Page
export const TeacherProfileTabList = styled.div`
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
`;

export const TeacherProfileTabListBtn = styled.div`
    width: 187px;
    height: 44px;
    display: flex;
    /* padding: 14px 67px 14px 72px; */
    justify-content: center;
    align-items: center;
    border-top: 2px solid #2c2669;
    border-bottom: 2px solid #2c2669;
    border-left: 2px solid #2c2669;

    border-top-left-radius: ${(props) => (props.$first ? "7px" : "none")};
    border-bottom-left-radius: ${(props) => (props.$first ? "7px" : "none")};
    border-top-right-radius: ${(props) => (props.$second ? "7px" : "none")};
    border-bottom-right-radius: ${(props) => (props.$second ? "7px" : "none")};

    border-right: ${(props) => (props.$last ? "2px solid #2C2669" : "none")};
    cursor: pointer;
    background-color: ${(props) =>
        props.selected ? "#2C2669" : "transparent"}; 

    color: ${(props) => (props.selected ? "#fff" : "#2C2669")};
    font-size: 14px;
    font-weight: 500;
`;

export const TeacherProfilePageContainer = styled.div`
    width: 1093px;
    display: flex;
    flex-direction: column;
    /* padding: 130px 50px 20px 300px; */
    margin-top: 40px;
    background: #efeef8;
    margin-left: 256px;
    gap: 50px;
`;

export const TeacherProfileCard = styled.div`
    width: 340px;
    height: 376px;
    padding: 5px;
    border-radius: 26px;
    border: 1px solid #cfcbea;
    background: #fff;
    box-shadow: 2px 2px 4px 0px rgba(174, 191, 237, 0.25);
`;

export const TeacherProfileCardTop = styled.div`
    position: relative;
    width: 328px;
    height: 106px;
    border-radius: 20px;
    background: #bfbae3;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 20px;
`;

export const TeacherProfileCardTopIcon = styled.div`

    color: #6053b9;
    font-family: "Public Sans";
    font-size: 14px;
    font-weight: 700;
`;

export const TeacherProfileCardImg = styled.img`
    position: absolute;
    top: 40px;
    left: 20px;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    border: 4px solid #fff;
`;

export const TeacherProfileCardImgName = styled.div`
    position: absolute;
    top: 40px;
    left: 20px;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    border: 4px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #a098d5;

    color: #2c2669;
    font-family: "Public Sans";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
`;

export const TeacherProfileCardName = styled.div`
    margin-top: 40px;
    margin-left: 20px;
    color: #2c2669;
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
`;

export const TeacherProfileCardCenter = styled.div`
    margin: 10px 0 20px 20px;
    display: flex;
    gap: 8px;
`;

export const TeacherProfileCardCenterBox = styled.div`
    display: flex;
    padding: 3px 10px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    background: #b7b2dd;

    color: #efeef8;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
`;

export const TeacherProfileCardBottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin: 10px 0;

    color: #a098d5;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;

export const TeacherProfileCardBottomText = styled.div`
    color: #2c2669;
    text-align: right;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
`;

// Groups
export const GroupsContainer = styled.div`
    /* width: 50%; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
`;

export const GroupsCard = styled.div`
    width: 522px;
    border-radius: 20px;
    background: #fff;
    padding:26px;
`;

export const GroupProfile = styled.div`
    width: 70px;
    height: 70px;
    border: 1px solid #2c2669;
    background: #ddd9f3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    color: #2c2669;
    font-family: "Public Sans";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
`;

export const GroupCardCenter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;

    color: #a098d5;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;

export const GroupName = styled.div`
    margin-top: 10px;
    color: #2c2669;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
`;

export const Course = styled.div`
    color: #6053b9;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
`;

export const StartDate = styled.div`
    color: #6053b9;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`;

export const StudentsBox = styled.div`
    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    background: #efeef8;

    color: #6053b9;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    margin: 44px 0 20px 0;
    background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 100%
        ),
        #2c2669;
`;

export const GroupTime = styled.div`
    color: #2c2669;
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
`;

export const SeeGroupBtn = styled.div`
    display: inline-flex;
    padding: 13px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 100%
        ),
        #2c2669;
    cursor: pointer;

    color: #fff;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;

export const SalaryTr = styled.tr`
    height: 70px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    border-top: 0.1px solid #edecf3;

    &:hover {
        background: #938b8b14;
        cursor: pointer;
    }
`;

export const SalaryTd = styled.td`
    color: #6053b9;
    width: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AddTeacherModalStyle = styled.div`
    width: 650px;
    background: #ffffff70;
    /* box-shadow: 0px 3px 5px 0px #231e54; */
    /* overflow: hidden; */
    animation: rotateShadow 4s infinite linear;

    @keyframes rotateShadow {
        0% {
            box-shadow: 0px 5px 5px 0px #231e544a;
        }
        25% {
            box-shadow: -5px 5px 5px 0px #231e544a;
        }
        50% {
            box-shadow: -5px -5px 5px 0px #231e544a;
        }
        75% {
            box-shadow: 5px -5px 5px 0px #231e544a;
        }
        100% {
            box-shadow: 0px 5px 5px 0px #231e544a;
        }
    }
`;

export const AddTeacherModalTop = styled.div`
    position: relative;
    height: 40px;
    background: #efeef8;
    display: flex;
    justify-content: end;
`;

export const AddTeacherModalBottom = styled.div`
    width: 100%;
    padding: 40px 60px 50px;
    gap: 30px ;
    display: flex;
    flex-direction: column;
`;

export const AddNewTeacher = styled.div`
    color: #2c2669;
    font-family: "Public Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
`;

export const ModalInputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 6px;

    &.phone:hover{
        background: none;
    }
`;

export const ModalLabel = styled.label`
    color: #6053b9;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
`;

export const UploadPhoto = styled.input`
    position: absolute;
    bottom: 0;
    height: 58px;
    width: 100%;
    cursor: pointer;
    opacity: 0;
`;

export const ModalInput = styled.input`
    display: flex;
    height: 58px;
    padding: 8px 16px;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #cfcbea;
    background: #efeef8;
    width: 100%;
    font-size: 18px;

    &.input-with-icon {
        background-image: url("data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2224%22%20height=%2224%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%3E%3Cpath%20d=%22M2.9918%2021C2.44405%2021%202%2020.5551%202%2020.0066V3.9934C2%203.44476%202.45531%203%202.9918%203H21.0082C21.556%203%2022%203.44495%2022%203.9934V20.0066C22%2020.5552%2021.5447%2021%2021.0082%2021H2.9918ZM20%2015V5H4V19L14%209L20%2015ZM20%2017.8284L14%2011.8284L6.82843%2019H20V17.8284ZM8%2011C6.89543%2011%206%2010.1046%206%209C6%207.89543%206.89543%207%208%207C9.10457%207%2010%207.89543%2010%209C10%2010.1046%209.10457%2011%208%2011Z%22%20fill=%22%23BFBAE3%22/%3E%3C/svg%3E");
        background-repeat: no-repeat; /* 이미지 반복 안 함 */
        background-position: 16px center; /* 이미지를 왼쪽에서 10px 떨어진 위치에 가운데 정렬 */
        padding-left: 50px;
    }
    
    &.date-icon{
        background-image: url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2224%22%20height=%2224%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%3E%3Cpath%20d=%22M9%201V3H15V1H17V3H21C21.5523%203%2022%203.44772%2022%204V20C22%2020.5523%2021.5523%2021%2021%2021H3C2.44772%2021%202%2020.5523%202%2020V4C2%203.44772%202.44772%203%203%203H7V1H9ZM20%2011H4V19H20V11ZM7%205H4V9H20V5H17V7H15V5H9V7H7V5Z%22%20fill=%22%232C2669%22/%3E%3Cpath%20d=%22M9%201V3H15V1H17V3H21C21.5523%203%2022%203.44772%2022%204V20C22%2020.5523%2021.5523%2021%2021%2021H3C2.44772%2021%202%2020.5523%202%2020V4C2%203.44772%202.44772%203%203%203H7V1H9ZM20%2011H4V19H20V11ZM7%205H4V9H20V5H17V7H15V5H9V7H7V5Z%22%20fill=%22black%22%20fill-opacity=%220.2%22/%3E%3C/svg%3E');
        padding-left: 50px;
        background-repeat: no-repeat; 
        background-position: 16px center; 
        font-size: 18px;
    }

    &::placeholder {
        font-family: "Public Sans";
        font-size: 18px;
        color: var(--200, #cfcbea);
    }

    &:focus {
        outline: none;
    }
`;

export const CustomDateButton = styled.button`
    height: 58px;
    padding: 8px 16px;
    width: ${(props)=> props.$group ? "250px" : "100%" };
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;
    background: #EFEEF8;
    font-family: "Public Sans";
    font-size: 18px;
    font-weight: 400;
    color: #2C2669;
    border-radius: 8px;
    border: 1px solid var(--200, #CFCBEA);
`

export const AddModalInput = styled.input`
    background: #efeef8;
    width: 100%;
    height: 58px;
    padding: 0px 16px;
`;

export const SelectInput = styled.select`
    height: 58px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--200, #cfcbea);
    background: var(--100, #efeef8);
    padding: 8px 16px;
    color: var(--600, #2c2669);
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    cursor: pointer;

    &:focus {
        outline-style: groove;
        outline: none;
    }
`;

export const SmsTemplateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    margin-top: 9px;
`;

export const SmsTemplateBox = styled.button`
    display: flex;
    width: 100%;
    height: 58px;
    padding: 8px 16px;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--200, #cfcbea);
    color: var(--600, #2c2669);
    background: none;
    cursor: pointer;

    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;

    &:hover {
        background: #cfcbea;
    }
`;
