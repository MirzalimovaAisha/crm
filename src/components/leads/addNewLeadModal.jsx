import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import {
    AddModalInput,
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
import { SendButton } from "../home/style";

function AddNewLeadModal({ open, setOpen }) {
    const [phone, setPhone] = React.useState("");

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
                                className="phone"
                                country={"us"}
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                inputStyle={{ width: "300px", overflow:"hidden" }}
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
                                <option value="1">Sections</option>
                            </SelectInput>
                        </ModalInputContainer>
                        <ModalInputContainer>
                            <ModalLabel>From where</ModalLabel>
                            <SelectInput id="section">
                                <option value="1">From where</option>
                            </SelectInput>
                        </ModalInputContainer>
                        <SendButton>Create lead</SendButton>
                    </AddTeacherModalBottom>
                </AddTeacherModalStyle>
            </Modal>
        </div>
    );
}

export default AddNewLeadModal;
