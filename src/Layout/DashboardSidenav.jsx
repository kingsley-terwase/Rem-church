import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styles } from "./styles";
import {
    logoLayoutProps,
    getNavListByRole,
    handleClick,
    showExpandIcon,
    showSubMenu,
    isActive,
} from "./lib";
import NavigLink from "./DashboardNavigLink";
import LinkCustomized from "../Component/Link";
import { FONT_FAMILY } from "../Config/Fonts";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import { blueGrey } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";
import { useLocation } from "react-router-dom";
import { ChevronLeft20Filled, ChevronLeft28Filled, ChevronRight20Filled, ChevronRight28Filled } from "@fluentui/react-icons";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";



const DashboardSidenav = ({
    mobileOpen,
    onClose,
    onTransitionEnd,
    isCollapsed,
    onCollapseToggle,
    userRole
}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const location = useLocation();

    const navList = getNavListByRole(userRole);

    const drawer = (
        <Box sx={styles.sidenav(isCollapsed)}>
            <Box sx={{ position: "relative" }}>
                <Box sx={styles.logoWrap(isCollapsed)}>
                    <Stack {...logoLayoutProps}>
                        <LinkCustomized to="/">
                            <Stack spacing={1} direction="row" alignItems="center">
                                <img style={styles.logoImg} src="/Logo/Rem.png" alt="logo" />
                                {!isCollapsed && (
                                    <Typography sx={{
                                        pt: "1.5rem",
                                        whiteSpace: 'nowrap',
                                        fontSize: { xs: "12px", md: "14px" },
                                        fontFamily: FONT_FAMILY.primary,
                                        fontWeight: "700"
                                    }} color="#fff">
                                        REM CHURCH
                                    </Typography>
                                )}
                            </Stack>
                        </LinkCustomized>
                        {isSmallScreen && (
                            <IconButton onClick={onClose} sx={{ px: "2rem", color: "#fff" }}>
                                <CloseIcon />
                            </IconButton>
                        )}
                    </Stack>
                </Box>

                {/* Collapse Toggle Button */}
                {!isSmallScreen && (
                    <IconButton
                        onClick={onCollapseToggle}
                        sx={styles.collapseToggle}
                    >
                        {isCollapsed ? <ChevronRight28Filled /> : <ChevronLeft28Filled />}
                    </IconButton>
                )}
            </Box>

            <Divider sx={{ backgroundColor: blueGrey[900], my: "5px", height: "0.1px" }} />

            <Box sx={styles.sideNavig}>
                {navList.map((item, i) => {
                    let subMenu = item.subNav || [];
                    let len = subMenu.length;
                    let isExpand = showExpandIcon(len);
                    let isMenu = showSubMenu(activeIndex, i, len);
                    let path = item.link;
                    let active = isActive(path, subMenu, location.pathname);

                    const navItem = (
                        <Box key={i} sx={styles.linkWrap}>
                            <NavigLink
                                to={item.link}
                                onClick={() => handleClick(activeIndex, len, i, setActiveIndex)}
                                isactive={active}
                                isCollapsed={isCollapsed}
                            >
                                <Box sx={styles.navLInkIn(isCollapsed)}>
                                    <span>{item.icon()}</span>
                                    {!isCollapsed && (
                                        <>
                                            {item.label}
                                            {isExpand && !isMenu && <ExpandMoreIcon style={styles.iconColor} />}
                                            {isExpand && isMenu && <ExpandLessIcon style={styles.iconColor} />}
                                        </>
                                    )}
                                </Box>
                            </NavigLink>
                            {!isCollapsed && isMenu &&
                                item.subNav.map((subItem, j) => (
                                    <LinkCustomized key={j} to={subItem.link} style={styles.navLinkSub}>
                                        <span style={{ fontSize: '12px' }}>•</span>
                                        {subItem.label}
                                    </LinkCustomized>
                                ))}
                        </Box>
                    );

                    return isCollapsed ? (
                        <Tooltip key={i} title={item.label} placement="right">
                            {navItem}
                        </Tooltip>
                    ) : navItem;
                })}
            </Box>
        </Box>
    );

    return (
        <Box component="nav" sx={styles.sidenavWrap(isCollapsed)}>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={onClose}
                onTransitionEnd={onTransitionEnd}
                sx={styles.paperSm}
            >
                {drawer}
            </Drawer>
            <Drawer variant="permanent" sx={styles.paperLg(isCollapsed)} open>
                {drawer}
            </Drawer>
        </Box>
    );
};

export default DashboardSidenav;