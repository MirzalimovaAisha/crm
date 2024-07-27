import React from 'react'
import { NumberTd, Table, Td, Th, Thead, Tr } from '../groups/style'
import { CommentContent, TelNumber } from './style'
import { smsData } from '../mock/smsData';

function Sms() {
    const sms = smsData.maindata;

    return (
        <Table style={{ marginBottom:"100px"}}>
            <Thead>
                <Tr $hoverNone $header>
                    <Th></Th>
                    <Th style={{width: '652px', padding:"0px"}}>SMS</Th>
                    <Th style={{width: '182px'}}>Sender</Th>
                    <Th $center style={{width: '209px', }}>Date</Th>
                </Tr>
            </Thead>
            <tbody>
                {sms.map((value, index) => {
                    return (
                        <Tr key={index}>
                            <NumberTd style={{width:"44px"}}>{index + 1}</NumberTd>
                            <Td style={{width: '652px', padding:"0px"}}>
                                <CommentContent style={{color: '#2C2669'}}>{value.sms.sms}</CommentContent>
                            </Td>
                            <Td style={{width: '182px'}}><TelNumber>{value.sms.sender}</TelNumber></Td>
                            <Td $center style={{width: '209px'}}><TelNumber>{value.sms.date} | {value.sms.time}</TelNumber></Td>
                        </Tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default Sms