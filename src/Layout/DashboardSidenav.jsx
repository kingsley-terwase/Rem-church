/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {styles} from "./styles";
import {logoLayoutProps, navList, handleClick, showExpandIcon, showSubMenu, isActive} from "./lib";
import NavigLink from "./DashboardNavigLink";
import LinkCustomized from "../Component/Link";
import {FONT_FAMILY} from "../Config/Fonts";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import { blueGrey } from "@mui/material/colors";

const DashboardSidenav = ({mobileOpen, onClose, onTransitionEnd}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const drawer = (
        <Box sx={styles.sidenav}>
            <Box sx={styles.logoWrap}>
                <Stack {...logoLayoutProps}>
                    <LinkCustomized to="/">
                        <Stack spacing={1} direction={{ xs: "row", md:"row"}}>
                            <img style={styles.logoImg} src="/Logo/Rem.png" alt="logo" />
                            <Typography sx={{ pt: "1.5rem", whiteSpace:'nowrap',  fontSize: { xs: "12px", md:"14px"}, fontFamily: FONT_FAMILY.primary, fontWeight: "700",}} color="#fff">
                                REM CHURCH
                            </Typography>
                        </Stack>
                    </LinkCustomized>
                    {isSmallScreen && (
                        <IconButton onClick={onClose} sx={{px: "5rem", color: "#fff"}}>
                            <CloseIcon />
                        </IconButton>
                    )}
                </Stack>
            </Box>
            
            <Divider sx={{backgroundColor: blueGrey[900], my: "5px", height: "0.1px"}} />
            <Box sx={{display: "flex", height: "100%", overflowY: "auto"}}>
                <Box sx={{flexGrow: 1, overflowY: "auto", paddingRight: "1rem"}}>
                    {navList.map((item, i) => {
                        let subMenu = item.subNav;
                        let len = subMenu.length;
                        let isExpand = showExpandIcon(len);
                        let isMenu = showSubMenu(activeIndex, i, len);
                        let path = item.link;

                        return (
                            <Box key={i} sx={styles.linkWrap}>
                                <NavigLink
                                    to={item.link}
                                    onClick={() => handleClick(activeIndex, len, i, setActiveIndex)}
                                    isactive={isActive(path, subMenu)}
                                >
                                    <Box sx={styles.navLInkIn}>
                                        <span>{item.icon}</span>
                                        {item.label}
                                    </Box>
                                    {isExpand && !isMenu && <ExpandMoreIcon style={styles.iconColor} />}
                                    {isExpand && isMenu && <ExpandLessIcon style={styles.iconColor} />}
                                </NavigLink>
                                {isMenu &&
                                    item.subNav.map((subItem, j) => (
                                        <Link key={j} to={subItem.link} style={styles.navLinkSub}>
                                            <AdjustIcon />
                                            {subItem.label}
                                        </Link>
                                    ))}
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );

    return (
        <Box component="nav" sx={styles.sidenavWrap}>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={onClose}
                onTransitionEnd={onTransitionEnd}
                sx={styles.paperSm}
            >
                {drawer}
            </Drawer>
            <Drawer variant="permanent" sx={styles.paperLg} open>
                {drawer}
            </Drawer>
        </Box>
    );
};

export default DashboardSidenav;
