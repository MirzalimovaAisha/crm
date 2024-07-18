import React from "react";
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

export default function GroupsPage() {
    const [open, setOpen] = React.useState(false);
    const data = groupData.maindata;

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
                    <div style={{ display: "flex" }}>
                        <FilterSelect>
                            <option>Group status</option>
                        </FilterSelect>
                        <FilterSelect>
                            <option>Teachers</option>
                        </FilterSelect>
                        <FilterSelect>
                            <option>Courses</option>
                        </FilterSelect>
                        <ResetButton>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                            >
                                <path
                                    d="M6.99992 1.66683C5.16754 1.66683 3.54997 2.591 2.58954 4.00016H4.33325V5.3335H0.333252V1.3335H1.66659V2.99974C2.88246 1.38127 4.81835 0.333496 6.99992 0.333496C10.6818 0.333496 13.6666 3.31826 13.6666 7.00016H12.3333C12.3333 4.05464 9.94545 1.66683 6.99992 1.66683ZM1.66659 7.00016C1.66659 9.9457 4.0544 12.3335 6.99992 12.3335C8.83232 12.3335 10.4499 11.4093 11.4103 10.0002H9.66658V8.66683H13.6666V12.6668H12.3333V11.0006C11.1174 12.619 9.18152 13.6668 6.99992 13.6668C3.31802 13.6668 0.333252 10.682 0.333252 7.00016H1.66659Z"
                                    fill="#A098D5"
                                />
                            </svg>
                            <p>Reset Filter</p>
                        </ResetButton>
                    </div>
                    <AddGroupButton onClick={() => setOpen(true)}>
                        <img src={plus} alt="" width={"16px"} />
                        Add new group
                    </AddGroupButton>
                </FiltersContainer>

                <Table>
                    <Thead>
                        <Tr>
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
                            const fullName = value.group.name;
                            const initials = fullName
                                .split(" ")
                                .map((name) => name.charAt(0))
                                .join("");
                            return (
                                <Link to={`/group/${value.id}`}>
                                    <Tr key={index}>
                                        <NumberTd>{index + 1}</NumberTd>
                                        <Td style={{ width: "257px" }} $bold>
                                            <CircleIcon>
                                                {value.group.fullName}
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
                                                {value.group.time.from} -{" "}
                                                {value.group.time.to}
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
