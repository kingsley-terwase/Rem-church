import React, {useState} from "react";
import DashboardDataTab from "../../../Component/Dashboard/DashDataTab";
import DashboardCard from "../../../Component/Dashboard/DashCard";
import DashboardTab from "../../../Component/Dashboard/DashboardTab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FinancialStat from "./FinancialStat";
import { chartData, columns, rows } from "./static";

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
                    {label: "Gboko North Statistics", key: 1},
                    {label: "Rem Buruku Statistics", key: 2},
                    {label: "Rem Yandev Statistics", key: 3},
                ]}
            >
                <DashboardDataTab tabKey={1} activeTab={activeTab}>
                    <DashboardCard>
                        <FinancialStat heading="Rem Gboko North Financial Statistics" rows={rows} columns={columns} chartData={chartData} />
                    </DashboardCard>
                </DashboardDataTab>
                <DashboardDataTab tabKey={2} activeTab={activeTab}>
                    <DashboardCard>
                        <FinancialStat heading="Rem Buruku Financial Statistics" rows={rows} columns={columns} chartData={chartData} />
                    </DashboardCard>
                </DashboardDataTab>
                <DashboardDataTab tabKey={3} activeTab={activeTab}>
                    <DashboardCard>
                        <FinancialStat heading="Rem Yandev Financial Statistics" rows={rows} columns={columns} chartData={chartData} />
                    </DashboardCard>
                </DashboardDataTab>
            </DashboardTab>
        </>
    );
};

export default Index;
