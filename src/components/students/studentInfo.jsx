import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StudentGroups from "./studentGroups";
import Comment from "./comment";
import Sms from "./sms";
import History from "./history";
import {
  TeacherProfilePageContainer,
  TeacherProfileTabList,
  TeacherProfileTabListBtn,
} from "../teachers/style";
import StudentProfile from "./studentProfile";
import { studentData } from "../mock/studentData";
import { TablistButton } from "../students/style";
import plus from "../../assets/plus-icon.svg";
import { groupData } from "../mock/groupData";
import { SendSmsModal } from "./sendSmsModal";
import { CreateCommentModal } from "./createCommentModal";

function StudentInfo() {
  const { id } = useParams();
  const resultData = studentData.maindata.find(
    (value) => value.id === parseInt(id)
  );
  const [openCreateCommentModal, setCreateCommentModal] = React.useState(false);
  const [openSendSmsModal, setOpenSendSmsModal] = React.useState(false);

  const handleCloseCommentModal = (event) => {
    event.stopPropagation();
    setCreateCommentModal(false);
  };

  const handleCloseSmsModal = (event) => {
    event.stopPropagation();
    setOpenSendSmsModal(false);
  };

  const data = groupData.maindata;
  const [pages, setPages] = useState("Groups");

  const renderContent = () => {
    if (pages === "Groups") {
      return <StudentGroups data={data} />;
    } else if (pages === "Comment") {
      return <Comment data={data} />;
    } else if (pages === "SMS") {
      return <Sms data={data} />;
    } else if (pages === "History") {
      return <History data={resultData} />;
    } else {
      return null;
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TeacherProfilePageContainer>
        <StudentProfile data={resultData} />

        <div style={{ display: "flex", justifyContent:"space-between" }}>
          <TeacherProfileTabList>
            <TeacherProfileTabListBtn
              $first
              onClick={() => setPages("Groups")}
              selected={pages === "Groups"}
            >
              Groups
            </TeacherProfileTabListBtn>

            <TeacherProfileTabListBtn
              onClick={() => setPages("Comment")}
              selected={pages === "Comment"}
            >
              Comment
            </TeacherProfileTabListBtn>

            <TeacherProfileTabListBtn
              onClick={() => setPages("SMS")}
              selected={pages === "SMS"}
            >
              SMS
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
}

export default StudentInfo;
