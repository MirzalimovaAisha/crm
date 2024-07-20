import React, { useState } from "react";

// =========== styles =============
import {
  AddLead,
  Icon,
  LeadsContainer,
  LeadsNavbar,
  Menu,
  MenuWrapper,
  ResetFilter,
  SearchSection,
  SearchSectionOption,
  SearchStudent,
} from "./style";

// ============ img =============
import vMenu from "../../assets/vMenu.svg";
import gridMenu from "../../assets/gridMenu.svg";
import searchIcon from "../../assets/search-icon.svg";
import resetIcon from "../../assets/reset-icon.svg";
import plusIcon from "../../assets/plus-icon.svg";
// active
import vMenuActive from "../../assets/vMenu-active.svg";
import gridMenuActive from "../../assets/gridMenu-active.svg";

import GridMenu from "./gridMenu";
import VMenu from "./vMenu";
import AddNewLeadModal from "./addNewLeadModal";

import { Option, Select, selectClasses } from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";

function Leads() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeVMenu, setActiveVMenu] = useState(false);
  const [activeGridMenu, setActiveGridMenu] = useState(true);

  function handleMenuClick() {
    setActiveMenu(true);
    setActiveVMenu(false);
    setActiveGridMenu(true); // gridMenu 활성화
  }

  function handleGridMenu() {
    setActiveMenu(false);
    setActiveVMenu(true);
    setActiveGridMenu(false); // gridMenu 비활성화
  }

  //====================== reset button ===================
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    section: "",
    source: "",
  });

  const resetFilters = () => {
    setFilters({
      search: "",
      category: "",
      section: "",
      source: "",
    });
  };

  const handleFilterChange = (e, name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <LeadsContainer>
        <LeadsNavbar>
          <MenuWrapper>
            <Menu $vmenu onClick={handleGridMenu} active={!activeMenu}>
              <Icon
                src={activeVMenu ? vMenuActive : vMenu}
                alt="Vertical Menu"
                active={!activeMenu}
              />
            </Menu>
            <Menu onClick={handleMenuClick} active={activeMenu}>
              <Icon
                src={activeGridMenu ? gridMenuActive : gridMenu}
                alt="Grid Menu"
                active={activeMenu}
              />
            </Menu>
          </MenuWrapper>

          <SearchStudent>
            <img src={searchIcon} alt="" />
            <input
              type="text"
              placeholder="Search student..."
              name="search"
              value={filters.search}
              style={{border:"none"}}
              onChange={(e) => handleFilterChange(e, "search", e.target.value)}
            />
          </SearchStudent>

          <Select
            placeholder="Select Course"
            name="category"
            value={filters.category}
            onChange={(e, value) => handleFilterChange(e, "category", value)}
            indicator={<KeyboardArrowDown />}
            sx={{
              width: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              border: "1px solid #BFBAE3",
              background: "#fff",
              color: "#BFBAE3",
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            <Option value="elementary">Elementary</Option>
            <Option value="beginner">Beginner</Option>
          </Select>

          <Select
            placeholder="From where"
            name="source"
            value={filters.source}
            onChange={(e, value) => handleFilterChange(e, "source", value)}
            indicator={<KeyboardArrowDown />}
            sx={{
              width: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              border: "1px solid #BFBAE3",
              background: "#fff",
              color: "#BFBAE3",
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            <Option value="telegram">Telegram</Option>
            <Option value="instagram">Instagram</Option>
            <Option value="twitter">Twitter</Option>
          </Select>

          <ResetFilter onClick={resetFilters}>
            <img src={resetIcon} alt="Reset Icon" />
            Reset filter
          </ResetFilter>

          <AddLead onClick={() => setOpen(true)}>
            <img src={plusIcon} alt="" />
            Add lead
          </AddLead>
        </LeadsNavbar>

        {activeMenu ? <GridMenu /> : <VMenu />}

        <AddNewLeadModal open={open} setOpen={setOpen} />
      </LeadsContainer>
    </div>
  );
}

export default Leads;
