import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import {blue, green, red} from "@mui/material/colors";
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer} from "recharts";
import {DataGrid} from "@mui/x-data-grid";


const FinancialStat = ({rows, columns, heading, chartData}) => {
    return (
      <Box sx={{ bgcolor: "#f5f6fa", borderRadius: "40px", minHeight: "100vh", p: 3 }}>
        <Typography variant="h6" sx={{ pb: "1rem",}} color="initial">{heading}</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={3}
                        sx={{p: 3, backgroundColor: "#0a0812", borderLeft: `6px solid ${green[500]}`, height: "100%"}}
                    >
                        <Typography variant="subtitle1" color="#fff">
                            Total Income
                        </Typography>
                        <Typography variant="h5" fontWeight="bold" color={green[600]}>
                            $18,500
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={3}
                        sx={{p: 3, backgroundColor: "#0a0812", borderLeft: `6px solid ${red[500]}`, height: "100%"}}
                    >
                        <Typography variant="subtitle1" color="#fff">
                            Total Expense
                        </Typography>
                        <Typography variant="h5" fontWeight="bold" color={red[600]}>
                            $8,900
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={3}
                        sx={{p: 3, backgroundColor: "#0a0812", borderLeft: `6px solid ${blue[500]}`, height: "100%"}}
                    >
                        <Typography variant="subtitle1" color="#fff">
                            Net Savings
                        </Typography>
                        <Typography variant="h5" fontWeight="bold" color={blue[600]}>
                            $9,600
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={3} sx={{p: 3, height: 400}}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Monthly Financial Overview
                        </Typography>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="income" stroke={green[500]} strokeWidth={2} />
                                <Line type="monotone" dataKey="expense" stroke={red[500]} strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={3} sx={{p: 3}}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="h6" fontWeight="bold">
                                Recent Transactions
                            </Typography>
                            <Button variant="contained" color="primary">
                                View All
                            </Button>
                        </Stack>
                        <Divider sx={{my: 2}} />
                        <Box sx={{height: 400}}>
                            <DataGrid rows={rows} columns={columns} pageSize={5} />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FinancialStat;
