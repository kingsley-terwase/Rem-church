import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { navStackRow, togProps } from "./lib";
import { styles } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import NotiBadge from "./NotiBadge";
import { FONT_FAMILY } from "../Config/Fonts";
import { useLocation } from "react-router-dom";
import ProfileMenu from "../Component/Dashboard/ProfileComponent";
import SearchInput from "../Component/Dashboard/SearchInput";

const DashboardNav = ({ onTog, isCollapsed }) => {
    const location = useLocation();

    const getCurrentPagename = (pathname) => {
        switch (pathname) {
            case "/dashboard":
                return "Dashboard";
            case "/dashboard/events":
                return "Events";
            case "/dashboard/ministries":
                return "Ministries";
            case "/dashboard/church":
                return "Church";
            case "/dashboard/finance":
                return "Finance";
            case "/dashboard/users":
                return "Users";
            case "/dashboard/admin":
                return "Admin Panel";
            case "/dashboard/profile":
                return "Profile";
            case "/dashboard/settings":
                return "Settings";
            default:
                return "Dashboard";
        }
    };

    const pageName = getCurrentPagename(location.pathname);

    return (
        <Box sx={styles.nav(isCollapsed)}>
            <Stack {...navStackRow}>
                <IconButton onClick={onTog} sx={styles.togBtn} {...togProps}>
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    color="#000"
                    sx={{
                        fontFamily: FONT_FAMILY.primary,
                        textTransform: "capitalize",
                        fontWeight: 600
                    }}
                >
                    {pageName}
                </Typography>
            </Stack>

            <Stack {...navStackRow}>
                <Box>
                    <SearchInput />
                </Box>
                <Box
                    sx={{
                        py: "4px",
                        px: "7px",
                        border: "1px solid #e0e0e0",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                    }}
                >
                    <NotiBadge />
                </Box>
                <Box>
                    <ProfileMenu />
                </Box>
            </Stack>
        </Box>
    );
};

export default DashboardNav;