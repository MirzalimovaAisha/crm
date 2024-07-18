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
import { SendButton } from "../home/style";

function AddSectionModal({ open, setOpen }) {
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
                    <AddTeacherModalBottom style={{ height: "362px" }}>
                        <AddNewTeacher>Add section</AddNewTeacher>
                        <ModalInputContainer>
                            <ModalLabel htmlFor="name">Section name</ModalLabel>
                            <ModalInput
                                id="name"
                                type="text"
                                placeholder="Enter section name"
                            />
                        </ModalInputContainer>

                        <SendButton>Create section</SendButton>
                    </AddTeacherModalBottom>
                </AddTeacherModalStyle>
            </Modal>
        </div>
    );
}

export default AddSectionModal;
