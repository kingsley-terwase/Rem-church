import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChurchIcon from '@mui/icons-material/Church';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import { grey } from "@mui/material/colors";
import {FONT_FAMILY} from "../Config/Fonts";
import Box from "@mui/material/Box";
import {useLocation} from "react-router-dom";

export const drawerWidth = 310;
export const layoutPad = 32;
export const navHeight = 60;

export const togProps = {
    color: "inherit",
    "aria-label": "open drawer",
    edge: "start",
};

export const modalProps = {
    keepMounted: true,
};

export const navStackRow = {
    direction: "row",
    alignItems: "center",
    gap: 1,
};

export const searchTypoProps = {
    variant: "body2",
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    color: grey[400],
    fontFamily: FONT_FAMILY.secondary,
};

export const avatarBadgeOrigin = {vertical: "bottom", horizontal: "right"};
export const logoLayoutProps = {
    direction: "row",
    alignItems: "center",
    gap: 0.5,
};

export const navIconProps = {
    fontSize: "small",
    style: {
        color: "rgba(255, 255, 255, 0.65)",
    },
};

export const navList = [
    {
        label: "Dashboard",
        link: "/dashboard",
        icon: <DashboardRoundedIcon {...navIconProps} />,
        subNav: [],
    },
    {
        label: "Events",
        link: "/dashboard/events",
        icon:< EventNoteIcon {...navIconProps} />,
        subNav: [],
    },
    {
        label: "Ministries",
        link: "/dashboard/ministries",
        icon: <GroupIcon  {...navIconProps}/>,
        subNav: [],
    },
    {
        label: "Church",
        link: "/dashboard/church",
        icon: <ChurchIcon  {...navIconProps}/>,
        subNav: [],
    },
    {
        label: "Finance",
        link: "/dashboard/finance",
        icon: <AccountBalanceWalletIcon  {...navIconProps}/>,
        subNav: [],
    },
    {
        label: "Settings",
        link: "/dashboard/settings",
        icon: <SettingsIcon  {...navIconProps}/>,
        subNav: [],
    },
];

export const showSubMenu = (activeIndex, i, len) => {
    if (activeIndex == i && len > 0) return true;
    return false;
};

export const handleClick = (activeIndex, len, i, update) => {
    if (len < 1 || activeIndex == i) return update(null);
    return update(i);
};

export const showExpandIcon = (len) => {
    if (len > 0) return true;
    return false;
};

export const isActive = (path, subMenu) => {
    const location = useLocation();
    const currentPath = location.pathname;
    if (path === currentPath) return Number(true);
    if (subMenu.length < 1) return Number(false);
    return Number(subMenu.some((item) => item.link === currentPath));
};
