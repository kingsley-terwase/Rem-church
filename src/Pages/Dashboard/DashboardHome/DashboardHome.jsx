import React from "react";
import Box from "@mui/material/Box";
import DashboardCards from "../../../Component/Dashboard/DashboardCards";
import SalesOverview from "../../../Component/Dashboard/DataOverview";
import Typography from '@mui/material/Typography';
const DashboardHome = () => {
    return (
        <>
            <Box>
                <DashboardCards />
                <SalesOverview />
                <Box textAlign="center" mt={1} py={2} borderTop="1px solid #ddd">
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Reformed Evangelical Church Mission | 19, Gyado Hospital Road, Box
                        971 Gboko, Benue State. | 070 2389 4970
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default DashboardHome;
