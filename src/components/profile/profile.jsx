import React from 'react'
import { Avatar, Block, CardSpaceBetween, EditProfileButton, EditProfileModal, ProfileCard, ProfileCardTop, ProfileContainer, UpdateProfileButton, Username } from './style'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import pencilIcon from '../../assets/pencil-icon.png'
import avatar from '../../assets/avatar-profile.png'

import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { DemoInputs, DemoLabels } from '../home/style';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Profile() {
  const [phone, setPhone] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileCardTop>
          <EditProfileButton onClick={() => setOpen(true)}><img src={pencilIcon} alt="" />Edit profile</EditProfileButton>
        </ProfileCardTop>
        <Avatar>
          <img src={avatar} alt="" />
        </Avatar>

        <div style={{padding: "0 20px"}}>
          <Username>Andrew Smith</Username>
          <Block>CEO</Block>

          <CardSpaceBetween style={{marginTop: "20px"}}>
            <p>Telegram:</p>
            <b>@andrewsmith</b>
          </CardSpaceBetween>
          <CardSpaceBetween>
            <p>Phone:</p>
            <b>99 772-45-58</b>
          </CardSpaceBetween>
        </div>
      </ProfileCard>


      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: "650px",
            p: 3,
            boxShadow: 'lg',
            padding:"0"
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography component="h2" id="modal-title" level="h4" textColor="inherit" fontWeight="lg" mb={1}></Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            <EditProfileModal>
              <h1>Edit Profile</h1>

              <DemoLabels htmlFor='name'>Full name</DemoLabels>
              <DemoInputs type='text' placeholder='Enter name' id='name' style={{marginTop: "8px", marginBottom: '30px'}}/>

              <DemoLabels htmlFor='photo'>Upload photo</DemoLabels>
              <DemoInputs type='text' placeholder='Upload photo ' id='photo' style={{marginTop: "8px", marginBottom: '30px'}}/>

              <DemoLabels htmlFor='telegram'>Telegram username</DemoLabels>
              <DemoInputs type='text' placeholder='Telegram username' id='telegram' style={{marginTop: "8px", marginBottom: '30px'}}/>

              <DemoLabels style={{marginBottom: "8px"}}>Phone number</DemoLabels>
              <PhoneInput country={'us'} value={phone} onChange={phone => setPhone(phone)} inputStyle={{ width: '300px' }} buttonStyle={{height: "58px",  borderRadius: "8px 0 0 8px", background: "#EFEEF8"}} />

              <DemoLabels htmlFor='Password' style={{marginTop: "30px", marginBottom:"8px"}}>Password</DemoLabels>
                <DemoInputs type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' id='Password' style={{position:"relative"}}/>
                <div style={{marginTop: "-40px", marginLeft: "490px"}} >
                  {showPassword ? <FaEyeSlash style={{transform: "scale(1.5)", cursor: "pointer"}} onClick={togglePasswordVisibility}/> : <FaEye style={{transform: "scale(1.5)", cursor: "pointer"}} onClick={togglePasswordVisibility}/>}
                </div>

              <UpdateProfileButton>Update profile</UpdateProfileButton>
            </EditProfileModal>
          </Typography>
        </Sheet>
      </Modal>
    </ProfileContainer>
  )
}

export default Profile
