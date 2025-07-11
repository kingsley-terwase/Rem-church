import React from "react";
import Box from "@mui/material/Box";
import DashboardCards from "../../../Component/Dashboard/DashboardCards";
import SalesOverview from "../../../Component/Dashboard/DataOverview";
import Typography from "@mui/material/Typography";
import { CustomTable } from "../../../Component";
import { useAutoLogout } from "../../../Hooks/auth";

const DashboardHome = () => {
    useAutoLogout()
    return (
        <>
            <Box>
                <DashboardCards />
                <CustomTable />
            </Box>
        </>
    );
};

export default DashboardHome;
