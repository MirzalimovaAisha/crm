import * as React from 'react'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import { DemoInputs, DemoLabels, DemoLeftContainer, SendButton } from '../home/style'
import { AddNewTeacher, AddTeacherModalTop } from '../teachers/style'

export function SendSmsModal({ open, setOpen }) {
    return (
        <div>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <DemoLeftContainer style={{width: '650px', borderRadius: '0px', height: '500px'}}>
                    <AddTeacherModalTop style={{marginLeft: '-40px', marginTop: '-30px'}}>
                        <ModalClose sx={{position: 'absolute', mt: '-5px'}} onClick={setOpen}/>
                    </AddTeacherModalTop>
                    <AddNewTeacher style={{margin: '30px 0'}}>Send SMS</AddNewTeacher>
                    <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                        <div>
                            <DemoLabels htmlFor='name'>Full name</DemoLabels>
                            <DemoInputs id='name' placeholder='Enter message' type='text' style={{height: '250px'}}/>
                        </div>
                        <SendButton>Send</SendButton>
                    </div>
                </DemoLeftContainer>
            </Modal>
        </div>
    )
}
