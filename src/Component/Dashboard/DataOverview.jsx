import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { FONT_FAMILY } from "../../Config/Fonts";
import { cyan } from "@mui/material/colors";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesOverview = () => {
    const salesData = {
        labels: ["January", "February", "March", "April", "May", "June", "july"], 
        datasets: [
            {
                label: "Revenue",
                data: [1200, 1900, 3000, 5000, 2300, 7000, 8000],
                borderColor: "#4CAF50",
                backgroundColor: "rgba(76, 175, 80, 0.2)",
                tension: 0.5,
                fill: true,
            },
        ],
    };

    const metrics = [
        {label: "Total Income", value: "$15,000"},
        {label: "New Members", value: "120"},
        {label: "Additional Ministries", value: "30"},
        {label: "Total Revenue", value: "$75,000"},
    ];

    return (
        <Box sx={{ py: "4rem"}}>
            <Typography variant="h6" sx={{ fontWeight: "600", fontFamily:FONT_FAMILY.primary, marginBottom: 2}}>
                Total Overview
            </Typography>
            <Grid container spacing={2}>
                {metrics.map((metric, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{backgroundColor: "#0a0812", color: cyan[500], textAlign: "center", boxShadow: 3}}>
                            <CardContent sx={{ px: "0",}}>
                                <Typography variant="body2" sx={{ color: cyan[500], fontFamily: FONT_FAMILY.primary, fontWeight: "500"}} color="text.secondary">
                                    {metric.label}
                                </Typography>
                                <Typography variant="h6" sx={{fontWeight: "bold",  fontFamily: FONT_FAMILY.primary,  marginTop: 1}}>
                                    {metric.value}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Card sx={{boxShadow: 3}}>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontFamily: FONT_FAMILY.primary, marginBottom: 2}}>
                                Monthly Revenue
                            </Typography>
                            <Line
                                data={salesData}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            display: true,
                                            position: "top",
                                        },
                                    },
                                }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SalesOverview;
