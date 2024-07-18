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
} from "../teachers/style";

import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { SendButton } from "../home/style";

function AddToGroupModal({ open, setOpen }) {
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
                    <AddTeacherModalBottom style={{ height: "420px" }}>
                        <AddNewTeacher>Add to group</AddNewTeacher>
                        <ModalInputContainer>
                            <ModalLabel htmlFor="name">Select group</ModalLabel>
                            <Select>
                                <Option value={"1"}>Test</Option>
                                <Option value={"2"}>Beginners</Option>
                                <Option value={"3"}>Math</Option>
                                <Option value={"4"}>Computer Sciense</Option>
                            </Select>
                        </ModalInputContainer>

                        <ModalInputContainer>
                            <ModalLabel htmlFor="name">Date form</ModalLabel>
                            <ModalInput
                                id="name"
                                type="date"
                                placeholder="Select date"
                            />
                        </ModalInputContainer>

                        <SendButton>Add to group</SendButton>
                    </AddTeacherModalBottom>
                </AddTeacherModalStyle>
            </Modal>
        </div>
    );
}

export default AddToGroupModal;
