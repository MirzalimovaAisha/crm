import React, { useState } from 'react'
import { LeadsData } from '../mock/leads'
import { Table, TableHeader, TablePhoneNumber, TableAvatarLetter, TableDiv, TableNumber, TableTr, TableData  } from "./style";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import addIcon from '../../assets/add-icon.svg';
import moreIcon from '../../assets/more-icon.svg';
import editicon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import chatIcon from '../../assets/chat-icon.svg'
import SendSmsModal from './sendSmsModal';
import AddToGroupModal from './addToGroupModal';

function VMenu() {
  const data = LeadsData.maindata

  const [open3, setOpen3] = React.useState(false)
  const [open4, setOpen4] = React.useState(false)

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
    handleClose()
    setOpen3(true)
  }
  const openFunction2 = () => {
    handleClose()
    setOpen4(true)
  }
  return (
    <div>
        <Table>
            <thead>
                <tr>
                    <TableHeader></TableHeader>
                    <TableHeader>Lead name</TableHeader>
                    <TableHeader>Phone number</TableHeader>
                    <TableHeader>From where</TableHeader>
                    <TableHeader>Section</TableHeader>
                    <TableHeader></TableHeader>
                </tr>
            </thead>
            <tbody>
                {data.map((value, key)=> {
                    return(
                        <TableTr key={key}>
                          <TableData><TableNumber>{value.id}</TableNumber></TableData>
                          <TableData>
                              <TableDiv>
                                <TableAvatarLetter></TableAvatarLetter> 
                                    {value.leads.name}
                                </TableDiv>
                          </TableData>
                          <TableData><TablePhoneNumber>{value.leads.phoneNumber}</TablePhoneNumber></TableData>
                          <TableData>{value.leads.fromWhere || "---"}</TableData>
                          <TableData>{value.leads.section}</TableData>
                          <TableData><img src={moreIcon} alt="" aria-controls={selectedMenu === 'hi-elementary' ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={selectedMenu === 'hi-elementary' ? 'true' : undefined}
                onClick={(e) => handleClick(e, 'hi-elementary')}/></TableData>

                          <Menu id="hi-menu" anchorEl={anchorEl} open={selectedMenu === 'hi-elementary'} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button' }}>
                            <MenuItem onClick={handleClose}><img src={editicon} alt="" style={{ marginRight: "10px" }} />Edit</MenuItem>
                            <MenuItem onClick={handleClose}><img src={deleteIcon} alt="" style={{ marginRight: "10px" }} />Delete</MenuItem>
                            <MenuItem onClick={openFunction2}><img src={chatIcon} alt="" style={{ marginRight: "5px" }} />Sms</MenuItem>
                            <MenuItem onClick={openFunction1}><img src={addIcon} alt="" style={{ marginRight: "5px" }} />Add to group</MenuItem>
                          </Menu>
                       </TableTr>
                    )
                })}
            </tbody>
        </Table>
        
        <AddToGroupModal open={open3} setOpen={setOpen3}/>
        <SendSmsModal open={open4} setOpen={setOpen4}/>
    </div>
  )
}

export default VMenu
