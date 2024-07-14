import * as React from 'react'
import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import { DemoInputs, DemoLabels, DemoLeftContainer, SendButton } from '../home/style'
import { AddNewTeacher, AddTeacherModalTop } from '../teachers/style'
import PhoneInput from 'react-phone-input-2'
import { Option, Select, selectClasses } from '@mui/joy'
import { KeyboardArrowDown } from '@mui/icons-material'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GenderForm, GenderOption, GenderOptions, RadioInput } from './style'

export function AddNewStudentModal({ open, setOpen }) {
    const [phone, setPhone] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <DemoLeftContainer style={{width: '650px', borderRadius: '0px', height: '960px'}}>
                    <AddTeacherModalTop style={{marginLeft: '-40px', marginTop: '-30px'}}>
                        <ModalClose sx={{position: 'absolute', mt: '-5px'}}/>
                    </AddTeacherModalTop>
                    <AddNewTeacher style={{margin: '30px 0'}}>Add new student</AddNewTeacher>
                    <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                        <div>
                            <DemoLabels htmlFor='name'>Full name</DemoLabels>
                            <DemoInputs id='name' placeholder='Enter full name' type='text'/>
                        </div>

                        <div>
                            <DemoLabels htmlFor='dateOfBirth'>Date of birth</DemoLabels>
                            <DemoInputs type="date" id='dateOfBirth'/>
                        </div>

                        <GenderForm>
                            <DemoLabels>Gender</DemoLabels>
                            <GenderOptions>
                                <GenderOption>
                                    <RadioInput type="radio" name="gender" value="male" /> Male
                                </GenderOption>
                                <GenderOption>
                                    <RadioInput type="radio" name="gender" value="female" /> Female
                                </GenderOption>
                            </GenderOptions>
                        </GenderForm>

                        <div>
                            <DemoLabels htmlFor='phone'>Phone number</DemoLabels>
                            <PhoneInput country={'us'} value={phone} onChange={phone => setPhone(phone)} inputStyle={{ width: '300px' }} buttonStyle={{height: "58px",  borderRadius: "8px 0 0 8px", background: "#EFEEF8"}} id='phone'/>
                        </div>

                        <div>
                            <DemoLabels htmlFor='parentPhone'>Parent phone number</DemoLabels>
                            <PhoneInput country={'us'} value={phone} onChange={phone => setPhone(phone)} inputStyle={{ width: '300px' }} buttonStyle={{height: "58px",  borderRadius: "8px 0 0 8px", background: "#EFEEF8"}} id='parentPhone'/>
                        </div>

                        <div>
                            <DemoLabels htmlFor='password'>Password</DemoLabels>
                            <DemoInputs 
                                type={showPassword ? 'text' : 'password'} 
                                value={password} onChange={(e) => setPassword(e.target.value)} 
                                placeholder='Enter password' 
                                id='Password' 
                                style={{margin: "8px 0 0px 0", position: "relative", display: "flex", justifyContent: "end", paddingRight: "60px"}}
                            />
                            <div style={{position: 'absolute', display: "flex", justifyContent: "end", width: "483px", alignItems: "center", marginTop: "-37px", marginLeft: "50px"}} >
                                {showPassword 
                                    ? <FaEyeSlash 
                                        style={{transform: "scale(1.5)", cursor: "pointer"}} 
                                        onClick={togglePasswordVisibility}
                                    /> 
                                    : <FaEye style={{transform: "scale(1.5)", cursor: "pointer"}} onClick={togglePasswordVisibility}/>
                                }
                            </div>
                        </div>
                        
                        <div style={{display: 'flex', gap: '60px'}}>
                            <div>
                                <DemoLabels htmlFor='group'>Select group</DemoLabels>
                                <Select
                                    placeholder="Select Course"
                                    id='group'
                                    indicator={<KeyboardArrowDown />}
                                    sx={{
                                        width: '270px',
                                        display: 'flex',
                                        height: '58px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '83px',
                                        borderRadius: '8px',
                                        background: '#EFEEF8',
                                        [`& .${selectClasses.indicator}`]: {
                                            transition: '0.2s',
                                            [`&.${selectClasses.expanded}`]: {
                                                transform: 'rotate(-180deg)'
                                            }
                                        }
                                    }}
                                >
                                    <div style={{background: '#EFEEF8', height: '140px', marginTop: '-10px'}}>
                                        <Option sx={{ '&:hover': { backgroundColor: '#fff' } }} value="IT Bootcamp"><div style={{ '&:hover': { backgroundColor: '#fff' } }}>IT Bootcamp</div></Option>
                                        <Option sx={{ '&:hover': { backgroundColor: '#fff' } }} value="ITs Bootcamp">ITs Bootcamp</Option>
                                        <Option sx={{ '&:hover': { backgroundColor: '#fff' } }} value="fish">Fish</Option>
                                        <Option sx={{ '&:hover': { backgroundColor: '#fff' } }} value="bird">Bird</Option>
                                    </div>
                                </Select> 
                            </div>

                            <div>
                                <DemoLabels htmlFor='dateFrom'>Date from</DemoLabels>
                                <DemoInputs type="date" id='dateFrom'/>
                            </div>
                        </div>
                        <SendButton>Add student</SendButton>
                    </div>
                </DemoLeftContainer>
            </Modal>
        </div>
    )
}
