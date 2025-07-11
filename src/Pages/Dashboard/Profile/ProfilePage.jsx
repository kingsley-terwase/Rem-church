import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {Link} from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import BarChartIcon from "@mui/icons-material/BarChart";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CircularProgress from "@mui/material/CircularProgress";
import {useUserProfile} from "../../../Hooks/auth";

const ProfilePage = () => {
    const {profile, loading} = useUserProfile();

    return (
        <Box sx={{minHeight: "100vh", bgcolor: "#f4f6f8", p: 3}}>
            <Box
                sx={{
                    bgcolor: "white",
                    p: 3,
                    borderRadius: 2,
                    mb: 3,
                    boxShadow: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box>
                    <Typography variant="h5" fontWeight="bold" color="text.primary">
                        You're Welcome Here!
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Manage the entire church platform
                    </Typography>
                </Box>
                <IconButton color="primary">
                    <SettingsIcon />
                </IconButton>
            </Box>

            {/* Profile Card */}
            <Card
                sx={{
                    p: 3,
                    mb: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: 2,
                    borderRadius: 2,
                }}
            >
                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                        <CircularProgress />
                    </Box>
                ) : profile ? (
                    <Box display="flex" alignItems="center">
                        <Avatar src={profile.avatar} alt={profile.firstName} sx={{width: 120, height: 120, mr: 3}} />
                        <Box>
                            <Typography variant="h6" fontWeight="bold" color="text.primary">
                                {profile.firstname}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Email: {profile.email}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Bio: {profile.bio}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Role: {profile.role}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Last Login:{profile.updated_at}
                            </Typography>
                        </Box>
                    </Box>
                ) : (
                    <Typography variant="body1" color="text.secondary">
                        Unable to fetch profile information.
                    </Typography>
                )}
                <Link to="/dashboard/edit-profile" style={{textDecoration: "none"}}>
                    <Button variant="contained" color="primary" startIcon={<EditIcon />}>
                        Edit Profile
                    </Button>
                </Link>
            </Card>

            {/* Quick Stats */}
            <Grid container spacing={3} sx={{mb: 4}}>
                {[
                    {icon: <BarChartIcon />, label: "Total Members", value: "1,245", color: "#3f51b5"},
                    {icon: <PersonIcon />, label: "Admins", value: "68", color: "#4caf50"},
                    {
                        icon: <FiberManualRecordOutlinedIcon />,
                        label: "Monthly Donations",
                        value: "$25,400",
                        color: "#f57c00",
                    },
                    {icon: <PendingActionsIcon />, label: "Pending Approvals", value: "45", color: "#e53935"},
                ].map((stat, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                p: 3,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                boxShadow: 2,
                                borderRadius: 2,
                                bgcolor: stat.color,
                                color: "white",
                            }}
                        >
                            {stat.icon}
                            <Typography variant="h6" fontWeight="bold">
                                {stat.value}
                            </Typography>
                            <Typography variant="body2">{stat.label}</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Recent Activities */}
            <Box sx={{mb: 4}}>
                <Typography variant="h6" fontWeight="bold" sx={{mb: 2}}>
                    Recent Activities
                </Typography>
                <Paper sx={{p: 2, borderRadius: 2}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Activity</TableCell>
                                <TableCell>Admin</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                {date: "Jan 26, 2025", activity: "Approved new member registration", admin: "John Doe"},
                                {date: "Jan 25, 2025", activity: "Updated church event details", admin: "Jane Smith"},
                                {date: "Jan 24, 2025", activity: "Processed $500 donation", admin: "Michael Johnson"},
                            ].map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.activity}</TableCell>
                                    <TableCell>{row.admin}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Box>
        </Box>
    );
};

export default ProfilePage;
