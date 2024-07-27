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
                                <Box>
                                    <TabList
                                        onChange={handleChange}
                                        aria-label="lab API tabs example"
                                        className="tab-list"
                                        sx={{
                                            border: "2px solid #2C2669",
                                            borderRadius: "6px",
                                            height: "44px",
                                            ".MuiTabs-indicator": {
                                                display: "none",
                                            },
                                        }}
                                    >
                                        <Tab
                                            label="Income"
                                            value="1"
                                            className="tab"
                                            sx={{
                                                borderRight:
                                                    "2px solid #2C2669",
                                                width: "187px",
                                                color: "#2C2669",
                                                textTransform: "none",
                                                "&.Mui-selected": {
                                                    background: "#2C2669",
                                                    color: "#fff",
                                                },
                                            }}
                                        />
                                        <Tab
                                            label="Category"
                                            value="2"
                                            className="tab"
                                            sx={{
                                                color: "#2C2669",
                                                borderRight:
                                                    "2px solid #2C2669",
                                                textTransform: "none",
                                                width: "187px",
                                                "&.Mui-selected": {
                                                    background: "#2C2669",
                                                    color: "#fff",
                                                },
                                            }}
                                        />
                                        <Tab
                                            label="Expense"
                                            value="3"
                                            className="tab"
                                            sx={{
                                                width: "187px",
                                                textTransform: "none",
                                                color: "#2C2669",
                                                "&.Mui-selected": {
                                                    background: "#2C2669",
                                                    color: "#fff",
                                                },
                                            }}
                                        />
                                    </TabList>
                                </Box>
                                <BudgetData>
                                    <img src={data} alt="" />
                                    <div>July 23, 2023 - August 23, 2023</div>
                                </BudgetData>
                            </BudgetTopTextContainer>
                        </div>
                        <TabPanel
                            value="1"
                            className="tab-panel"
                            sx={{ padding: "0px" }}
                        >
                            <BudgetIncome />
                        </TabPanel>
                        <TabPanel
                            value="2"
                            className="tab-panel"
                            sx={{ padding: "0px" }}
                        >
                            <BudgetCategory />
                        </TabPanel>
                        <TabPanel
                            value="3"
                            className="tab-panel"
                            sx={{ padding: "0px" }}
                        >
                            <BedgetExpense />
                        </TabPanel>
                    </TabContext>
                </Box>
            </GroupsContainer>
        </div>
    );
};

export default BudgetComponent;
