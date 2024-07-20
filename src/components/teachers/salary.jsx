import React, { useEffect, useState } from 'react'
import { SalaryTd, SalaryTr, Table, TeacherProfileTabList, TeacherProfileTabListBtn, THead, TrHead } from './style'

function Salary({ incomeData, exprenseData }) {
    const [pages, setPages] = useState('')

    useEffect(() => {
        setPages('income')
    }, [])

    return (
        <div>
            <TeacherProfileTabList style={{marginBottom: '50px'}}>
                <div style={{display:"flex"}}>
                    <TeacherProfileTabListBtn
                        $first
                        onClick={() => setPages("income")} 
                        selected={pages === "income"}
                    >
                        Income
                    </TeacherProfileTabListBtn>
                    <TeacherProfileTabListBtn 
                        $second
                        $last
                        onClick={() => setPages("expense")} 
                        selected={pages === "expense"}
                    >
                        Expense
                    </TeacherProfileTabListBtn>
                </div>
            </TeacherProfileTabList>
            <Table>
                {pages === "income" ? (
                    <>
                        <THead>
                            <TrHead style={{ height: '50px' }}>
                                <SalaryTd className="td">Teacher salary</SalaryTd>
                                <SalaryTd className="td">Group</SalaryTd>
                                <SalaryTd className="td">Student</SalaryTd>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <SalaryTd className="td">Attand data</SalaryTd>
                                    <SalaryTd className="td">Payment data</SalaryTd>
                                </div>
                            </TrHead>
                        </THead>
                        <tbody>
                            {incomeData.map((value, key) => (
                                <SalaryTr key={key}>
                                    <SalaryTd $bold>{value.income.won} Won</SalaryTd>
                                    <SalaryTd>{value.income.group}</SalaryTd>
                                    <SalaryTd>{value.income.student}</SalaryTd>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <SalaryTd>{value.income.attendDate}</SalaryTd>
                                        <SalaryTd>{value.income.paymentDate}</SalaryTd>
                                    </div>
                                </SalaryTr>
                            ))}
                        </tbody>
                    </>
                ) : pages === "expense" ? (
                    <>
                        <THead>
                            <TrHead style={{ height: '50px' }}>
                                <SalaryTd className="td">Amount</SalaryTd>
                                <SalaryTd className="td">Category</SalaryTd>
                                <SalaryTd className="td" style={{marginLeft: '-40px'}}>Description</SalaryTd>
                                <SalaryTd className="td" style={{marginLeft: '40px'}}>Date</SalaryTd>
                            </TrHead>
                        </THead>
                        <tbody>
                            {exprenseData.map((value, key) => (
                                <SalaryTr key={key}>
                                    <SalaryTd  $bold>{value.expense.amount} Won</SalaryTd>
                                    <SalaryTd>{value.expense.category}</SalaryTd>
                                    <SalaryTd style={{justifyContent: 'start', marginLeft: '50px'}}>{value.expense.description}</SalaryTd>
                                    <SalaryTd style={{marginLeft: '-50px'}}>{value.expense.date}</SalaryTd>
                                </SalaryTr>
                            ))}
                        </tbody>
                    </>
                ) : null}
            </Table>
        </div>
    )
}

export default Salary