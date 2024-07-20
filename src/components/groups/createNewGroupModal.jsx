import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import {
    SendButton,
} from "../home/style";
import {
    AddNewTeacher,
    AddTeacherModalBottom,
    AddTeacherModalStyle,
    AddTeacherModalTop,
    CustomDateButton,
    ModalInput,
    ModalInputContainer,
    ModalLabel,
    ModalScroll,
    UploadPhoto,
} from "../teachers/style";
import { Option, Select, selectClasses } from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import DatePicker from "@mui/lab/DatePicker";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function AddNewGroupModal({ open, setOpen }) {
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);

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
                <ModalScroll>
                    <AddTeacherModalStyle>
                        <AddTeacherModalTop>
                            <ModalClose sx={{ position: "absolute", mt: "-5px" }} />
                        </AddTeacherModalTop>
                        <AddTeacherModalBottom
                            style={{
                                display: "flex",
                                gap: "30px",
                                flexDirection: "column",
                            }}
                        >
                            <AddNewTeacher>Create new group</AddNewTeacher>
                            <ModalInputContainer>
                                <ModalLabel htmlFor="name">Group name</ModalLabel>
                                <ModalInput
                                    id="name"
                                    placeholder="Enter group name"
                                    type="text"
                                />
                            </ModalInputContainer>

                            <div style={{ display: "flex", gap: "30px" }}>
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
                                            width: "250px",
                                        }}
                                    />
                                </ModalInputContainer>
                                <ModalInputContainer>
                                    <ModalLabel htmlFor="Surname">
                                        Select course
                                    </ModalLabel>
                                    <Select
                                        placeholder="Select Course"
                                        d="Surname"
                                        indicator={<KeyboardArrowDown />}
                                        sx={{
                                            width: "250px",
                                            display: "flex",
                                            height: "58px",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: "8px",
                                            background: "#EFEEF8",
                                            color:"#2C2669",
                                            fontSize:"18px",
                                            fontFamily:"Public Sans",
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
                                                <div>IT Bootcamp</div>
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
                            </div>

                            <ModalInputContainer>
                                <ModalLabel htmlFor="Surname">
                                    Select teacher
                                </ModalLabel>
                                <Select
                                    placeholder="Select teacher"
                                    d="Surname"
                                    indicator={<KeyboardArrowDown />}
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        height: "58px",
                                        // padding: '8px 16px',
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "83px",
                                        borderRadius: "8px",
                                        // border: '1px solid #CFCBEA',
                                        background: "#EFEEF8",
                                        color:"#2C2669",
                                        fontSize:"18px",
                                        fontFamily:"Public Sans",
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
                                <ModalLabel htmlFor="Surname">
                                    Select lesson start time
                                </ModalLabel>
                                <Select
                                    placeholder="Select lesson start time"
                                    d="Surname"
                                    indicator={<KeyboardArrowDown />}
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        height: "58px",
                                        // padding: '8px 16px',
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "83px",
                                        borderRadius: "8px",
                                        // border: '1px solid #CFCBEA',
                                        background: "#EFEEF8",
                                        color:"#2C2669",
                                        fontSize:"18px",
                                        fontFamily:"Public Sans",
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
                                            background: "#EFEEF8"
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
                                                8:00
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
                                            9:00
                                        </Option>
                                        <Option
                                            sx={{
                                                "&:hover": {
                                                    backgroundColor: "#fff",
                                                },
                                            }}
                                            value="fish"
                                        >
                                            10:00
                                        </Option>
                                        <Option
                                            sx={{
                                                "&:hover": {
                                                    backgroundColor: "#fff",
                                                },
                                            }}
                                            value="bird"
                                        >
                                            11:00
                                        </Option>
                                        <Option
                                            sx={{
                                                "&:hover": {
                                                    backgroundColor: "#fff",
                                                },
                                            }}
                                            value="bird"
                                        >
                                            12:00
                                        </Option>
                                    </div>
                                </Select>
                            </ModalInputContainer>

                            <div style={{ display: "flex", gap: "30px" }}>
                                <ModalInputContainer>
                                    <ModalLabel htmlFor="Surname">
                                        Select days
                                    </ModalLabel>
                                    <Select
                                        placeholder="Select days"
                                        d="Surname"
                                        indicator={<KeyboardArrowDown />}
                                        sx={{
                                            width: "250px",
                                            display: "flex",
                                            height: "58px",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: "83px",
                                            borderRadius: "8px",
                                            background: "#EFEEF8",
                                            color:"#2C2669",
                                        fontSize:"18px",
                                        fontFamily:"Public Sans",
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
                                                Odd days
                                            </Option>
                                            <Option
                                                sx={{
                                                    "&:hover": {
                                                        backgroundColor: "#fff",
                                                    },
                                                }}
                                                value="ITs Bootcamp"
                                            >
                                                Even days
                                            </Option>
                                            <Option
                                                sx={{
                                                    "&:hover": {
                                                        backgroundColor: "#fff",
                                                    },
                                                }}
                                                value="fish"
                                            >
                                                Weekends
                                            </Option>
                                            <Option
                                                sx={{
                                                    "&:hover": {
                                                        backgroundColor: "#fff",
                                                    },
                                                }}
                                                value="bird"
                                            >
                                                Every days
                                            </Option>
                                            <Option
                                                sx={{
                                                    "&:hover": {
                                                        backgroundColor: "#fff",
                                                    },
                                                }}
                                                value="bird"
                                            >
                                                Other
                                            </Option>
                                        </div>
                                    </Select>
                                </ModalInputContainer>

                                <ModalInputContainer>
                                    <ModalLabel htmlFor="Surname">
                                        Select room
                                    </ModalLabel>
                                    <Select
                                        placeholder="Select room"
                                        d="Surname"
                                        indicator={<KeyboardArrowDown />}
                                        sx={{
                                            width: "250px",
                                            display: "flex",
                                            height: "58px",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: "8px",
                                            background: "#EFEEF8",
                                            color:"#2C2669",
                                        fontSize:"18px",
                                        fontFamily:"Public Sans",
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
                                                padding: "0px !important",
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
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Select Date"
                                        value={selectedDate}
                                        onChange={(newValue) => {
                                            setSelectedDate(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                        components={{
                                            OpenPickerIcon: () => (
                                                <KeyboardArrowDown />
                                            ),
                                        }}
                                        sx={{
                                            width: 240,
                                            display: "flex",
                                            height: "58px",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: "83px",
                                            borderRadius: "8px",
                                            background: "#EFEEF8",
                                            "& .MuiInputBase-root": {
                                                height: "58px",
                                                display: "flex",
                                                alignItems: "center",
                                                paddingLeft: "16px",
                                                paddingRight: "16px",
                                            },
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "8px",
                                                "& fieldset": {
                                                    borderColor: "#CFCBEA",
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "#A3A1D7",
                                                },
                                                "&.Mui-focused fieldset": {
                                                    borderColor: "#6C63FF",
                                                },
                                            },
                                        }}
                                    />
                                </LocalizationProvider>
                            </div>
                            <div style={{ display: "flex", gap: "30px" }}>
                                <ModalInputContainer>
                                    <ModalLabel htmlFor="group-start-date">
                                        Group start date
                                    </ModalLabel>

                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        placeholderText="Select Date"
                                        customInput={
                                            <CustomDateButton $group>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" fill="#2C2669"/>
                                                    <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" fill="black" fill-opacity="0.2"/>
                                                </svg>
                                                Select Date
                                            </CustomDateButton>
                                        }
                                    />
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
                                            <CustomDateButton  $group>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" fill="#2C2669"/>
                                                    <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" fill="black" fill-opacity="0.2"/>
                                                </svg>
                                                Select Date
                                            </CustomDateButton>
                                        }
                                    />
                                </ModalInputContainer>
                                
                            </div>
                            <SendButton>Create Group</SendButton>
                        </AddTeacherModalBottom>
                    </AddTeacherModalStyle>
                </ModalScroll>
            </Modal>
        </div>
    );
}
