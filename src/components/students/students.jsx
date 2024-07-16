import React, { useState } from "react";
import {
    CheckboxContainer,
    CheckboxLabel,
    DropdownButton,
    DropdownContent,
    GroupBox,
    GroupName,
    HiddenCheckbox,
    PlusIcon,
    SearchIcon,
    SearchInput,
    StudentName,
    StyledCheckbox,
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
import moreImg from "../../assets/studentsMore.png";
import smsIcon from "../../assets/sms-icon.svg";
import resetIcon from "../../assets/reset-icon.svg";
import plusIcon from "../../assets/black-plus.png";
import plus from "../../assets/plus-icon.svg";
import search from "../../assets/search-icon.svg";
import { AddNewStudentModal } from "./addNewStudentModal";
import { Link } from "react-router-dom";

function Students() {
    const data = studentData.maindata;
    const [openModal, setOpenModal] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [selectedPage, setSelectedPage] = useState("25");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleCheckboxChange = (value) => {
        setSelectedPage(value);
    };

    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <GroupsContainer>
                <FiltersContainer>
                    <div
                        style={{
                            width: "213px",
                            padding: "14px 12px",
                            display: "flex",
                            background: "#fff",
                            borderRadius: "8px",
                            marginRight: "10px",
                            gap: "8px",
                            height: "44px",
                        }}
                    >
                        <SearchIcon src={search} />
                        <SearchInput
                            type="text"
                            placeholder="Search teacher..."
                        />
                    </div>

                    <div style={{ display: "flex", marginRight: "10px" }}>
                        <FilterSelect $student>
                            <option>Finance status</option>
                        </FilterSelect>
                        <FilterSelect $student>
                            <option>Teacher</option>
                        </FilterSelect>
                        <FilterSelect $student>
                            <option>Course</option>
                        </FilterSelect>
                        <ResetButton $student>
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
                                <Link
                                    to={`/student/${student.id}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Tr key={index}>
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
                                                <TeacherPhoto>
                                                    {initials}
                                                </TeacherPhoto>
                                            )}
                                            <StudentName>
                                                {student.student.name}
                                            </StudentName>
                                        </Td>
                                        <Td $center style={{ width: "167px" }}>
                                            <TelNumber>
                                                {student.student.tel}
                                            </TelNumber>
                                        </Td>
                                        <Td style={{ width: "200px" }}>
                                            <GroupBox>
                                                {student.student.groupName.map(
                                                    (group, i) => (
                                                        <GroupName key={i}>
                                                            {group}
                                                        </GroupName>
                                                    )
                                                )}
                                            </GroupBox>
                                        </Td>
                                        <Td style={{ width: "170px" }}>
                                            <GroupBox>
                                                {student.student.course.map(
                                                    (course, i) => (
                                                        <TelNumber
                                                            style={{
                                                                marginBottom:
                                                                    "8px",
                                                            }}
                                                            key={i}
                                                        >
                                                            {course}
                                                        </TelNumber>
                                                    )
                                                )}
                                            </GroupBox>
                                        </Td>
                                        <Td style={{ width: "160px" }}>
                                            <TelNumber>
                                                {student.student.teacher}
                                            </TelNumber>
                                        </Td>
                                        <Td>
                                            <img
                                                src={moreImg}
                                                alt="profile img"
                                                style={{
                                                    width: "25px",
                                                    cursor: "pointer",
                                                }}
                                                onClick={handleClick}
                                            />
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    "aria-labelledby":
                                                        "basic-button",
                                                }}
                                                sx={{
                                                    width: "190px",
                                                    justifyContent: "start",
                                                    flexDirection: "row",
                                                }}
                                            >
                                                <MenuItem onClick={handleClose}>
                                                    <img src={smsIcon} alt="" />
                                                    <TeacherProfileCardTopIcon>
                                                        SMS
                                                    </TeacherProfileCardTopIcon>
                                                </MenuItem>
                                                <MenuItem onClick={handleClose}>
                                                    <PlusIcon
                                                        src={plusIcon}
                                                        alt=""
                                                    />
                                                    <TeacherProfileCardTopIcon>
                                                        Add payment
                                                    </TeacherProfileCardTopIcon>
                                                </MenuItem>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                </Link>
                            );
                        })}
                    </tbody>
                </Table>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        width: "100%",
                        marginTop:"20px"
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
