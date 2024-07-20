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

import { Option, Select, selectClasses } from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";

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
              <ModalInput id="name" type="text" placeholder="Enter name" />
            </ModalInputContainer>
            <ModalInputContainer>
              <ModalLabel htmlFor="phone">Phone number</ModalLabel>
              <PhoneInput
                className="phone"
                country={"us"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputStyle={{ width: "300px", overflow: "hidden" }}
                buttonStyle={{
                  height: "58px",
                  borderRadius: "8px 0 0 8px",
                  background: "#EFEEF8",
                }}
              />
            </ModalInputContainer>
            <ModalInputContainer>
              <ModalLabel>Sections</ModalLabel>
              <Select
                placeholder="Sections"
                name="source"
                indicator={<KeyboardArrowDown />}
                sx={{
                  width: "100%",
                  height:"58px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  border: "1px solid #CFCBEA",
                  background: "#EFEEF8",
                  color: "#2C2669",
                  fontSize:"18px",
                  fontFamily:"Public Sans",
                  [`& .${selectClasses.indicator}`]: {
                    transition: "0.2s",
                    [`&.${selectClasses.expanded}`]: {
                      transform: "rotate(-180deg)",
                    },
                },
                [`& .MuiList-root`]: {
                    padding: 0,
                  },
                }}
              >
                <div style={{background:"#EFEEF8", margin:"0px"}}>
                    <Option value="telegram">Sections1</Option>
                    <Option value="instagram">Sections2</Option>
                    <Option value="twitter">Sections3</Option>
                </div>
              </Select>
            </ModalInputContainer>
            <ModalInputContainer>
              <ModalLabel>From where</ModalLabel>
              <Select
                placeholder="From where"
                name="source"
                indicator={<KeyboardArrowDown />}
                sx={{
                  width: "100%",
                  height:"58px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  border: "1px solid #CFCBEA",
                  background: "#EFEEF8",
                  color: "#2C2669",
                  fontSize:"18px",
                  fontFamily:"Public Sans",
                  [`& .${selectClasses.indicator}`]: {
                    transition: "0.2s",
                    [`&.${selectClasses.expanded}`]: {
                      transform: "rotate(-180deg)",
                    },
                },
                [`& .MuiList-root`]: {
                    padding: 0,
                  },
                }}
              >
                <div style={{background:"#EFEEF8", margin:"0px"}}>
                    <Option value="telegram">telegram</Option>
                    <Option value="instagram">Instagram</Option>
                    <Option value="twitter">twitter</Option>
                </div>
              </Select>
            </ModalInputContainer>
            <SendButton>Create lead</SendButton>
          </AddTeacherModalBottom>
        </AddTeacherModalStyle>
      </Modal>
    </div>
  );
}

export default AddNewLeadModal;
