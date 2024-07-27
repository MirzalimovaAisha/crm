import React from "react";
import { Link } from "react-router-dom";
import { teacherData } from "../mock/teacherData";
import {
  AddTeacherButton,
  FullNameTd,
  SearchIcon,
  SearchTeachers,
  Table,
  TeacherPhoto,
  TeachersPageContainer,
  TeachersPageContainerTop,
  TeacherTd,
  THead,
  Tr,
  TrHead,
} from "./style";

import search from "../../assets/search-icon.svg";
import plus from "../../assets/plus-icon.svg";
import { AddTeacherModal } from "./addTeacherModal";

function TeachersPage() {
  const [open, setOpen] = React.useState(false);
  const data = teacherData.maindata;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TeachersPageContainer>
        <TeachersPageContainerTop>
          <SearchTeachers type="text" placeholder="Search teacher..." />
          <SearchIcon src={search} />
          <AddTeacherModal open={open} setOpen={setOpen} />
          <AddTeacherButton onClick={() => setOpen(true)}>
            {" "}
            <img src={plus} alt="" width={"16px"} /> Add teacher
          </AddTeacherButton>
        </TeachersPageContainerTop>

        <Table>
          <THead>
            <TrHead style={{ height: "50px" }}>
              <FullNameTd className="td">Full name</FullNameTd>
              <TeacherTd $big className="td">
                Phone number
              </TeacherTd>
              <TeacherTd className="td">Groups</TeacherTd>
              <TeacherTd className="td">Percent</TeacherTd>
            </TrHead>
          </THead>
          <tbody>
            {data.map((value, key) => {
              const fullName = value.teacher.fullName;
              const initials = fullName
                .split(" ")
                .map((name) => name.charAt(0))
                .join("");
              return (
                <Link to={`/teacher/${value.id}`}>
                  <Tr key={key}>
                    <FullNameTd>
                      {value.teacher.photo ? (
                        <img
                          src={value.teacher.photo}
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
                      <div style={{color:"#2C2669", fontSize:"14px", fontWeight:"700"}}>{value.teacher.fullName}</div>
                    </FullNameTd>
                    <TeacherTd $big $number>
                      {value.teacher.phoneNumber}
                    </TeacherTd>
                    <TeacherTd $number>{value.teacher.groups} group</TeacherTd>
                    <TeacherTd $number>{value.teacher.percent}</TeacherTd>
                  </Tr>
                </Link>
              );
            })}
          </tbody>
        </Table>
      </TeachersPageContainer>
    </div>
  );
}

export default TeachersPage;
