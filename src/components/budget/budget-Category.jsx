import React from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from '../groups/style'
import { CategoryIcon, CategoryIconButton } from './style'
import editIcon from "../../assets/pencil-icon.svg"
import deliteIcon from "../../assets/trash.svg"

const BudgetCategory = () => {
  return (
    <div>
        <Table>
            <Thead>
                <Tr $header>
                    <Th></Th>
                    <Th style={{padding:"0px 65px"}}>Category</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td $bold $purple>1</Td>
                    <Td style={{padding:"0px 65px", width:"836px"}}>Office ishlari uchun</Td>
                    <Td $center style={{width:"204px", gap:"20px"}}>
                        <CategoryIconButton><img src={editIcon} alt="edit" /></CategoryIconButton>
                        <CategoryIconButton $trash><img src={deliteIcon} alt="delit" /></CategoryIconButton>
                    </Td>
                </Tr>
                <Tr>
                    <Td $bold $purple>2</Td>
                    <Td style={{padding:"0px 65px", width:"836px"}}>Sababsiz ishlatilgan mablag’lar</Td>
                    <Td $center style={{width:"204px", gap:"20px"}}>
                        <CategoryIconButton><img src={editIcon} alt="edit" /></CategoryIconButton>
                        <CategoryIconButton $trash><img src={deliteIcon} alt="delit" /></CategoryIconButton>
                    </Td>
                </Tr>
            </Tbody>
        </Table>
    </div>
  )
}

export default BudgetCategory