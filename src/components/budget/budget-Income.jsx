import React from "react";
import { CircleIcon, Table, Tbody, Td, Th, Thead, Tr } from "../groups/style";
import { budgetIncomeData } from "../mock/budget-incomeData";
import { BudgetTopText, BudgetTopTextContainer } from "./style";

const BudgetIncome = () => {
  const data = budgetIncomeData.maindata;
  return (
    <div style={{marginBottom:"100px"}}>
      <BudgetTopTextContainer $total>
        <BudgetTopText $dark>
          Total income
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
        <BudgetTopText>70.000 UZS</BudgetTopText>
      </BudgetTopTextContainer>
      <Table>
        <Thead>
          <Tr $header $hoverNone>
            <Th style={{ width: "275px", padding: "0px 30px" }}>Full name</Th>
            <Th $center style={{ width: "135px" }}>
              Date
            </Th>
            <Th style={{ width: "169px" }}>Amount</Th>
            <Th style={{ width: "169px" }}>Group</Th>
            <Th style={{ width: "169px" }}>Payee</Th>
            <Th style={{ width: "167px" }}>Payment method</Th>
          </Tr>
        </Thead>

        {data.map((value) => {
          return (
            <Tbody>
              <Tr>
                <Td $bold $purple style={{ width: "275px" }}>
                  <CircleIcon>
                    {value.income.photo ? (
                      <img src={value.income.photo} />
                    ) : (
                      value.income.name[0]
                    )}
                  </CircleIcon>
                  <div>{value.income.name}</div>
                </Td>
                <Td $center style={{ width: "135px" }}>
                  {value.income.data}
                </Td>
                <Td $bold $purple style={{ width: "169px", gap: "3px" }}>
                  {value.income.amount}
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#6053B9",
                      fontWeight: "400",
                    }}
                  >
                    UZS
                  </div>
                </Td>
                <Td style={{ width: "169px" }}>{value.income.group}</Td>
                <Td style={{ width: "169px" }}>{value.income.payee}</Td>
                <Td $bold $purple style={{ width: "167px" }}>
                  {value.income.payment}
                </Td>
              </Tr>
            </Tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default BudgetIncome;
