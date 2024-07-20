import React from 'react'
import { Course, GroupCardCenter, GroupName, GroupProfile, GroupsCard, GroupsContainer, GroupTime, Line, SeeGroupBtn, StartDate, StudentsBox } from '../teachers/style'
import { StudentGroupsPage, TelNumber } from './style';
import { NumberTd, Table, Td, Th, Thead, Tr } from '../groups/style';
import { Link } from 'react-router-dom';
import { studentGroupData } from '../mock/studentGroups';

function StudentGroups({ data }) {
    const studentsGroupData = studentGroupData.maindata;

    return (
        <StudentGroupsPage>
            <GroupsContainer>
                {data.map((value, key) => {
                    const { photo, name } = value.group;
                    return (
                        <GroupsCard key={key} >
                            {photo ? (
                                <img 
                                    src={photo} 
                                    alt='' 
                                    style={{
                                        width: '70px',
                                        height: '70px',
                                        border: '1px solid #2C2669',
                                        borderRadius: '50%'
                                    }}
                                />
                            ) : (
                                <GroupProfile>
                                    {name.charAt(0).toUpperCase()}
                                </GroupProfile>
                            )}
                            <GroupCardCenter>
                                <GroupName>{value.group.name}</GroupName> Group name
                            </GroupCardCenter>
                            <GroupCardCenter>
                                <Course>{value.group.course}</Course> Course
                            </GroupCardCenter>
                            <GroupCardCenter>
                                <StartDate>{value.group.teacher}</StartDate> Teacher name
                            </GroupCardCenter>
                            <GroupCardCenter>
                                <StartDate>{value.group.trainingDate.from} - {value.group.trainingDate.to}</StartDate> Training dates
                            </GroupCardCenter>
                            <GroupCardCenter>
                                <div style={{display: 'flex', gap: '10px'}}>
                                    <StudentsBox>{value.group.students} Students</StudentsBox>
                                    <StudentsBox>{value.group.room}-room</StudentsBox>
                                </div>
                                Strudents & room
                            </GroupCardCenter>
                            <Line />
                            <GroupCardCenter style={{margin:"0px"}}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <GroupTime>{value.group.time.from}-{value.group.time.to}</GroupTime>
                                    Mon, Tue, Wed, Thu, Fri
                                </div>
                                <SeeGroupBtn>{value.group.balance} Won</SeeGroupBtn>
                            </GroupCardCenter>
                        </GroupsCard>
                    );
                })}

            </GroupsContainer>
            <Table style={{width: '980px'}}>
                <Thead>
                    <Tr $hoverNone>
                        <Th style={{width:"54px"}}></Th>
                        <Th style={{width: '167px'}}>Date</Th>
                        <Th style={{width: '207px'}}>Amount</Th>
                        <Th style={{width: '393px'}}>Groups</Th>
                        <Th style={{width: '263px'}}>Receiver</Th>
                    </Tr>
                </Thead>
                <tbody>
                    {studentsGroupData.map((value, index) => {
                        return (
                            <Link to={`/student/${value.id}`} style={{textDecoration: "none"}}>
                                <Tr key={index}>
                                    <NumberTd style={{width:"54px"}}>{index + 1}</NumberTd>
                                    <Td style={{width: '167px'}}>
                                        <TelNumber>{value.group.date}</TelNumber>
                                    </Td>
                                    <Td style={{width: '207px'}}><TelNumber>{value.group.amount} Won</TelNumber></Td>
                                    <Td style={{width: '393px'}}>
                                        <TelNumber>{value.group.group}</TelNumber>
                                    </Td>
                                    <Td style={{width: '263px'}}>
                                        <TelNumber>{value.group.receiver}</TelNumber>
                                    </Td>
                                </Tr>
                            </Link>
                        )
                    })}
                </tbody>
            </Table>
        </StudentGroupsPage>
    )
}

export default StudentGroups
