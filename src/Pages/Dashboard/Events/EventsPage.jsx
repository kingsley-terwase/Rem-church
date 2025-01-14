import React, {useState} from "react";
import DashboardDataTab from "../../../Component/Dashboard/DashDataTab";
import DashboardCard from "../../../Component/Dashboard/DashCard";
import DashboardTab from "../../../Component/Dashboard/DashboardTab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChurchEventsTable from "./ChurchEventsTable";
import EventForm from "./CreateEvent";
import EditEvent from "./EditEvent";
import CreateEvent from "./CreateEvent";

const Index = () => {
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
                    {label: "Events", key: 1},
                    {label: "Add Events", key: 2},
                    {label: "Edit Events", key: 3},
                ]}
            >
                <DashboardDataTab tabKey={1} activeTab={activeTab}>
                    <DashboardCard>
                        <ChurchEventsTable />
                    </DashboardCard>
                </DashboardDataTab>
                <DashboardDataTab tabKey={2} activeTab={activeTab}>
                    <DashboardCard>
                        <CreateEvent heading="Create Event" />
                    </DashboardCard>
                </DashboardDataTab>
                <DashboardDataTab tabKey={3} activeTab={activeTab}>
                    <DashboardCard>
                        <EditEvent heading="Edit Event" />
                    </DashboardCard>
                </DashboardDataTab>
            </DashboardTab>
        </>
    );
};

export default Index;
