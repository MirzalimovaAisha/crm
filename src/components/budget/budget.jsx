import React from "react";
import "../../index.css";

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
import { BudgetData, BudgetTopTextContainer } from "./style";
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
              <BudgetTopTextContainer>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    '.css-1aquho2-MuiTabs-indicator': {
                      display: "none",
                    },
                    '.css-heg063-MuiTabs-flexContainer': {
                      height: "44px",
                    },
                    '.css-jpln7h-MuiTabs-scroller': {
                      border: "2px solid var(--600, #2C2669)",
                      borderRadius: "6px",
                      transition: "all 0.2s",
                    },
                    '.css-1h9z7r5-MuiButtonBase-root-MuiTab-root': {
                      width: "187px",
                      color: "#2C2669 !important",
                      fontSize: "14px !important",
                      fontWeight: "500 !important",
                      transition: "all 0.2s",
                      fontFamily: "Public Sans !important",
                      textTransform: "none !important",
                      letterSpacing: "0 !important",
                      minHeight: "auto !important",
                    },
                    '.css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected': {
                      transition: "all 0.2s",
                      background: "#2C2669 !important",
                      color: "#fff !important",
                    },
                    '.css-13xfq8m-MuiTabPanel-root': {
                      padding: "30px 0px 0px !important",
                    },
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    className="tab-list"
                  >
                    <Tab label="Income" value="1" className="tab" style={{borderRight:"2px solid #2C2669"}}/>
                    <Tab label="Category" value="2" className="tab" style={{borderRight:"2px solid #2C2669"}}/>
                    <Tab label="Expense" value="3" className="tab" />
                  </TabList>
                </Box>
                <BudgetData>
                  <img src={data} alt="" />
                  <div>July 23, 2023 - August 23, 2023</div>
                </BudgetData>
              </BudgetTopTextContainer>
            </div>
            <TabPanel value="1" className="tab-panel" sx={{padding:"0px"}}>
              <BudgetIncome />
            </TabPanel>
            <TabPanel value="2" className="tab-panel"  sx={{padding:"0px"}}>
              <BudgetCategory />
            </TabPanel>
            <TabPanel value="3" className="tab-panel" sx={{padding:"0px"}}>
              <BedgetExpense />
            </TabPanel>
          </TabContext>
        </Box>
      </GroupsContainer>
    </div>
  );
};

export default BudgetComponent;
