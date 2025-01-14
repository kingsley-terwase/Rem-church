import React, {useState} from "react";
import DashboardDataTab from "../../../Component/Dashboard/DashDataTab";
import DashboardCard from "../../../Component/Dashboard/DashCard";
import DashboardTab from "../../../Component/Dashboard/DashboardTab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChurchTable from "./ChurchTable";
import CreateChurch from "./CreateChurch";
import EditChurch from "./EditChurch";

const ChurchPage = () => {
    const [activeTab, setActiveTab] = useState(1);

    const updateActiveTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <DashboardTab
                activeTab={activeTab}
                updateActiveTab={updateActiveTab}
                tabs={[
                    {label: "Church", key: 1},
                    {label: "Create Church", key: 2},
                    {label: "Edit Church", key: 3},
                ]}
            >
                <DashboardDataTab tabKey={1} activeTab={activeTab}>
                    <DashboardCard>
                        <ChurchTable />
                    </DashboardCard>
                </DashboardDataTab>
                <DashboardDataTab tabKey={2} activeTab={activeTab}>
                    <DashboardCard>
                        <CreateChurch heading="Create Church" />
                    </DashboardCard>
                </DashboardDataTab>
                <DashboardDataTab tabKey={3} activeTab={activeTab}>
                    <DashboardCard>
                        <EditChurch heading="Edit Church" />
                    </DashboardCard>
                </DashboardDataTab>
            </DashboardTab>
        </>
    );
};

export default ChurchPage;
