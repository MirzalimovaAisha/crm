import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import {
    DemoInputs,
    DemoLabels,
    DemoLeftContainer,
    SendButton,
} from "../home/style";
import {
    AddNewTeacher,
    AddTeacherModalTop,
    ModalInput,
    ModalInputContainer,
    ModalLabel,
} from "../teachers/style";
import { Option, Select, selectClasses } from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";

export function AddNewGroupModal({ open, setOpen }) {
    // const [phone, setPhone] = React.useState("");
    // const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [fileName, setFileName] = React.useState("");
    const [selectedDate, setSelectedDate] = React.useState(null);

    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // };

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
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <DemoLeftContainer
                    style={{ width: "650px", borderRadius: "0px" }}
                >
                    <AddTeacherModalTop
                        style={{ marginLeft: "-40px", marginTop: "-30px" }}
                    >
                        <ModalClose sx={{ position: "absolute", mt: "-5px" }} />
                    </AddTeacherModalTop>
                    <AddNewTeacher>Create new group</AddNewTeacher>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "30px",
                        }}
                    >
                        <div>
                            <DemoLabels htmlFor="name">Group name</DemoLabels>
                            <DemoInputs
                                id="name"
                                placeholder="Enter group name"
                                type="text"
                            />
                        </div>

                        <div style={{ display: "flex", gap: "30px" }}>
                            <ModalInputContainer style={{ margin: "0" }}>
                                <ModalLabel htmlFor="name">
                                    Uplaod photo
                                </ModalLabel>
                                <input
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
                                        width: "270px",
                                    }}
                                />
                            </ModalInputContainer>
                            <div>
                                <DemoLabels htmlFor="Surname">
                                    Select course
                                </DemoLabels>
                                <Select
                                    placeholder="Select Course"
                                    d="Surname"
                                    indicator={<KeyboardArrowDown />}
                                    sx={{
                                        width: "270px",
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
                            </div>
                        </div>

                        <div>
                            <DemoLabels htmlFor="Surname">
                                Select teacher
                            </DemoLabels>
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
                        </div>

                        <div>
                            <DemoLabels htmlFor="Surname">
                                Select lesson start time
                            </DemoLabels>
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
                                        height: "190px",
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
                        </div>

                        <div style={{ display: "flex", gap: "30px" }}>
                            <div>
                                <DemoLabels htmlFor="Surname">
                                    Select days
                                </DemoLabels>
                                <Select
                                    placeholder="Select Course"
                                    d="Surname"
                                    indicator={<KeyboardArrowDown />}
                                    sx={{
                                        width: "270px",
                                        display: "flex",
                                        height: "58px",
                                        // padding: '8px 16px',
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "83px",
                                        borderRadius: "8px",
                                        // border: '1px solid #CFCBEA',
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
                            </div>

                            <div>
                                <DemoLabels htmlFor="Surname">
                                    Select room
                                </DemoLabels>
                                <Select
                                    placeholder="Select days"
                                    d="Surname"
                                    indicator={<KeyboardArrowDown />}
                                    sx={{
                                        width: "270px",
                                        display: "flex",
                                        height: "58px",
                                        // padding: '8px 16px',
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "83px",
                                        borderRadius: "8px",
                                        // border: '1px solid #CFCBEA',
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
                            </div>
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
                        <SendButton>Create Group</SendButton>
                    </div>
                </DemoLeftContainer>
            </Modal>
        </div>
    );
}
