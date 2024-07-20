import React from "react";
import { NumberTd, Table, Td, Th, Thead, Tr } from "../groups/style";
import {
  CommentContent,
  PlusIcon,
  SpaceBetweenContainer,
  TelNumber,
} from "./style";
import { commentData } from "../mock/commentData";
import moreIcon from "../../assets/studentMore.svg";
import { Menu, MenuItem } from "@mui/material";
import { TeacherProfileCardTopIcon } from "../teachers/style";
import editIcon from "../../assets/edit-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";

function Comment() {
  const comments = commentData.maindata;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Table style={{marginBottom:"100px"}}>
      <Thead>
        <Tr $hoverNone>
            <Th></Th>
          <Th style={{ width: "579px"}}>Comment</Th>
          <Th style={{ width: "200px" }}>Creator</Th>
          <Th style={{ width: "200px", justifyContent:"center", display:"flex" }}>Date</Th>
        </Tr>
      </Thead>
      <tbody>
        {comments.map((value, index) => {
          return (
            <Tr key={index}>
              <NumberTd>{index + 1}</NumberTd>
              <Td style={{ width: "579px"}}>
                <CommentContent style={{ color: "#2C2669" }}>
                  {value.comment.comment}
                </CommentContent>
              </Td>
              <Td style={{ width: "200px" }}>
                <TelNumber>{value.comment.creator}</TelNumber>
              </Td>
              <Td style={{ width: "200px" }}>
                <SpaceBetweenContainer>
                  <TelNumber>
                    {value.comment.date} | {value.comment.time}
                  </TelNumber>
                </SpaceBetweenContainer>
              </Td>
              <Td>
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
                  >
                    <MenuItem onClick={handleClose}>
                      <img src={editIcon} alt="" />
                      <TeacherProfileCardTopIcon>
                        Edit
                      </TeacherProfileCardTopIcon>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <PlusIcon src={deleteIcon} alt="" />
                      <TeacherProfileCardTopIcon>
                        Delete
                      </TeacherProfileCardTopIcon>
                    </MenuItem>
                  </Menu>
                  </Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Comment;
