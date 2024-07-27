import React, { useState } from "react";
import {
  GroupsContainer,
  FiltersContainer,
  FilterSelect,
  ResetButton,
  AddGroupButton,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  CircleIcon,
  NumberTd,
  Tbody,
} from "./style";
import { AddNewGroupModal } from "./createNewGroupModal";
import plus from "../../assets/plus-icon.svg";
import { groupData } from "../mock/groupData";
import { Link } from "react-router-dom";
import resetIcon from "../../assets/reset-icon.svg";


import { Option, Select, selectClasses } from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";
import { ResetFilter } from "../leads/style";

function GroupsPage() {
  const [open, setOpen] = React.useState(false);
  const data = groupData.maindata;

  //   reset button
  const [filters, setFilters] = useState({
    status: "",
    teachers: "",
    courses: "",
  });

  const resetFilters = () => {
    setFilters({
      status: "",
      teachers: "",
      courses: "",
    });
  };

  const handleFilterChange = (e, name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <GroupsContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <FiltersContainer>
          <div style={{ display: "flex", gap: "12px" }}>
            <Select
              placeholder="Group status"
              name="status"
              value={filters.status}
              onChange={(e, value) => handleFilterChange(e, "status", value)}
              indicator={<KeyboardArrowDown />}
              sx={{
                width: "170px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "6px",
                height: "44px",
                border: "none",
                background: "#fff",
                color: "#6053B9",
                fontSize: "14px",
                [`& .${selectClasses.indicator}`]: {
                  transition: "0.2s",
                  [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                  },
                },
              }}
            >
              <Option value="elementary">Elementary</Option>
              <Option value="beginner">Beginner</Option>
            </Select>
            <Select
              placeholder="Teachers"
              name="teachers"
              value={filters.teachers}
              onChange={(e, value) => handleFilterChange(e, "teachers", value)}
              indicator={<KeyboardArrowDown />}
              sx={{
                width: "170px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "44px",
                borderRadius: "6px",
                border: "none",
                background: "#fff",
                color: "#6053B9",
                fontSize: "14px",
                [`& .${selectClasses.indicator}`]: {
                  transition: "0.2s",
                  [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                  },
                },
              }}
            >
              <Option value="elementary">Elementary</Option>
              <Option value="Ocean">Ocean</Option>
              <Option value="Winners">Winners</Option>
              <Option value="Socialy">Socialy Team</Option>
              <Option value="Designers">Designers</Option>
            </Select>
            <Select
              placeholder="Courses"
              name="courses"
              value={filters.courses}
              onChange={(e, value) => handleFilterChange(e, "courses", value)}
              indicator={<KeyboardArrowDown />}
              sx={{
                width: "170px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "44px",
                borderRadius: "6px",
                border: "none",
                background: "#fff",
                color: "#6053B9",
                fontSize: "14px",
                [`& .${selectClasses.indicator}`]: {
                  transition: "0.2s",
                  [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                  },
                },
              }}
            >
              <Option value="it">IT Botcamp</Option>
            </Select>

            <ResetButton onClick={resetFilters}>
              <img src={resetIcon} alt="Reset Icon" />
              Reset filter
            </ResetButton>
          </div>
          <AddGroupButton onClick={() => setOpen(true)}>
            <img src={plus} alt="" width={"16px"} />
            Add new group
          </AddGroupButton>
        </FiltersContainer>

        <Table>
          <Thead>
            <Tr $hoverNone $header>
              <Th style={{ width: "44px", padding: "0" }}></Th>
              <Th $big style={{ width: "257px" }}>
                Group name
              </Th>
              <Th style={{ width: "182px" }}>Course</Th>
              <Th style={{ width: "183px" }}>Teacher</Th>
              <Th style={{ width: "152px" }}>Days</Th>
              <Th $center style={{ width: "130px" }}>
                Room
              </Th>
              <Th $center style={{ width: "90px" }}>
                Students
              </Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((value, index) => {
              return (
                <Link to={`/group/${value.id}`}>
                  <Tr key={index}>
                    <NumberTd>{index + 1}</NumberTd>
                    <Td style={{ width: "257px" }} $bold>
                      <CircleIcon>
                        {value.group.photo ? (
                          <img
                            src={value.group.photo}
                            alt="group"
                            style={{
                              width: "100%",
                            }}
                          />
                        ) : (
                          value.group.name[0]
                        )}
                      </CircleIcon>
                      <div>{value.group.name}</div>
                    </Td>
                    <Td style={{ width: "182px" }} $purple>
                      {value.group.course}
                    </Td>
                    <Td style={{ width: "183px" }} $bold>
                      {value.group.teacher}
                    </Td>
                    <Td
                      style={{
                        width: "152px",
                        flexDirection: "column",
                        gap: "4px",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <div>
                        {value.group.time.from} - {value.group.time.to}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: "#A098D5",
                        }}
                      >
                        Mon, Wed, Fri
                      </div>
                    </Td>
                    <Td $center style={{ width: "130px" }}>
                      Room {value.group.room}
                    </Td>
                    <Td $center style={{ width: "90px" }}>
                      {value.group.students}
                    </Td>
                    <Td></Td>
                  </Tr>
                </Link>
              );
            })}
          </Tbody>
        </Table>
        <AddNewGroupModal open={open} setOpen={setOpen} />
      </div>
    </GroupsContainer>
  );
}

export default GroupsPage;
