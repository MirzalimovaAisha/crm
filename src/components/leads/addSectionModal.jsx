import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import {
    AddNewTeacher,
    AddTeacherBtn,
    AddTeacherModalBottom,
    AddTeacherModalStyle,
    AddTeacherModalTop,
    ModalInput,
    ModalInputContainer,
    ModalLabel,
} from "../teachers/style";

function AddSectionModal({ open, setOpen }) {
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

                        <AddTeacherBtn>Create section</AddTeacherBtn>
                    </AddTeacherModalBottom>
                </AddTeacherModalStyle>
            </Modal>
        </div>
    );
}

export default AddSectionModal;
