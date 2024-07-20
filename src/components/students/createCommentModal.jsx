import * as React from 'react'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import {  DemoLeftContainer, SendButton } from '../home/style'
import { AddNewTeacher, AddTeacherModalBottom, AddTeacherModalStyle, AddTeacherModalTop, ModalInput } from '../teachers/style'

export function CreateCommentModal({ open, setOpen }) {
    return (
        <div>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <AddTeacherModalStyle>
                    <AddTeacherModalTop>
                        <ModalClose sx={{position: 'absolute', mt: '-5px'}} onClick={setOpen}/>
                    </AddTeacherModalTop>
                    <AddTeacherModalBottom>
                        <AddNewTeacher>Create Comment</AddNewTeacher>
                        <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                            <div>
                                <ModalInput id='name' placeholder='Enter comment' type='text' style={{padding:" 20px 16px 203px"}}/>
                            </div>
                            <SendButton>Create comment</SendButton>
                        </div>
                    </AddTeacherModalBottom>
                </AddTeacherModalStyle>
            </Modal>
        </div>
    )
}
