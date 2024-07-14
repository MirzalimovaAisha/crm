import React from 'react'
import { Course, GroupCardCenter, GroupName, GroupProfile, GroupsCard, GroupsContainer, GroupTime, Line, SeeGroupBtn, StartDate, StudentsBox } from './style'

function Groups({ data }) {
    return (
        <GroupsContainer>
            {data.map((value, key) => {
                const { photo, name } = value.group;
                return (
                    <GroupsCard key={key}>
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
                            <StartDate>{value.group.startDate}</StartDate> Start date
                        </GroupCardCenter>
                        <GroupCardCenter>
                            <div style={{display: 'flex', gap: '10px'}}>
                                <StudentsBox>{value.group.students} Students</StudentsBox>
                                <StudentsBox>{value.group.room}-room</StudentsBox>
                            </div>
                            Strudents & room
                        </GroupCardCenter>
                        <Line />
                        <GroupCardCenter>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <GroupTime>{value.group.time.from}-{value.group.time.to}</GroupTime>
                                Mon, Tue, Wed, Thu, Fri
                            </div>
                            <SeeGroupBtn>See group</SeeGroupBtn>
                        </GroupCardCenter>
                    </GroupsCard>
                );
            })}
        </GroupsContainer>
    )
}

export default Groups
