import React from "react";
import {
  Avatar,
  Block,
  CardSpaceBetween,
  EditProfileButton,
  EditProfileModal,
  ProfileCard,
  ProfileCardTop,
  ProfileContainer,
  Username,
} from "./style";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import pencilIcon from "../../assets/pencil-icon.png";
import avatar from "../../assets/avatar-profile.png";

import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { SendButton } from "../home/style";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  AddNewTeacher,
  AddTeacherModalBottom,
  AddTeacherModalStyle,
  AddTeacherModalTop,
  ModalInput,
  ModalInputContainer,
  ModalLabel,
  UploadPhoto,
} from "../teachers/style";

function Profile() {
  const [phone, setPhone] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [fileName, setFileName] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };
  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileCardTop>
          <EditProfileButton onClick={() => setOpen(true)}>
            <img src={pencilIcon} alt="" />
            Edit profile
          </EditProfileButton>
        </ProfileCardTop>
        <Avatar>
          <img src={avatar} alt="" />
        </Avatar>

        <div style={{ padding: "0 20px" }}>
          <Username>Andrew Smith</Username>
          <Block>CEO</Block>

          <CardSpaceBetween style={{ marginTop: "20px" }}>
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
        disableAutoFocus
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <AddTeacherModalStyle>
          <AddTeacherModalTop>
            <ModalClose
              variant="plain"
              sx={{ position: "absolute", mt: "-5px" }}
            />
          </AddTeacherModalTop>
          <Typography id="modal-desc" textColor="text.tertiary">
            <AddTeacherModalBottom>
              <AddNewTeacher>Edit Profile</AddNewTeacher>

              <ModalInputContainer>
                <ModalLabel htmlFor="name">Full name</ModalLabel>
                <ModalInput type="text" placeholder="Enter name" id="name" />
              </ModalInputContainer>

              <ModalInputContainer
                style={{ margin: "0", position: "relative" }}
              >
                <ModalLabel htmlFor="name">Uplaod photo</ModalLabel>
                <UploadPhoto
                  id="photo"
                  type="file"
                  onChange={handleFileChange}
                />
                <ModalInput
                  id="photo"
                  type="text"
                  value={fileName}
                  placeholder="Upload photo"
                />
              </ModalInputContainer>

              <ModalInputContainer>
                <ModalLabel htmlFor="name">Telegram username</ModalLabel>
                <ModalInput
                  type="text"
                  placeholder="Enter username"
                  id="name"
                />
              </ModalInputContainer>

              <ModalInputContainer>
                <ModalLabel>Phone number</ModalLabel>
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputStyle={{ width: "300px" }}
                  buttonStyle={{
                    height: "58px",
                    borderRadius: "8px 0 0 8px",
                    background: "#EFEEF8",
                  }}
                />
              </ModalInputContainer>

              <ModalInputContainer>
                <ModalLabel htmlFor="password">Password</ModalLabel>
                <ModalInput
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter email address"
                  id="Password"
                  style={{ padding: "0px 50px 0px 16px" }}
                />
                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    top: "43px",
                    right: "20px",
                  }}
                >
                  {showPassword ? (
                    <FaEyeSlash
                      style={{
                        transform: "scale(1.5)",
                        cursor: "pointer",
                      }}
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <FaEye
                      style={{
                        transform: "scale(1.5)",
                        cursor: "pointer",
                      }}
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
              </ModalInputContainer>

              <SendButton>Update profile</SendButton>
            </AddTeacherModalBottom>
          </Typography>
        </AddTeacherModalStyle>
      </Modal>
    </ProfileContainer>
  );
}

export default Profile;
