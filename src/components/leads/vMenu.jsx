import React, { useState } from "react";
import { LeadsData } from "../mock/leads";
import {
  Table,
  TableHeader,
  TablePhoneNumber,
  TableAvatarLetter,
  TableDiv,
  TableNumber,
  TableTr,
  TableData,
  TdLeds,
} from "./style";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import addIcon from "../../assets/add-icon.svg";
import moreIcon from "../../assets/moreLength.svg";
import editicon from "../../assets/edit-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";
import chatIcon from "../../assets/chat-icon.svg";
import SendSmsModal from "./sendSmsModal";
import AddToGroupModal from "./addToGroupModal";
import { Tbody, Td, Th, Thead, Tr } from "../groups/style";

function VMenu() {
  const data = LeadsData.maindata;

  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setSelectedMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedMenu(null);
  };

  const openFunction1 = () => {
    handleClose();
    setOpen3(true);
  };

  const openFunction2 = () => {
    handleClose();
    setOpen4(true);
  };

  return (
    <div>
      <Table>
        <Thead>
          <Tr $hoverNone>
            <Th></Th>
            <Th style={{ width: "361px" }}>Lead name</Th>
            <Th style={{ width: "202px" }}>Phone number</Th>
            <Th style={{ width: "233px" }}>From where</Th>
            <Th style={{ width: "183px" }}>Section</Th>
            <Th style={{ width: "61px" }}></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((value, key) => {
            return (
              <TableTr key={key}>
                <Td>
                  <TableNumber>{value.id}</TableNumber>
                </Td>
                <Td $bold style={{ width: "361px" }}>
                  <TableDiv>
                    <TableAvatarLetter>{value.leads.name[0]}</TableAvatarLetter>
                    {value.leads.name}
                  </TableDiv>
                </Td>
                <Td style={{ width: "202px" }}>
                  <TablePhoneNumber>{value.leads.phoneNumber}</TablePhoneNumber>
                </Td>
                <Td $bold style={{ width: "233px" }}>
                  {value.leads.fromWhere || "---"}
                </Td>
                <Td $bold style={{ width: "183px" }}>{value.leads.section}</Td>
                <Td $bold style={{ width: "61px" }}>
                  <img
                    src={moreIcon}
                    alt="More options"
                    aria-controls={
                      selectedMenu === value.id ? "basic-menu" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={
                      selectedMenu === value.id ? "true" : undefined
                    }
                    onClick={(e) => handleClick(e, value.id)}
                  />
                  <Menu
                    id="hi-menu"
                    anchorEl={anchorEl}
                    open={selectedMenu === value.id}
                    onClose={handleClose}
                    MenuListProps={{ "aria-labelledby": "basic-button" }}
                  >
                    <MenuItem onClick={handleClose}>
                      <img src={editicon} alt="Edit" />
                      Edit
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <img src={deleteIcon} alt="Delete" />
                      Delete
                    </MenuItem>
                    <MenuItem onClick={openFunction2}>
                      <img src={chatIcon} alt="Sms" />
                      Sms
                    </MenuItem>
                    <MenuItem onClick={openFunction1}>
                      <img src={addIcon} alt="Add to group" />
                      Add to group
                    </MenuItem>
                  </Menu>
                </Td>
              </TableTr>
            );
          })}
        </Tbody>
      </Table>

      <AddToGroupModal open={open3} setOpen={setOpen3} />
      <SendSmsModal open={open4} setOpen={setOpen4} />
    </div>
  );
}

export default VMenu;
