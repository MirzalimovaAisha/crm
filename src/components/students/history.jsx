import React from "react";
import { GroupName, GroupsCard, Line, StartDate } from "../teachers/style";
import {
  HistoryCardData,
  HistoryCardMyName,
  HistoryCardTop,
  HistoryGap,
} from "./style";

function History({ data }) {
  return (
    <GroupsCard style={{ width: "100%" }}>
      <HistoryCardTop>
        <GroupName style={{ fontSize: "20px" }}>Status changed</GroupName>
        <HistoryGap style={{ flexDirection: "column", alignItems: "end" }}>
          <HistoryCardData>
            {data.student.status.date} | {data.student.status.time}
          </HistoryCardData>
          <HistoryCardData>{data.student.teacher}</HistoryCardData>
        </HistoryGap>
      </HistoryCardTop>

      <HistoryCardMyName>
        {data.student.name} - {data.student.tel}
      </HistoryCardMyName>

      <HistoryGap>
        <StartDate>Group name:</StartDate>
        <StartDate>{data.student.groupName.join(", ")}</StartDate>
      </HistoryGap>

      <HistoryGap>
        <StartDate>Group:</StartDate>
        <StartDate>{data.student.group}</StartDate>
      </HistoryGap>

      <HistoryGap>
        <StartDate>Current status:</StartDate>
        <HistoryCardData style={{ fontSize: "14px" }}>
          {data.student.currentStatus}
        </HistoryCardData>
      </HistoryGap>

      <HistoryGap>
        <StartDate>Previos status:</StartDate>
        <HistoryCardData style={{ fontSize: "14px" }}>
          {data.student.previosStatus}
        </HistoryCardData>
      </HistoryGap>

      <Line style={{ background: "#BFBAE3", margin: "20px 0" }} />
    </GroupsCard>
  );
}

export default History;
