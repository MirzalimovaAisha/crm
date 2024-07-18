import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import { AddNewTeacher, AddTeacherModalBottom, AddTeacherModalStyle, AddTeacherModalTop, ModalInputContainer, SmsTemplateBox, SmsTemplateWrapper } from '../teachers/style';
import { SendButton } from '../home/style';

function SendSmsModal({ open, setOpen }) {
  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        disableAutoFocus
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <AddTeacherModalStyle>
          <AddTeacherModalTop>
            <ModalClose sx={{ position: 'absolute', mt: '-5px' }} />
          </AddTeacherModalTop>
          <AddTeacherModalBottom style={{ height: "674px" }}>
            <AddNewTeacher>Send SMS</AddNewTeacher>
            <ModalInputContainer>
              <textarea
                name=""
                id=""
                placeholder="Enter Message"
                style={{
                  height: "151px",
                  resize: "none",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "1px solid #CFCBEA",
                  background: "#EFEEF8",
                  fontFamily: "Public Sans",
                  fontSize: "18px"
                }}
              ></textarea>
            </ModalInputContainer>
            <SendButton>Send</SendButton>

            <AddNewTeacher style={{marginTop: "40px"}}>SMS Templates</AddNewTeacher>
            <SmsTemplateWrapper>
                <SmsTemplateBox>당신의 아이는 오늘 수업에 참여하지 않았어요</SmsTemplateBox>
                <SmsTemplateBox>수업을 위해서 결재를 미리 해주세요. 부탁드립니다!</SmsTemplateBox>
                <SmsTemplateBox>너무 잘하고 있어요!</SmsTemplateBox>
            </SmsTemplateWrapper>
          </AddTeacherModalBottom>
        </AddTeacherModalStyle>
      </Modal>
    </div>
  );
}

export default SendSmsModal;

