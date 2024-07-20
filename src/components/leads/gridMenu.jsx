import React, { useState } from "react";
import {
  BoxAddButton,
  BoxTitle,
  FromWhereBox,
  GridMenuWrapper,
  MoreIconWrapper,
  NumberBox,
  SectionBox,
  SectionBoxLeft,
  SectionUser,
  SectionUserLeft,
  SectionUserLeftInfo,
  SectionUserRight,
  TitleNumberWrapper,
} from "./style";

import addIcon from "../../assets/add-icon.svg";
import moreIcon from "../../assets/moreLength.svg";
import editicon from "../../assets/edit-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";
import infoIcon from "../../assets/info-icon.svg";
import chatIcon from "../../assets/chat-icon.svg";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import AddFromWhereModal from "./addFromWhereModal";
import AddSectionModal from "./addSectionModal";
import AddToGroupModal from "./addToGroupModal";
import SendSmsModal from "./sendSmsModal";

function GridMenu() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setSelectedMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedMenu(null);
  };

  const openFunction1 = () => {
    handleClose();
    setOpen3(true);
  };
  const openFunction2 = () => {
    handleClose();
    setOpen4(true);
  };

  return (
    <GridMenuWrapper>
      <FromWhereBox>
        <BoxTitle>From where</BoxTitle>
        <BoxAddButton onClick={() => setOpen(true)}>
          <img src={addIcon} alt="" />
        </BoxAddButton>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <SectionBox>
            <SectionBoxLeft>
              <p>Telegram</p>
              <span>30</span>
            </SectionBoxLeft>
            <img
              src={moreIcon}
              alt=""
              aria-controls={
                selectedMenu === "from-telegram" ? "from-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={
                selectedMenu === "from-telegram" ? "true" : undefined
              }
              onClick={(e) => handleClick(e, "from-telegram")}
            />
            <Menu
              id="from-menu"
              anchorEl={anchorEl}
              open={selectedMenu === "from-telegram"}
              onClose={handleClose}
              MenuListProps={{ "aria-labelledby": "from-button" }}
            >
              <MenuItem onClick={handleClose}>
                <img src={editicon} alt="" style={{ marginRight: "10px" }} />
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <img src={deleteIcon} alt="" style={{ marginRight: "10px" }} />
                Delete
              </MenuItem>
            </Menu>
          </SectionBox>

          <SectionBox>
            <SectionBoxLeft>
              <p>Walked by</p>
              <span>12</span>
            </SectionBoxLeft>
            <img
              src={moreIcon}
              alt=""
              aria-controls={
                selectedMenu === "from-walked-by" ? "from-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={
                selectedMenu === "from-walked-by" ? "true" : undefined
              }
              onClick={(e) => handleClick(e, "from-walked-by")}
            />
            <Menu
              id="from-menu"
              anchorEl={anchorEl}
              open={selectedMenu === "from-walked-by"}
              onClose={handleClose}
              MenuListProps={{ "aria-labelledby": "from-button" }}
            >
              <MenuItem onClick={handleClose}>
                <img src={editicon} alt="" style={{ marginRight: "10px" }} />
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <img src={deleteIcon} alt="" style={{ marginRight: "10px" }} />
                Delete
              </MenuItem>
            </Menu>
          </SectionBox>

          <SectionBox>
            <SectionBoxLeft>
              <p>Friends</p>
              <span>3</span>
            </SectionBoxLeft>
            <img
              src={moreIcon}
              alt=""
              aria-controls={
                selectedMenu === "from-friends" ? "from-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={
                selectedMenu === "from-friends" ? "true" : undefined
              }
              onClick={(e) => handleClick(e, "from-friends")}
            />
            <Menu
              id="from-menu"
              anchorEl={anchorEl}
              open={selectedMenu === "from-friends"}
              onClose={handleClose}
              MenuListProps={{ "aria-labelledby": "from-button" }}
            >
              <MenuItem onClick={handleClose}>
                <img src={editicon} alt="" style={{ marginRight: "10px" }} />
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <img src={deleteIcon} alt="" style={{ marginRight: "10px" }} />
                Delete
              </MenuItem>
            </Menu>
          </SectionBox>
        </div>
      </FromWhereBox>

      {/* ======================================================================================================================================================== */}
      <FromWhereBox>
        <BoxTitle>Sections</BoxTitle>
        <BoxAddButton onClick={() => setOpen2(true)}>
          <img src={addIcon} alt="" />
        </BoxAddButton>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <AccordionGroup sx={{ maxWidth: "100%" }}>
            <Accordion>
              <AccordionSummary>
                <TitleNumberWrapper>
                  Elementary <NumberBox>30</NumberBox>
                </TitleNumberWrapper>
              </AccordionSummary>
              <MoreIconWrapper
                src={moreIcon}
                alt=""
                aria-controls={
                  selectedMenu === "elementary" ? "basic-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={
                  selectedMenu === "elementary" ? "true" : undefined
                }
                onClick={(e) => handleClick(e, "elementary")}
              />
              <AccordionDetails sx={{ position: "relative", gap: "12px" }}>
                <SectionUser>
                  <SectionUserLeft>
                    <span>B</span>
                    <SectionUserLeftInfo>
                      <p>Shamsiddin Shoraximov</p>
                      <small>99 875 23 34</small>
                    </SectionUserLeftInfo>
                  </SectionUserLeft>
                  <SectionUserRight>
                    <img
                      src={infoIcon}
                      alt=""
                      aria-controls={
                        selectedMenu === "info-elementary"
                          ? "info-menu"
                          : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={
                        selectedMenu === "info-elementary" ? "true" : undefined
                      }
                      onClick={(e) => handleClick(e, "info-elementary")}
                    />
                    <img
                      src={moreIcon}
                      alt=""
                      aria-controls={
                        selectedMenu === "hi-elementary"
                          ? "basic-menu"
                          : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={
                        selectedMenu === "hi-elementary" ? "true" : undefined
                      }
                      onClick={(e) => handleClick(e, "hi-elementary")}
                    />
                  </SectionUserRight>
                </SectionUser>
                <SectionUser>
                  <SectionUserLeft>
                    <span>B</span>
                    <SectionUserLeftInfo>
                      <p>Shamsiddin Shoraximov</p>
                      <small>99 875 23 34</small>
                    </SectionUserLeftInfo>
                  </SectionUserLeft>
                  <SectionUserRight>
                    <img
                      src={infoIcon}
                      alt=""
                      aria-controls={
                        selectedMenu === "info-elementary"
                          ? "info-menu"
                          : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={
                        selectedMenu === "info-elementary" ? "true" : undefined
                      }
                      onClick={(e) => handleClick(e, "info-elementary")}
                    />
                    <img
                      src={moreIcon}
                      alt=""
                      aria-controls={
                        selectedMenu === "hi-elementary"
                          ? "basic-menu"
                          : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={
                        selectedMenu === "hi-elementary" ? "true" : undefined
                      }
                      onClick={(e) => handleClick(e, "hi-elementary")}
                    />
                  </SectionUserRight>
                </SectionUser>
                <SectionUser>
                  <SectionUserLeft>
                    <span>B</span>
                    <SectionUserLeftInfo>
                      <p>Shamsiddin Shoraximov</p>
                      <small>99 875 23 34</small>
                    </SectionUserLeftInfo>
                  </SectionUserLeft>
                  <SectionUserRight>
                    <img
                      src={infoIcon}
                      alt=""
                      aria-controls={
                        selectedMenu === "info-elementary"
                          ? "info-menu"
                          : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={
                        selectedMenu === "info-elementary" ? "true" : undefined
                      }
                      onClick={(e) => handleClick(e, "info-elementary")}
                    />
                    <img
                      src={moreIcon}
                      alt=""
                      aria-controls={
                        selectedMenu === "hi-elementary"
                          ? "basic-menu"
                          : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={
                        selectedMenu === "hi-elementary" ? "true" : undefined
                      }
                      onClick={(e) => handleClick(e, "hi-elementary")}
                    />
                  </SectionUserRight>
                </SectionUser>
              </AccordionDetails>

              {/* Section menu */}
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={selectedMenu === "elementary"}
                onClose={handleClose}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                <MenuItem onClick={handleClose}>
                  <img src={editicon} alt="" style={{ marginRight: "10px" }} />
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img
                    src={deleteIcon}
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  Delete
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img src={addIcon} alt="" style={{ marginRight: "5px" }} />
                  Create group
                </MenuItem>
              </Menu>

              {/* userinfo menu */}
              <Menu
                id="info-menu"
                className="longMenu"
                anchorEl={anchorEl}
                open={selectedMenu === "info-elementary"}
                onClose={handleClose}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                <MenuItem onClick={handleClose}>
                  <p style={{ fontSize: "14px", color: "#6053B9" }}>
                    Shoraximov Shamsiddin
                  </p>
                  <p style={{ color: "#BFBAE3", fontSize: "12px" }}>
                    Full name
                  </p>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <p style={{ fontSize: "14px", color: "#6053B9" }}>
                    99 999 99 99
                  </p>
                  <p style={{ color: "#BFBAE3", fontSize: "12px" }}>
                    Phone number
                  </p>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <p style={{ fontSize: "14px", color: "#6053B9" }}>
                    01.01.2024
                  </p>
                  <p style={{ color: "#BFBAE3", fontSize: "12px" }}>Updated</p>
                </MenuItem>
              </Menu>

              {/* Item menu */}
              <Menu
                id="hi-menu"
                anchorEl={anchorEl}
                open={selectedMenu === "hi-elementary"}
                onClose={handleClose}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                <MenuItem onClick={handleClose}>
                  <img src={editicon} alt="" style={{ marginRight: "10px" }} />
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img
                    src={deleteIcon}
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  Delete
                </MenuItem>
                <MenuItem onClick={openFunction2}>
                  <img src={chatIcon} alt="" style={{ marginRight: "5px" }} />
                  Sms
                </MenuItem>
                <MenuItem onClick={openFunction1}>
                  <img src={addIcon} alt="" style={{ marginRight: "5px" }} />
                  Add to group
                </MenuItem>
              </Menu>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                <TitleNumberWrapper>
                  Beginner <NumberBox>15</NumberBox>
                </TitleNumberWrapper>
              </AccordionSummary>
              <MoreIconWrapper
                src={moreIcon}
                alt=""
                aria-controls={
                  selectedMenu === "elementary" ? "basic-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={
                  selectedMenu === "elementary" ? "true" : undefined
                }
                onClick={(e) => handleClick(e, "elementary")}
              />
              <AccordionDetails sx={{ position: "relative" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                <TitleNumberWrapper>
                  Intermediate <NumberBox>26</NumberBox>
                </TitleNumberWrapper>
              </AccordionSummary>
              <MoreIconWrapper
                src={moreIcon}
                alt=""
                aria-controls={
                  selectedMenu === "elementary" ? "basic-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={
                  selectedMenu === "elementary" ? "true" : undefined
                }
                onClick={(e) => handleClick(e, "elementary")}
              />
              <AccordionDetails sx={{ position: "relative" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={selectedMenu === "intermediate"}
                onClose={handleClose}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                <MenuItem onClick={handleClose}>
                  <img src={editicon} alt="" style={{ marginRight: "10px" }} />
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img
                    src={deleteIcon}
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  Delete
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img src={addIcon} alt="" style={{ marginRight: "5px" }} />
                  Create group
                </MenuItem>
              </Menu>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                <TitleNumberWrapper>
                  Pre - Inter <NumberBox>8</NumberBox>
                </TitleNumberWrapper>
              </AccordionSummary>
              <MoreIconWrapper
                src={moreIcon}
                alt=""
                aria-controls={
                  selectedMenu === "elementary" ? "basic-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={
                  selectedMenu === "elementary" ? "true" : undefined
                }
                onClick={(e) => handleClick(e, "elementary")}
              />
              <AccordionDetails sx={{ position: "relative" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={selectedMenu === "intermediate"}
                onClose={handleClose}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                <MenuItem onClick={handleClose}>
                  <img src={editicon} alt="" style={{ marginRight: "10px" }} />
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img
                    src={deleteIcon}
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  Delete
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img src={addIcon} alt="" style={{ marginRight: "5px" }} />
                  Create group
                </MenuItem>
              </Menu>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                <TitleNumberWrapper>
                  Informatika<NumberBox>4</NumberBox>
                </TitleNumberWrapper>
              </AccordionSummary>
              <MoreIconWrapper
                src={moreIcon}
                alt=""
                aria-controls={
                  selectedMenu === "elementary" ? "basic-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={
                  selectedMenu === "elementary" ? "true" : undefined
                }
                onClick={(e) => handleClick(e, "elementary")}
              />
              <AccordionDetails sx={{ position: "relative" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={selectedMenu === "intermediate"}
                onClose={handleClose}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                <MenuItem onClick={handleClose}>
                  <img src={editicon} alt="" style={{ marginRight: "10px" }} />
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img
                    src={deleteIcon}
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  Delete
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img src={addIcon} alt="" style={{ marginRight: "5px" }} />
                  Create group
                </MenuItem>
              </Menu>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                <TitleNumberWrapper>
                  Matematika<NumberBox>26</NumberBox>
                </TitleNumberWrapper>
              </AccordionSummary>
              <MoreIconWrapper
                src={moreIcon}
                alt=""
                aria-controls={
                  selectedMenu === "elementary" ? "basic-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={
                  selectedMenu === "elementary" ? "true" : undefined
                }
                onClick={(e) => handleClick(e, "elementary")}
              />
              <AccordionDetails sx={{ position: "relative" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={selectedMenu === "intermediate"}
                onClose={handleClose}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                <MenuItem onClick={handleClose}>
                  <img src={editicon} alt="" style={{ marginRight: "10px" }} />
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img
                    src={deleteIcon}
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  Delete
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img src={addIcon} alt="" style={{ marginRight: "5px" }} />
                  Create group
                </MenuItem>
              </Menu>
            </Accordion>
            <Accordion>
              <AccordionSummary>
                <TitleNumberWrapper>
                  Matematika<NumberBox>26</NumberBox>
                </TitleNumberWrapper>
              </AccordionSummary>
              <MoreIconWrapper
                src={moreIcon}
                alt=""
                aria-controls={
                  selectedMenu === "elementary" ? "basic-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={
                  selectedMenu === "elementary" ? "true" : undefined
                }
                onClick={(e) => handleClick(e, "elementary")}
              />
              <AccordionDetails sx={{ position: "relative" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={selectedMenu === "intermediate"}
                onClose={handleClose}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                <MenuItem onClick={handleClose}>
                  <img src={editicon} alt="" style={{ marginRight: "10px" }} />
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img
                    src={deleteIcon}
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  Delete
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <img src={addIcon} alt="" style={{ marginRight: "5px" }} />
                  Create group
                </MenuItem>
              </Menu>
            </Accordion>
          </AccordionGroup>
        </div>
      </FromWhereBox>

      {/* modals */}
      <AddFromWhereModal open={open} setOpen={setOpen} />
      <AddSectionModal open={open2} setOpen={setOpen2} />
      <AddToGroupModal open={open3} setOpen={setOpen3} />
      <SendSmsModal open={open4} setOpen={setOpen4} />
    </GridMenuWrapper>
  );
}

export default GridMenu;
