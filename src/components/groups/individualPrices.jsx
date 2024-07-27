import React from "react";
import {
  EditIcon,
  GThead,
  HeaderButton,
  IndividualButton,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
} from "./style";
import showAll from "../../assets/showAll.svg";
import { attandance } from "../mock/attandanceData";
import { GroupName } from "../students/style";
import editIcon from "../../assets/edit-pancel.svg"

const IndividualPrices = () => {
  const data = attandance.maindata;
  return (
    <div style={{marginBottom:"100px"}}>
      <Table>
        <GThead>
          <tr className="head1">
            <HeaderButton>
              <img src={showAll} alt="show" />
              <div>Show all</div>
            </HeaderButton>
          </tr>
          <tr>
            <Th $center style={{ width: "36px" }} $paddingNone></Th>
            <Th style={{ width: "348px" }}>FULL NAMES</Th>
            <Th $center style={{ width: "210px" }}>
              PHONE NUMBER
            </Th>
            <Th $center style={{ width: "282px" }}>
              INDIVIDUAL DISCOUNT
            </Th>
            <Th $center style={{ width: "208px" }}>
              COMMENT
            </Th>
          </tr>
        </GThead>

        {data.map((value, index) => {
          return (
            <Tbody>
              <Tr>
                <Td $paddingNone $center style={{ width: "36px" }}>
                  {index + 1}
                </Td>
                <Td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    width: "348px",
                  }}
                  $bold
                  $purple
                >
                  <div>{value.group.name}</div>
                  <GroupName $small>{value.group.status}</GroupName>
                </Td>
                <Td $bold $purple $center style={{ width: "210px" }}>
                  99 436 89 42
                </Td>
                <Td $center style={{ width: "282px" }}>
                  <IndividualButton $pink>100.000</IndividualButton>
                  <div style={{position:"relative"}}>
                    <IndividualButton>+50%</IndividualButton>
                    <EditIcon src={editIcon} alt="edit" />
                  </div>
                </Td>
                <Td $paddingNone $purple $center style={{ width: "208px", fontSize:"13px" }}>
                Because he mastered it well
                </Td>
              </Tr>
            </Tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default IndividualPrices;
