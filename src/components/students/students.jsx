import React, { useState } from "react";
import {
  GroupBox,
  GroupName,
  PlusIcon,
  SearchIcon,
  SearchInput,
  StudentName,
  TelNumber,
} from "./style";
import {
  AddGroupButton,
  FiltersContainer,
  FilterSelect,
  GroupsContainer,
  NumberTd,
  Pagenation,
  PageSelect,
  ResetButton,
  Table,
  Td,
  Th,
  Thead,
  Tr,
} from "../groups/style";
import { studentData } from "../mock/studentData";
import { TeacherPhoto, TeacherProfileCardTopIcon } from "../teachers/style";
import { Menu, MenuItem } from "@mui/material";
import moreIcon from "../../assets/studentMore.svg";
import smsIcon from "../../assets/sms-icon.svg";
import resetIcon from "../../assets/reset-icon.svg";
import plusIcon from "../../assets/black-plus.png";
import plus from "../../assets/plus-icon.svg";
import search from "../../assets/search-icon.svg";
import { AddNewStudentModal } from "./addNewStudentModal";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/search-icon.svg";

import { Option, Select, selectClasses } from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";
import { SearchStudent } from "../leads/style";

function Students() {
  const data = studentData.maindata;
  const [openModal, setOpenModal] = React.useState(false);

  //   const [selectedPage, setSelectedPage] = useState("25");
  //   const [dropdownOpen, setDropdownOpen] = useState(false);

  const [anchorEls, setAnchorEls] = React.useState([]);

  const handleClick = (event, index) => {
    event.stopPropagation();
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = event.currentTarget;
    setAnchorEls(newAnchorEls);
  };

  const handleClose = (index) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = null;
    setAnchorEls(newAnchorEls);
  };

  //   const handleCheckboxChange = (value) => {
  //     setSelectedPage(value);
  //   };

  //   const handleDropdownClick = () => {
  //     setDropdownOpen(!dropdownOpen);
  //   };

  const [filters, setFilters] = useState({
    status: "",
    teachers: "",
    course: "",
    search: "",
  });
  
  const resetFilters = () => {
    setFilters({
      status: "",
      teachers: "",
      course: "",
      search: "",
    });
  };

  const handleFilterChange = (e, name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <GroupsContainer>
        <FiltersContainer>
          <div style={{ display: "flex", gap:"12px", marginRight:"12px"}}>
            <SearchStudent style={{ border: "none", width:"213px" }}>
              <img src={searchIcon} alt="" />
              <input
                type="text"
                placeholder="Search student"
                name="search"
                value={filters.search}
                onChange={(e) =>
                  handleFilterChange(e, "search", e.target.value)
                }
              />
            </SearchStudent>

            <Select
              placeholder="Finance status"
              name="status"
              value={filters.status}
              onChange={(e, value) => handleFilterChange(e, "status", value)}
              indicator={<KeyboardArrowDown />}
              sx={{
                width: "150px",
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
              <Option value="status">Finance status</Option>
            </Select>
            <Select
              placeholder="Teachers"
              name="teachers"
              value={filters.teachers}
              onChange={(e, value) => handleFilterChange(e, "teachers", value)}
              indicator={<KeyboardArrowDown />}
              sx={{
                width: "150px",
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
              placeholder="Course"
              name="course"
              value={filters.course}
              onChange={(e, value) => handleFilterChange(e, "course", value)}
              indicator={<KeyboardArrowDown />}
              sx={{
                width: "150px",
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
              <Option value="course">course</Option>
            </Select>

            <ResetButton $student onClick={resetFilters}>
              <img src={resetIcon} alt="" />
              Reset Filter
            </ResetButton>
          </div>
          <AddGroupButton onClick={() => setOpenModal(true)}>
            <img src={plus} alt="" width={"16px"} />
            Add new group
          </AddGroupButton>
        </FiltersContainer>
        <Table style={{ width: "1080px" }}>
          <Thead>
            <Tr $hoverNone>
              <Th></Th>
              <Th style={{ width: "282px" }}>Full Names</Th>
              <Th $center style={{ width: "167px" }}>
                Phone Number
              </Th>
              <Th style={{ width: "200px" }}>Groups</Th>
              <Th style={{ width: "170px" }}>Courses</Th>
              <Th style={{ width: "160px" }}>Teachers</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <tbody>
            {data.map((student, index) => {
              const profileName = student.student.name;
              const initials = profileName
                .split(" ")
                .map((name) => name.charAt(0))
                .join("");

              return (
                <>
                  <Tr key={index}>
                    <Link
                      to={`/student/${student.id}`}
                      style={{ display: "flex" }}
                    >
                      <NumberTd>{index + 1}</NumberTd>
                      <Td style={{ width: "282px" }}>
                        {student.student.photo ? (
                          <img
                            src={student.student.photo}
                            alt=""
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                            }}
                          />
                        ) : (
                          <TeacherPhoto>{initials}</TeacherPhoto>
                        )}
                        <StudentName>{student.student.name}</StudentName>
                      </Td>
                      <Td $center style={{ width: "167px" }}>
                        <TelNumber>{student.student.tel}</TelNumber>
                      </Td>
                      <Td style={{ width: "200px" }}>
                        <GroupBox>
                          {student.student.groupName.map((group, i) => (
                            <GroupName key={i}>{group}</GroupName>
                          ))}
                        </GroupBox>
                      </Td>
                      <Td style={{ width: "170px" }}>
                        <GroupBox>
                          {student.student.course.map((course, i) => (
                            <TelNumber
                              style={{
                                marginBottom: "8px",
                              }}
                              key={i}
                            >
                              {course}
                            </TelNumber>
                          ))}
                        </GroupBox>
                      </Td>
                      <Td style={{ width: "160px" }}>
                        <TelNumber>{student.student.teacher}</TelNumber>
                      </Td>
                    </Link>
                    <Td>
                      <img
                        src={moreIcon}
                        alt="profile img"
                        style={{
                          width: "25px",
                          cursor: "pointer",
                        }}
                        onClick={(event) => handleClick(event, index)}
                      />
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEls[index]}
                        open={Boolean(anchorEls[index])}
                        onClose={() => handleClose(index)}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={() => handleClose(index)}>
                          <img src={smsIcon} alt="" />
                          <TeacherProfileCardTopIcon>
                            SMS
                          </TeacherProfileCardTopIcon>
                        </MenuItem>
                        <MenuItem onClick={() => handleClose(index)}>
                          <PlusIcon src={plusIcon} alt="" />
                          <TeacherProfileCardTopIcon>
                            Add payment
                          </TeacherProfileCardTopIcon>
                        </MenuItem>
                      </Menu>
                    </Td>
                  </Tr>
                </>
              );
            })}
          </tbody>
        </Table>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <PageSelect>
            <option>
              20 per page
              {/* <DropdownButton onClick={handleDropdownClick}>
                                {selectedPage} per page
                            </DropdownButton> */}
              {/* <DropdownContent isOpen={dropdownOpen}>
                                <CheckboxContainer>
                                    <HiddenCheckbox type="checkbox" />
                                    <StyledCheckbox />
                                    <CheckboxLabel></CheckboxLabel>
                                </CheckboxContainer>
                            </DropdownContent> */}
            </option>
            <option>30 page</option>
            <option>50 page</option>
            <option>60 page</option>
          </PageSelect>

          <Pagenation></Pagenation>
        </div>
        <AddNewStudentModal open={openModal} setOpen={setOpenModal} />
      </GroupsContainer>
    </div>
  );
}

export default Students;
