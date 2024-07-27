import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Course,
  GroupCardCenter,
  GroupName,
  GroupProfile,
  GroupsCard,
  Line,
  StartDate,
  StudentsBox,
  TeacherProfileCardTopIcon,
  TeacherProfilePageContainer,
  TeacherProfileTabList,
  TeacherProfileTabListBtn,
} from "../teachers/style";
import {
  //   GroupName,
  StudentCardTop,
  TablistButton,
} from "../students/style";
import { CreateCommentModal } from "../students/createCommentModal";
import { SendSmsModal } from "../students/sendSmsModal";
import plus from "../../assets/plus-icon.svg";
import { groupData } from "../mock/groupData";
import Attandance from "./attandance";
import IndividualPrices from "./individualPrices";
import GroupHistory from "./Grouphistory";
import { Menu, MenuItem } from "@mui/material";
import { Balance } from "@mui/icons-material";

import moreIcon from "../../assets/moreLength.svg";
import editIcon from "../../assets/edit-icon.svg";
import smsIcon from "../../assets/sms-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";
import { SendButton } from "../home/style";
import addIcon from "../../assets/add-icon2.svg"

const GroupInfoComponent = () => {
  const { id } = useParams();
  const resultData = groupData.maindata.find(
    (value) => value.id === parseInt(id)
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [openCreateCommentModal, setCreateCommentModal] = useState(false);
  const [openSendSmsModal, setOpenSendSmsModal] = useState(false);

  const handleCloseCommentModal = (event) => {
    event.stopPropagation();
    setCreateCommentModal(false);
  };

  const handleCloseSmsModal = (event) => {
    event.stopPropagation();
    setOpenSendSmsModal(false);
  };

  const data = groupData.maindata;
  const [pages, setPages] = useState("Attandance");

  const renderContent = () => {
    if (pages === "Attandance") {
      return <Attandance data={data} />;
    } else if (pages === "Individual prices") {
      return <IndividualPrices data={data} />;
    } else if (pages === "History") {
      return <GroupHistory data={resultData} />;
    } else {
      return null;
    }
  };

  const filterData = data.filter((value) => value.id == id);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TeacherProfilePageContainer>
        {filterData.map((value) => (
          <GroupsCard>
            <StudentCardTop>
            
              <GroupProfile>
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
              </GroupProfile>
              <img
                src={moreIcon}
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
                  "aria-labelledby": "basic-button",
                }}
                sx={{padding:"0px"}}
              >
                <MenuItem onClick={handleClose}>
                  <img src={editIcon} alt="" />
                  <TeacherProfileCardTopIcon>Edit</TeacherProfileCardTopIcon>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img src={smsIcon} alt="" />
                  <TeacherProfileCardTopIcon>SMS</TeacherProfileCardTopIcon>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img src={DeleteIcon} alt="" />
                  <TeacherProfileCardTopIcon>Delete</TeacherProfileCardTopIcon>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img src={addIcon} alt="" />
                  <TeacherProfileCardTopIcon>Add student</TeacherProfileCardTopIcon>
                </MenuItem>
              </Menu>
            </StudentCardTop>

            <GroupCardCenter>
              <GroupName>{value.group.name}</GroupName> Group name
            </GroupCardCenter>
            <GroupCardCenter>
              <Course>{value.group.course}</Course> Course
            </GroupCardCenter>
            <GroupCardCenter>
              <StartDate>{value.group.teacher}</StartDate> Teacher name
            </GroupCardCenter>
            <GroupCardCenter>
              <StartDate>
                {value.group.trainingDate.from} - {value.group.trainingDate.to}
              </StartDate>{" "}
              Training dates
            </GroupCardCenter>
            <GroupCardCenter>
              <div style={{ display: "flex", gap: "10px" }}>
                <StudentsBox>{value.group.students} Students</StudentsBox>
                <StudentsBox>{value.group.room}-room</StudentsBox>
              </div>
                Students & room
            </GroupCardCenter>

            <Line />
            <GroupCardCenter style={{margin:"0px"}}>
              <div>
                <p
                  style={{
                    color: "#2C2669",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginBottom:"2px"
                  }}
                >
                  {value.group.time.from}-{value.group.time.to}
                </p>
                <p>Mon, Tue, Wed, Thu, Fri</p>
              </div>
              <SendButton
                style={{
                  width: "fit-content",
                  fontSize: "14px",
                  padding: "13px",
                }}
              >
                {value.group.balance} won
              </SendButton>
            </GroupCardCenter>
          </GroupsCard>
        ))}

        <div style={{ display: "flex" }}>
          <TeacherProfileTabList>
            <TeacherProfileTabListBtn
              $first
              onClick={() => setPages("Attandance")}
              selected={pages === "Attandance"}
            >
              Attandance
            </TeacherProfileTabListBtn>

            <TeacherProfileTabListBtn
              onClick={() => setPages("Individual prices")}
              selected={pages === "Individual prices"}
            >
              Individual prices
            </TeacherProfileTabListBtn>

            <TeacherProfileTabListBtn
              $second
              $last
              onClick={() => setPages("History")}
              selected={pages === "History"}
            >
              History
            </TeacherProfileTabListBtn>
          </TeacherProfileTabList>

          {pages === "Comment" ? (
            <TablistButton onClick={() => setCreateCommentModal(true)}>
              <img src={plus} alt="" width={"16px"} />
              Leave a new comment
              <CreateCommentModal
                open={openCreateCommentModal}
                setOpen={handleCloseCommentModal}
              />
            </TablistButton>
          ) : pages === "SMS" ? (
            <TablistButton onClick={() => setOpenSendSmsModal(true)}>
              <img src={plus} alt="" width={"16px"} />
              Send a new message
              <SendSmsModal
                open={openSendSmsModal}
                setOpen={handleCloseSmsModal}
              />
            </TablistButton>
          ) : null}
        </div>
        {renderContent()}
      </TeacherProfilePageContainer>
    </div>
  );
};

export default GroupInfoComponent;
