import React from "react";
import { GroupName, GroupsCard, Line, StartDate } from "../teachers/style";
import {
  HistoryCardData,
  HistoryCardMyName,
  HistoryCardTop,
  HistoryGap,
} from "../students/style";

function GroupHistory({ data }) {
  return (
    <div>
      <GroupsCard
        style={{ width: "100%", marginBottom: "100px", width: "1084px" }}
      >
        <HistoryCardTop>
          <GroupName style={{ fontSize: "18px", margin:"0px" }}>Status changed</GroupName>
          <HistoryGap style={{ flexDirection: "column", alignItems: "end" }}>
            <HistoryCardData>12.09.2023 | 11:20:26</HistoryCardData>
            <HistoryCardData>Teacher Usmon</HistoryCardData>
          </HistoryGap>
        </HistoryCardTop>

        <HistoryCardMyName>Jumayev Eshbo’ri - (93) 635 42 98  </HistoryCardMyName>

        <HistoryGap>
          <StartDate>Group name:</StartDate>
          <StartDate>Facebook</StartDate>
        </HistoryGap>

        <HistoryGap>
          <StartDate>Group:</StartDate>
          <StartDate>#68125</StartDate>
        </HistoryGap>

        <HistoryGap>
          <StartDate>Current status:</StartDate>
          <HistoryCardData style={{ fontSize: "12px", fontWeight:"600" }}>Frozen</HistoryCardData>
        </HistoryGap>

        <HistoryGap>
          <StartDate>Previos status:</StartDate>
          <HistoryCardData style={{ fontSize: "12px", fontWeight:"600"  }}>Active</HistoryCardData>
        </HistoryGap>

        <Line style={{ background: "#BFBAE3", margin: "20px 0" }} />
      </GroupsCard>
    </div>
  );
}

export default GroupHistory;
