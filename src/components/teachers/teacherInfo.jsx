import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { teacherData } from "../mock/teacherData";
import {
    TeacherProfilePageContainer,
    TeacherProfileTabList,
    TeacherProfileTabListBtn,
} from "./style";
import TeacherProfile from "./teacherProfile";
import Groups from "./groups";
import { groupData } from "../mock/groupData";
import { incomeData } from "../mock/incomeData";
import { expenseData } from "../mock/expenseData";
import Salary from "./salary";

function TeacherInfo() {
    const { id } = useParams();
    const resultData = teacherData.maindata.find(
        (value) => value.id === parseInt(id)
    );

    const data = groupData.maindata;
    const dataIncome = incomeData.maindata;
    const dataExprense = expenseData.maindata;

    const [pages, setPages] = useState("profile");

    const renderContent = () => {
        if (pages === "profile") {
            return <TeacherProfile data={resultData} />;
        } else if (pages === "groups") {
            return <Groups data={data} />;
        } else if (pages === "salary") {
            return (
                <Salary incomeData={dataIncome} exprenseData={dataExprense} />
            );
        } else {
            return null;
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <TeacherProfilePageContainer>
                <div style={{display:"flex", }}>
                    <TeacherProfileTabList>
                        <TeacherProfileTabListBtn
                            $first
                            onClick={() => setPages("profile")}
                            selected={pages === "profile"}
                        >
                            Profile
                        </TeacherProfileTabListBtn>
                        <TeacherProfileTabListBtn
                            onClick={() => setPages("groups")}
                            selected={pages === "groups"}
                        >
                            Groups
                        </TeacherProfileTabListBtn>
                        <TeacherProfileTabListBtn
                            $second
                            $last
                            onClick={() => setPages("salary")}
                            selected={pages === "salary"}
                        >
                            Salary
                        </TeacherProfileTabListBtn>
                    </TeacherProfileTabList>
                </div>
                {renderContent()}
            </TeacherProfilePageContainer>
        </div>
    );
}

export default TeacherInfo;
