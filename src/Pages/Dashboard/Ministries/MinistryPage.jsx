import React, {useState} from "react";
import DashboardDataTab from "../../../Component/Dashboard/DashDataTab";
import DashboardCard from "../../../Component/Dashboard/DashCard";
import DashboardTab from "../../../Component/Dashboard/DashboardTab";
import MinistryTable from "./MinistryTable";
import EditMinistry from "./EditMinistry";
import CreateMinistry from "./CreateMinistry";

const MinistryPage = () => {
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
                    {label: "Ministry", key: 1},
                    {label: "Create Ministry", key: 2},
                    {label: "Edit Ministry", key: 3},
                ]}
            >
                <DashboardDataTab tabKey={1} activeTab={activeTab}>
                    <DashboardCard>
                        <MinistryTable />
                    </DashboardCard>
                </DashboardDataTab>
                <DashboardDataTab tabKey={2} activeTab={activeTab}>
                    <DashboardCard>
                        <CreateMinistry heading="Create Ministry" />
                    </DashboardCard>
                </DashboardDataTab>
                <DashboardDataTab tabKey={3} activeTab={activeTab}>
                    <DashboardCard>
                        <EditMinistry heading="Edit Ministry" />
                    </DashboardCard>
                </DashboardDataTab>
            </DashboardTab>
        </>
    );
};

export default MinistryPage;
