import * as React from 'react'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import {  DemoLeftContainer, SendButton } from '../home/style'
import { AddNewTeacher, AddTeacherModalTop, ModalInput } from '../teachers/style'

export function CreateCommentModal({ open, setOpen }) {
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
                    <AddNewTeacher style={{margin: '30px 0'}}>Create Comment</AddNewTeacher>
                    <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                        <div>
                            <ModalInput id='name' placeholder='Enter comment' type='text' style={{height: '250px'}}/>
                        </div>
                        <SendButton>Create comment</SendButton>
                    </div>
                </DemoLeftContainer>
            </Modal>
        </div>
    )
}
