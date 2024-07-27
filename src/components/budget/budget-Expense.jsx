import React from "react";
import { BudgetTopText, BudgetTopTextContainer } from "./style";
import { AddTeacherButton } from "../teachers/style";

import plus from "../../assets/plus-icon.svg";
import { Table, Tbody, Td, Th, Thead, Tr } from "../groups/style";
import { budgetExpenseData } from "../mock/budget-expenseData";

import menuIcon from "../../assets/More.svg"

const BedgetExpense = () => {
  const data = budgetExpenseData.maindata
  return (
    <div style={{marginBottom:"100px"}}>
      <BudgetTopTextContainer
        style={{
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <BudgetTopText $dark>
            Total expense
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M14.9996 16.4645L21.1869 10.2773L22.9546 12.0451L14.9996 20.0001L7.04468 12.0451L8.81245 10.2773L14.9996 16.4645Z"
                fill="#2C2669"
              />
              <path
                d="M14.9996 16.4645L21.1869 10.2773L22.9546 12.0451L14.9996 20.0001L7.04468 12.0451L8.81245 10.2773L14.9996 16.4645Z"
                fill="black"
                fill-opacity="0.2"
              />
            </svg>
          </BudgetTopText>
          <BudgetTopText>900.000 UZS</BudgetTopText>
        </div>
        <AddTeacherButton>
          <img src={plus} alt="" width={"16px"} />
          Create new expense
        </AddTeacherButton>
      </BudgetTopTextContainer>

      <Table>
        <Thead>
            <Tr $header $hoverNone>
                <Th $center style={{width:"135px"}}>Date</Th>
                <Th  style={{width:"169px"}}>Amount</Th>
                <Th  style={{width:"169px"}}>Category</Th>
                <Th  style={{width:"218px", padding:"0px 44px"}}>Description</Th>
                <Th  style={{width:"169px"}}>Payee</Th>
                <Th  style={{width:"167px"}}>Payment method</Th>
                <Th style={{width:"57px"}}></Th>
            </Tr>
        </Thead>
        <Tbody>
        {data.map((value)=> {
          return(
            <Tr>
              <Td $center style={{width:"135px"}}>{value.expense.data}</Td>
              <Td $bold $purple style={{width:"169px", gap:"3px"}}>{value.expense.amount}
                <div style={{color:"#6053B9", fontSize:"12px", fontWeight:"400"}}>UZS</div>
              </Td>
              <Td style={{width:"169px"}}>{value.expense.category}</Td>
              <Td style={{width:"218px", padding:"0px 20px 0px 44px", lineHeight:"16px"}}>{value.expense.description}</Td>
              <Td style={{width:"169px"}}>{value.expense.payee}</Td>
              <Td style={{width:"169px"}}>{value.expense.payment}</Td>
              <Td style={{width:"57px"}}>
                <img src={menuIcon} alt="menu" />
              </Td>
            </Tr>
          )
        })}
        </Tbody>
        </Table>
    </div>
  );
};

export default BedgetExpense;
