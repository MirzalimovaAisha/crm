import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
// import '../../index.css'
import "../../index.css";
import { SendButton } from "../home/style";
import {
    AddNewTeacher,
    AddTeacherModalBottom,
    AddTeacherModalStyle,
    AddTeacherModalTop,
    CustomDateButton,
    ModalInput,
    ModalInputContainer,
    ModalLabel,
} from "../teachers/style";
import PhoneInput from "react-phone-input-2";
import { Option, Select, selectClasses } from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GenderOption, GenderOptions } from "./style";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export function AddNewStudentModal({ open, setOpen }) {
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                disableAutoFocus
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <AddTeacherModalStyle>
                    <AddTeacherModalTop>
                        <ModalClose sx={{ position: "absolute", mt: "-5px" }} />
                    </AddTeacherModalTop>
                    <AddTeacherModalBottom>
                        <AddNewTeacher>Add new student</AddNewTeacher>
                        <ModalInputContainer>
                            <ModalLabel htmlFor="name">Full name</ModalLabel>
                            <ModalInput
                                id="name"
                                placeholder="Enter full name"
                                type="text"
                            />
                        </ModalInputContainer>

                        <ModalInputContainer>
                            <ModalLabel htmlFor="group-start-date">
                                Group start date
                            </ModalLabel>

                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                placeholderText="Select Date"
                                customInput={
                                    <CustomDateButton>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
                                                fill="#2C2669"
                                            />
                                            <path
                                                d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
                                                fill="black"
                                                fill-opacity="0.2"
                                            />
                                        </svg>
                                        Select birthday
                                    </CustomDateButton>
                                }
                            />
                        </ModalInputContainer>

                        <ModalInputContainer>
                            <ModalLabel>Gender</ModalLabel>

                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                style={{
                                    display: "flex !important",
                                    gap: "30px",
                                    flexDirection: "row",
                                }}
                            >
                                <GenderOption>
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male"
                                    />
                                </GenderOption>
                                <GenderOption>
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                    />
                                </GenderOption>
                            </RadioGroup>
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
                                id="phone"
                            />
                        </ModalInputContainer>

                        <ModalInputContainer>
                            <ModalLabel htmlFor="parentPhone">
                                Parent phone number
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
                                id="parentPhone"
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

                        <div style={{ display: "flex", gap:"46px" }}>
                            <ModalInputContainer>
                                <ModalLabel htmlFor="group">
                                    Select group
                                </ModalLabel>
                                <Select
                                    placeholder="Select Course"
                                    id="group"
                                    indicator={<KeyboardArrowDown />}
                                    sx={{
                                        width: "234px",
                                        display: "flex",
                                        height: "58px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "83px",
                                        borderRadius: "8px",
                                        background: "#EFEEF8",
                                        [`& .${selectClasses.indicator}`]: {
                                            transition: "0.2s",
                                            [`&.${selectClasses.expanded}`]: {
                                                transform: "rotate(-180deg)",
                                            },
                                        },
                                    }}
                                >
                                    <div
                                        style={{
                                            background: "#EFEEF8",
                                            height: "140px",
                                            marginTop: "-10px",
                                        }}
                                    >
                                        <Option
                                            sx={{
                                                "&:hover": {
                                                    backgroundColor: "#fff",
                                                },
                                            }}
                                            value="IT Bootcamp"
                                        >
                                            <div
                                                style={{
                                                    "&:hover": {
                                                        backgroundColor: "#fff",
                                                    },
                                                }}
                                            >
                                                IT Bootcamp
                                            </div>
                                        </Option>
                                        <Option
                                            sx={{
                                                "&:hover": {
                                                    backgroundColor: "#fff",
                                                },
                                            }}
                                            value="ITs Bootcamp"
                                        >
                                            ITs Bootcamp
                                        </Option>
                                        <Option
                                            sx={{
                                                "&:hover": {
                                                    backgroundColor: "#fff",
                                                },
                                            }}
                                            value="fish"
                                        >
                                            Fish
                                        </Option>
                                        <Option
                                            sx={{
                                                "&:hover": {
                                                    backgroundColor: "#fff",
                                                },
                                            }}
                                            value="bird"
                                        >
                                            Bird
                                        </Option>
                                    </div>
                                </Select>
                            </ModalInputContainer>

                            <ModalInputContainer>
                                <ModalLabel htmlFor="group-start-date">
                                    End date of the group
                                </ModalLabel>

                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    placeholderText="Select Date"
                                    customInput={
                                        <CustomDateButton $group>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
                                                    fill="#2C2669"
                                                />
                                                <path
                                                    d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
                                                    fill="black"
                                                    fill-opacity="0.2"
                                                />
                                            </svg>
                                            Select Date
                                        </CustomDateButton>
                                    }
                                />
                            </ModalInputContainer>
                        </div>
                        <SendButton>Add student</SendButton>
                    </AddTeacherModalBottom>
                </AddTeacherModalStyle>
            </Modal>
        </div>
    );
}
