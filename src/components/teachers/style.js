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
    box-shadow: 0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
`;

export const THead = styled.thead`
    display: flex;
    background: #FAFAFB;
    justify-content: space-around;
    box-shadow: 0px -1px 0px 0px #EDF2F7 inset;
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

    color: ${(props)=> props.$number ? "#6053B9" : "#A098D5"};
    font-size: ${(props)=> props.$number ? "14px" : "12px"};

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
    width: 100%;
    height: 50px;
    display: flex;
    /* background: red; */
`;

export const TeacherProfileTabListBtn = styled.div`
    display: flex;
    width: 187px;
    padding: 14px 67px 14px 72px;
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
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
`;

export const TeacherProfilePageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 130px 50px 20px 300px;
    background: #efeef8;
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
    margin-left: 15px;

    color: #6053b9;
    font-family: "Public Sans";
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
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
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
`;

export const GroupsCard = styled.div`
    width: 522px;
    height: 394px;
    border-radius: 20px;
    background: #fff;
    padding: 30px;
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
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;

export const GroupName = styled.div`
    margin-top: 10px;
    color: #2c2669;
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
`;

export const Course = styled.div`
    color: #6053b9;
    font-family: "Public Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
`;

export const StartDate = styled.div`
    color: #6053b9;
    font-family: "Public Sans";
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
    margin: 50px 0 20px 0;
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
    /* height: 983px; */
`;

export const AddTeacherModalTop = styled.div`
    position: relative;
    width: 650px;
    height: 40px;
    background: #efeef8;
    display: flex;
    justify-content: end;
`;

export const AddTeacherModalBottom = styled.div`
    width: 100%;
    height: 943px;
    background: #fff;
    padding: 50px;
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
    margin: 30px 0;

    input {
        position: absolute;
        background: red;
        top: 30px;
        height: 60px;
        width: 100%;
        cursor: pointer;
        opacity: 0;
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

export const ModalInput = styled.input`
    display: flex;
    height: 58px;
    padding: 8px 149px 8px 16px;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #cfcbea;
    background: #efeef8;

    color: #000;
    font-family: "Public Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;

    &:focus {
        outline-style: groove;
    }
`;

export const AddTeacherBtn = styled.div`
    display: flex;
    width: 100%;
    height: 44px;
    padding: 10px 40px;
    flex-direction: column;
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
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
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
