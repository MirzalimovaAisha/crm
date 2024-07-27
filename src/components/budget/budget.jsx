import React from "react";
import "../../index.css"

// ======== style ====
import { GroupsContainer } from "../groups/style";

// ====== img ======
import data from "../../assets/calendar.svg";
import downIcon from "../../assets/add-icon2.svg";

// ======= mui ==========
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { BudgetData, BudgetTopText, BudgetTopTextContainer } from "./style";
import BudgetIncome from "./budget-Income";
import BudgetCategory from "./budget-Category";
import BedgetExpense from "./budget-Expense";

const BudgetComponent = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <GroupsContainer>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <div>
              <BudgetTopTextContainer $jus>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      label="Income"
                      value="1"
                      style={{ borderRight: "2px solid #2C2669" }}
                    />
                    <Tab
                      label="Category"
                      value="2"
                      style={{ borderRight: "2px solid #2C2669" }}
                    />
                    <Tab label="Expense" value="3" />
                  </TabList>
                </Box>
                <BudgetData>
                  <img src={data} alt="" />
                  <div>July 23, 2023 - August 23, 2023</div>
                </BudgetData>
              </BudgetTopTextContainer>
            </div>
            <TabPanel value="1">
              <BudgetIncome />
            </TabPanel>
            <TabPanel value="2">
              <BudgetCategory />
            </TabPanel>
            <TabPanel value="3">
                <BedgetExpense />
            </TabPanel>
          </TabContext>
        </Box>
      </GroupsContainer>
    </div>
  );
};

export default BudgetComponent;
