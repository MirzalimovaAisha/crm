import React from "react";
import {
  BodyButton,
  GThead,
  HeaderButton,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
} from "./style";
import calendar from "../../assets/calendar.svg";
import showAll from "../../assets/showAll.svg";
import { attandance } from "../mock/attandanceData";
import { GroupName } from "../students/style";
import more from "../../assets/More.svg";

const Attandance = () => {
  const data = attandance.maindata;

  return (
    <div style={{marginBottom:"100px"}}>
      <Table>
        <GThead>
          <tr className="head1">
            <HeaderButton>
              <img src={calendar} alt="calendar" />
              <div>September, 2023 </div>
            </HeaderButton>
            <HeaderButton>
              <img src={showAll} alt="show" />
              <div>Show all</div>
            </HeaderButton>
          </tr>
          <tr>
            <Th style={{ width: "36px" }} $paddingNone></Th>
            <Th style={{ width: "278px" }}>FULL NAMES</Th>
            <Th $70 $center $paddingNone>
              MORE
            </Th>
            <Th style={{ opacity: "0.6" }} $70 $center $paddingNone>
              SEP 1
            </Th>
            <Th
              style={{ color: "#6053B9", background: "#EFEEF8" }}
              $70
              $center
              $paddingNone
            >
              SEP 2
            </Th>
            <Th $70 $center $paddingNone>
            SEP 3
            </Th>
            <Th $70 $center $paddingNone>
            SEP 4
            </Th>
            <Th style={{ color: "#B7140A" }} $70 $center $paddingNone>
            SEP 5
            </Th>
            <Th $70 $center $paddingNone>
            SEP 6
            </Th>
            <Th $70 $center $paddingNone>
            SEP 7
            </Th>
            <Th $70 $center $paddingNone>
            SEP 8
            </Th>
            <Th $70 $center $paddingNone>
            SEP 9
            </Th>
            <Th $70 $center $paddingNone>
            SEP 10
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
                    width: "278px",
                  }}
                  $bold
                  $purple
                >
                  <div>{value.group.name}</div>
                  <GroupName $small>{value.group.status}</GroupName>
                </Td>
                <Td $center style={{ width: "70px" }}>
                  <img src={more} alt="more" />
                </Td>
                <Td $paddingNone $center style={{ width: "70px"}}>
                  <BodyButton style={{ background:`${value.group.step1.color}`, border:"none"}}>{value.group.step1.text}</BodyButton>
                </Td>
                <Td $paddingNone $center style={{ width: "70px" }}>
                  <BodyButton $black></BodyButton>
                </Td>
                <Td $paddingNone $center style={{ width: "70px" }}>
                  <BodyButton></BodyButton>
                </Td>
                <Td $paddingNone $center style={{ width: "70px" }}>
                  <BodyButton></BodyButton>
                </Td>
                <Td $bold $paddingNone $center style={{ width: "70px", fontSize:"10px", color:"#B7140A" }}>
                  X
                </Td>
                <Td $paddingNone $center style={{ width: "70px" }}>
                  <BodyButton></BodyButton>
                </Td>
                <Td $paddingNone $center style={{ width: "70px" }}>
                  <BodyButton></BodyButton>
                </Td>
                <Td $paddingNone $center style={{ width: "70px" }}>
                  <BodyButton></BodyButton>
                </Td>
                <Td $paddingNone $center style={{ width: "70px" }}>
                  <BodyButton></BodyButton>
                </Td>
                <Td $paddingNone $center style={{ width: "70px" }}>
                  <BodyButton></BodyButton>
                </Td>
              </Tr>
            </Tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default Attandance;
