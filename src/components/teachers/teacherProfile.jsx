import React from 'react'
import moreImg from '../../assets/moreLength.svg'
import editIcon from '../../assets/edit-icon.svg'
import smsIcon from '../../assets/sms-icon.svg'
import DeleteIcon from '../../assets/delete-icon.svg'
import { 
    TeacherProfileCard, 
    TeacherProfileCardBottom, 
    TeacherProfileCardBottomText, 
    TeacherProfileCardCenter, 
    TeacherProfileCardCenterBox, 
    TeacherProfileCardImg, 
    TeacherProfileCardImgName, 
    TeacherProfileCardName, 
    TeacherProfileCardTop, 
    TeacherProfileCardTopIcon
} from './style'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

function TeacherProfile({ data }) {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null)
    }

    const fullName = data.teacher.fullName;
    const initials = fullName.split(' ').map(name => name.charAt(0)).join('');

    return (
        <TeacherProfileCard>
            <TeacherProfileCardTop>
                {data.teacher.photo 
                    ? 
                    <TeacherProfileCardImg
                        src={data.teacher.photo}
                    />
                    : <TeacherProfileCardImgName>{initials}</TeacherProfileCardImgName>
                }
                    <img 
                        src={moreImg}
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
                
            </TeacherProfileCardTop>
            <TeacherProfileCardName>{data.teacher.fullName}</TeacherProfileCardName>
            <TeacherProfileCardCenter>
                <TeacherProfileCardCenterBox>Teacher</TeacherProfileCardCenterBox>
                <TeacherProfileCardCenterBox>CEO</TeacherProfileCardCenterBox>
            </TeacherProfileCardCenter>
            <TeacherProfileCardBottom>
                Branch:
                <TeacherProfileCardBottomText>Jarqo'rg'on</TeacherProfileCardBottomText>
            </TeacherProfileCardBottom>
            <TeacherProfileCardBottom>
                Phone:
                <TeacherProfileCardBottomText>{data.teacher.phoneNumber}</TeacherProfileCardBottomText>
            </TeacherProfileCardBottom>
            <TeacherProfileCardBottom>
                Telegram:
                <TeacherProfileCardBottomText>{data.teacher.telegram}</TeacherProfileCardBottomText>
            </TeacherProfileCardBottom>
            <TeacherProfileCardBottom>
                Percent:
                <TeacherProfileCardBottomText>{data.teacher.percent}</TeacherProfileCardBottomText>
            </TeacherProfileCardBottom>
            <TeacherProfileCardBottom>
                Balance:
                <TeacherProfileCardBottomText>{data.teacher.balance}</TeacherProfileCardBottomText>
            </TeacherProfileCardBottom>
        </TeacherProfileCard>
    )
}

export default TeacherProfile
