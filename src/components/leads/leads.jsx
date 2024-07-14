import React from "react";
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

import vMenu from "../../assets/vmenu-icon.svg";
import gridMenu from "../../assets/gridMenu-icon.svg";
import searchIcon from "../../assets/search-icon.svg";
import resetIcon from "../../assets/reset-icon.svg";
import plusIcon from "../../assets/plus-icon.svg";
import GridMenu from "./gridMenu";
import VMenu from "./vMenu";
import AddNewLeadModal from "./addNewLeadModal";

function Leads() {
    const [open, setOpen] = React.useState(false);
    const [activeMenu, setActiveMenu] = React.useState(true);

    function handleMenuClick() {
        setActiveMenu(true);
    }

    function handleGridMenu() {
        setActiveMenu(false);
    }
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <LeadsContainer>
                <LeadsNavbar>
                    <MenuWrapper>
                        <Menu
                            $vmenu
                            onClick={handleGridMenu}
                            active={!activeMenu}
                        >
                            <Icon
                                src={vMenu}
                                alt="Vertical Menu"
                                active={!activeMenu}
                            />
                        </Menu>
                        <Menu onClick={handleMenuClick} active={activeMenu}>
                            <Icon
                                src={gridMenu}
                                alt="Grid Menu"
                                active={activeMenu}
                            />
                        </Menu>
                    </MenuWrapper>

                    <SearchStudent>
                        <img src={searchIcon} alt="" />
                        <input type="text" placeholder="Search student..." />
                    </SearchStudent>

                    <SearchSection>
                        <SearchSectionOption value="1">
                            Search lead section
                        </SearchSectionOption>
                        <SearchSectionOption value="2">
                            Elementary
                        </SearchSectionOption>
                        <SearchSectionOption value="3">
                            Beginner
                        </SearchSectionOption>
                    </SearchSection>

                    <SearchSection>
                        <SearchSectionOption value="1">
                            From where
                        </SearchSectionOption>
                        <SearchSectionOption value="2">
                            Telegram
                        </SearchSectionOption>
                    </SearchSection>

                    <ResetFilter>
                        <img src={resetIcon} alt="" />
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
