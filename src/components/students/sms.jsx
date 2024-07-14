import React from 'react'
import { NumberTd, Table, Td, Th, Thead, Tr } from '../groups/style'
import { CommentContent, TelNumber } from './style'
import { smsData } from '../mock/smsData';

function Sms() {
    const sms = smsData.maindata;

    return (
        <Table style={{width: '980px'}}>
            <Thead>
                <Tr $hoverNone>
                    <Th style={{width: '600px', marginLeft: '80px'}}>SMS</Th>
                    <Th style={{width: '230px'}}>Sender</Th>
                    <Th style={{width: '150px'}}>Date</Th>
                </Tr>
            </Thead>
            <tbody>
                {sms.map((value, index) => {
                    return (
                        <Tr key={index}>
                            <NumberTd>{index + 1}</NumberTd>
                            <Td style={{width: '650px', marginLeft: '20px'}}>
                                <CommentContent style={{color: '#2C2669'}}>{value.sms.sms}</CommentContent>
                            </Td>
                            <Td style={{width: '250px'}}><TelNumber>{value.sms.sender}</TelNumber></Td>
                            <Td style={{width: '150px'}}><TelNumber>{value.sms.date} | {value.sms.time}</TelNumber></Td>
                        </Tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default Sms