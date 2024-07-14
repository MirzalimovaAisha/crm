import React from 'react'
import { GroupCardCenter, GroupName, GroupProfile, GroupsCard, GroupsContainer, Line, StartDate, TeacherProfileCardTopIcon } from '../teachers/style';
import { AddButton, Balance, StudentCardTop } from './style';
import { Menu, MenuItem } from '@mui/material';

import moreIcon from '../../assets/moreLength.png'
import plus from '../../assets/blue-plus.png';
import editIcon from '../../assets/edit-icon.svg'
import smsIcon from '../../assets/sms-icon.svg'
import DeleteIcon from '../../assets/delete-icon.svg'

function StudentProfile({ data }) {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null)
    }

    const studentName = data.student.name;
    const initials = studentName.split(' ').map(name => name.charAt(0)).join('');

    return (
        <GroupsContainer>
            <GroupsCard style={{height: '480px'}}>

                <StudentCardTop>
                    {data.student.photo ? (
                        <img 
                            src={data.student.photo} 
                            alt='' 
                            style={{
                                width: '70px',
                                height: '70px',
                                border: '1px solid #2C2669',
                                borderRadius: '50%'
                            }}
                        />
                    ) : (
                        <GroupProfile>
                            {initials}
                        </GroupProfile>
                    )}
                    <img 
                        src={moreIcon} 
                        alt="profile img" 
                        style={{
                            width: "25px",
                            cursor: "pointer"
                        }}
                        onClick={handleClick}
                    />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
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
                        
                    </Menu>
                </StudentCardTop>
                
                <GroupCardCenter>
                    <Balance>{data.student.balance} Won</Balance> Balance
                </GroupCardCenter>
                <GroupCardCenter>
                    <GroupName>{data.student.name}</GroupName> name
                </GroupCardCenter>
                <GroupCardCenter>
                    <StartDate>{data.id}</StartDate> ID
                </GroupCardCenter>
                <GroupCardCenter>
                    <StartDate>{data.student.tel}</StartDate> Phone number
                </GroupCardCenter>
                <GroupCardCenter>
                    <StartDate>{data.student.branch}</StartDate> Branch
                </GroupCardCenter>
                <GroupCardCenter>
                    <StartDate>{data.student.addedAt}</StartDate> Added at
                </GroupCardCenter>

                <Line />
                <GroupCardCenter>
                    <AddButton>
                        <img src={plus} alt="" width={'13px'} style={{marginRight: '15px'}}/>
                        Add payment
                    </AddButton>
                    <AddButton>
                        <img src={plus} alt="" width={'13px'} style={{marginRight: '15px'}}/>
                        Add to group
                    </AddButton>
                </GroupCardCenter>

            </GroupsCard>
        </GroupsContainer>
    )
}

export default StudentProfile
