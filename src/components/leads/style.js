import styled from "styled-components";

export const LeadsContainer = styled.div`
    /* padding-bottom: 120px; */
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    margin-left: 256px;
`;

export const LeadsNavbar = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 40px;    
    /* width: 850px; */
    height: 44px;
    gap: 14px;
`;

export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    /* width: 128px; */
`;

export const Menu = styled.button`
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(props) => props.$vmenu ? "6px 0 0 6px" : "0 6px 6px 0"};
    border: 1px solid #2C2669;
    min-width: 50%;
    height: 100%;
    cursor: pointer;
    border-right: ${(props) => props.$vmenu ? "none" : ""};
    background: ${(props) => props.active ? '#2C2669' : 'transparent'};
    color: ${(props) => props.active ? 'white' : 'black'};
    &:focus {
        outline: none;
    }
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    /* filter: ${(props) => props.active ? '' : 'invert(1)'}; */
`;

export const SearchStudent = styled.div`
    min-width: 200px;
    height: 100%;
    border-radius: 8px;
    border: 1px solid #BFBAE3;
    background: var(--Color-7, #FFF);
    display: flex;
    align-items: center;
    gap: 4px;
    /* margin: 0 12px; */
    padding: 12px;
    input {
        width: 100%;
        height: 20px;
        border: none;
        color: black !important;
        &:focus {
            /* color: black; */
            color: #BFBAE3 !important;
            outline: none;
        }
    }
`

export const SearchSection = styled.select`
    border-radius: 8px;
    border: 1px solid var(--300, #BFBAE3);
    background: var(--Color-7, #FFF);
    min-width: 200px;
    height: 100%;
    padding: 12px;
    cursor: pointer;
    color: #BFBAE3;
`

export const SearchSectionOption = styled.option`
    font-size: 14px;
    font-weight: 500;
    color: #BFBAE3;
`

export const ResetFilter = styled.button`
    height: 100%;
    min-width: 125px;
    border-radius: 8px;
    border: 1px solid var(--300, #BFBAE3);
    background: var(--Color-7, #FFF);

    display: flex;
    align-items: center;
    padding: 12px;
    gap: 8px;
    cursor: pointer;

    color: var(--300, #BFBAE3);
    font-family: "Public Sans";
    font-size: 14px;
`

export const AddLead = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 162px;
    height: 100%;
    border-radius: 6px;
    background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
    gap: 8px;
    color: white;
    border: none;
    cursor: pointer;
`

// grid menu
export const GridMenuWrapper = styled.div`
    display: flex;
    gap: 20px;
`

export const FromWhereBox = styled.div`
    width: 387px;
    border-radius: 16px;
    background: var(--Color-7, #FFF);
    padding: 20px;
    height: 662px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding-bottom: 100px;

    &::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none; 
`

export const BoxTitle = styled.h1`
    color: var(--600, #2C2669);
    font-family: "Public Sans";
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
`

export const BoxAddButton = styled.button`
    width: 100%;
    min-height: 44px;
    border-radius: 6px;
    border: 1px solid var(--600, #2C2669);

    display: flex;
    justify-content: center;
    align-items: center;

    background: none;
    cursor: pointer;
    margin: 20px 0;

    &:hover {
        background: #2C2669;
        img {
            filter: invert(1);
        }
    }
`

export const SectionBox = styled.div`
    width: 100%;
    height: 64px;
    border-radius: 6px;
    border: 1px solid var(--300, #BFBAE3);

    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        cursor: pointer;
    }
`

export const SectionBoxLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
        color: var(--600, #2C2669);
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
    }

    span {
        color: var(--500, #6053B9);
        font-family: "Public Sans";
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; 
    }
`

export const NumberBox = styled.div`
    display: flex;
    padding: 4px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: var(--100, #EFEEF8);

    color: var(--400, #A098D5);
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 114.286% */
`

export const TitleNumberWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const MoreIconWrapper = styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    right: 12px;
    top: 23px;
    cursor: pointer;
    z-index: 10;
`

export const SectionUser = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 6px;
    background: var(--100, #EFEEF8);
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SectionUserLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    span {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #2C2669;

        color: var(--Color-7, #FFF);
        font-family: "Public Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
    }
`

export const SectionUserLeftInfo = styled.div`
    display: flex;
    flex-direction: column;

    small {
        color: var(--400, #A098D5);
        font-family: "Public Sans";
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
    }
`

export const SectionUserRight = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    img {
        cursor: pointer;
    }
`

// Vmenu
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 16px 16px 0px 0px;
  overflow: hidden;
  box-shadow: 0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
`;

export const TableHeader = styled.th`
  border-top-left-radius: ${(props)=> props.$leftBorderRadius ? `16px` : ``};
  background-color: #FAFAFB;
  height: 52px;
  text-align: left;
  text-align: ${(props)=> props.$textCenterTH ? `center`: ``};

  color: var(--400, #a098d5);
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
`;

export const TableTr = styled.tr`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
  &:hover {
    background: #938b8b14;
    cursor: pointer;
  }
`;

export const TdLeds = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 15px 0px;
  height: 70px;
  text-align: ${(props)=> props.$TextCenter ? `center`: ``};

  color: var(--600, #2c2669);
  color: ${(props) => (props.$Color2nd ? `#6053B9` : ``)};
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  font-weight: ${(props) => (props.$Color2nd ? `500` : ``)};
  line-height: 16px;
`;

export const TableNumber = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-width: ${(props) => (props.$minWidth12px ? `12px` : ``)};
`;

export const TablePhoneNumber = styled.td`
  color: var(--500, #6053b9);
  display: flex;
  align-items: center;
  justify-content: ${(props)=> props.$justifyCenter ? `center`: ``};
  text-align: ${(props)=> props.$TextCenter2 ? `center`: ``};

  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; 
`;

export const TableDiv = styled.td`
  display: flex;
  align-items: center;
  gap: 12px;
`;     

export const TableAvatarLetter = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 100px;
  background: var(--400, #a098d5);
`;