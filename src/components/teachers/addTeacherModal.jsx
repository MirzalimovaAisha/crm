import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import {
    AddNewTeacher,
    AddTeacherModalBottom,
    AddTeacherModalStyle,
    AddTeacherModalTop,
    ModalInput,
    ModalInputContainer,
    ModalLabel,
    ModalScroll,
    UploadPhoto,
} from "./style";
import { Checkbox, FormControlLabel } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import { SendButton } from "../home/style";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function AddTeacherModal({ open, setOpen }) {
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [fileName, setFileName] = React.useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName("");
        }
    };

    return (
        <div>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                disableAutoFocus
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ModalScroll>
                    <AddTeacherModalStyle>
                        <AddTeacherModalTop>
                            <ModalClose sx={{ position: "absolute", mt: "-5px" }} />
                        </AddTeacherModalTop>
                        <AddTeacherModalBottom>
                            <AddNewTeacher>Add new teacher</AddNewTeacher>
                            <ModalInputContainer>
                                <ModalLabel htmlFor="name">Full name</ModalLabel>
                                <ModalInput
                                    id="name"
                                    type="text"
                                    placeholder="Enter name"
                                />
                            </ModalInputContainer>
                            <ModalInputContainer>
                                <ModalLabel htmlFor="surname">
                                    Telegram username
                                </ModalLabel>
                                <ModalInput
                                    id="surname"
                                    type="text"
                                    placeholder="Enter username"
                                />
                            </ModalInputContainer>
                            <ModalInputContainer
                                    style={{ margin: "0", position: "relative" }}
                                >
                                    <ModalLabel htmlFor="name">
                                        Uplaod photo
                                    </ModalLabel>
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
                                        style={{
                                            width: "100%",
                                        }}
                                    />
                                </ModalInputContainer>
                            <ModalInputContainer>
                                <ModalLabel htmlFor="percent">
                                    Percent(%)
                                </ModalLabel>
                                <ModalInput
                                    id="percent"
                                    type="text"
                                    placeholder="Enter percent"
                                />
                            </ModalInputContainer>
                            <ModalInputContainer>
                                <ModalLabel>Branches</ModalLabel>
                                <div style={{ display: "flex", color: "#6053B9" }}>
                                    <FormControlLabel sx={{color:"#6053B9"}}
                                        control={<Checkbox sx={{color:"#A098D5 !important"}}/>}
                                        label="Seoul"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox sx={{color:"#A098D5 !important"}}/>}
                                        label="Gyeongsan"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox sx={{color:"#A098D5 !important"}}/>}
                                        label="Daegu"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox sx={{color:"#A098D5 !important"}}/>}
                                        label="Gwangju"
                                    />
                                </div>
                            </ModalInputContainer>
                            <ModalInputContainer>
                                <ModalLabel htmlFor="phone">
                                    Phone number
                                </ModalLabel>
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
                            <SendButton>Add teacher</SendButton>
                        </AddTeacherModalBottom>
                    </AddTeacherModalStyle>
                </ModalScroll>
            </Modal>
        </div>
    );
}
