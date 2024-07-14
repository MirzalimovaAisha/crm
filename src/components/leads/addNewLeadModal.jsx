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
    SelectInput,
} from "../teachers/style";
import PhoneInput from "react-phone-input-2";

function AddNewLeadModal({ open, setOpen }) {
    const [phone, setPhone] = React.useState("");

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
                    <AddTeacherModalBottom style={{ height: "650px" }}>
                        <AddNewTeacher>Add new lead</AddNewTeacher>
                        <ModalInputContainer>
                            <ModalLabel htmlFor="name">Lead name</ModalLabel>
                            <ModalInput
                                id="name"
                                type="text"
                                placeholder="Enter name"
                            />
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
                            <ModalLabel>Sections</ModalLabel>
                            <SelectInput id="section">
                                <option value="1">Elementary</option>
                                <option value="2">Beginner</option>
                                <option value="3">Math</option>
                            </SelectInput>
                        </ModalInputContainer>
                        <ModalInputContainer>
                            <ModalLabel>From where</ModalLabel>
                            <SelectInput id="section">
                                <option value="1">Telegram</option>
                                <option value="2">Instagram</option>
                                <option value="3">Other</option>
                            </SelectInput>
                        </ModalInputContainer>
                        <AddTeacherBtn>Create lead</AddTeacherBtn>
                    </AddTeacherModalBottom>
                </AddTeacherModalStyle>
            </Modal>
        </div>
    );
}

export default AddNewLeadModal;
