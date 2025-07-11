import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {FONT_FAMILY} from "../../Config/Fonts";
import {navLinks} from "./static";
import {Link, useLocation} from "react-router-dom";
import {style} from "./styles";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AnimatedText from "../Animation/AnimatedText";
import Button from "@mui/material/Button";
import {COLOR} from "../../Config/Color";

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [showTopNav, setShowTopNav] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const backgrounds = [
        {image: "/Images/church_1.png", overlay: "rgba(0, 0, 50, 0.7)"},
        {image: "/Images/church_2.png", overlay: "rgba(0, 0, 0, 0.8)"},
        {image: "/Images/church_3.png", overlay: "rgba(50, 0, 0, 0.6)"},
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 60);
            setShowTopNav(scrollY <= 60);
        };
        window.addEventListener("scroll", handleScroll);

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 5000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(interval);
        };
    }, []);

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    return (
        <>
            <AppBar
                position="fixed"
                elevation={isScrolled ? 0 : 0}
                sx={{
                    backgroundColor: isScrolled || !isHomePage ? "white" : "transparent",
                    boxShadow: isScrolled || !isHomePage ? "2px 4px 6px rgba(0, 0, 0, 0.4)" : null,
                    color: isScrolled || !isHomePage ? "black" : "white",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                    ...(isHomePage && {
                        padding: isScrolled ? "0" : {xs: "0", sm: "4rem 2rem"},
                    }),
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{justifyContent: "space-between", width: "100%"}}>
                        <Link sx={{textDecoration: "none"}} to="/">
                            <Box sx={{paddingRight: "1rem"}}>
                                <img style={{width: "100px"}} src="/Logo/Rem.png" alt="logo" />
                            </Box>
                        </Link>
                        <Box sx={{display: {xs: "block", md: "none"}}}>
                            <IconButton onClick={toggleDrawer} color="inherit">
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Stack
                            direction="row"
                            spacing={3}
                            sx={{display: {xs: "none", md: "flex"}, marginLeft: "auto", pr: 2}}
                        >
                            {navLinks.map((link, index) => (
                                <Link key={index} to={link.path} style={{textDecoration: "none", color: "inherit"}}>
                                    <Typography sx={{fontFamily: FONT_FAMILY.primary, pt: "9px"}}>
                                        {link.label}
                                    </Typography>
                                </Link>
                            ))}
                            <Link to="/giving" style={{textDecoration: "none", color: "inherit"}}>
                                <Button
                                    sx={{
                                        textTransform: "capitalize",
                                        color: "white",
                                        py: "8px",
                                        px: "2rem",
                                        backgroundColor: COLOR.primary,
                                        fontFamily: FONT_FAMILY.primary,
                                    }}
                                >
                                    Giving
                                </Button>
                            </Link>
                            <Link to="/login" style={{textDecoration: "none", color: "inherit"}}>
                                <Button
                                    sx={{
                                        textTransform: "capitalize",
                                        color: "white",
                                        py: "8px",
                                        px: "2rem",
                                        backgroundColor: COLOR.primary,
                                        fontFamily: FONT_FAMILY.primary,
                                    }}
                                >
                                    Login
                                </Button>
                            </Link>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <Box sx={{width: 250, padding: "1rem"}}>
                    <IconButton onClick={toggleDrawer} sx={{mb: 2}}>
                        <CloseIcon />
                    </IconButton>
                    <Stack spacing={2}>
                        {navLinks.map((link, index) => (
                            <Typography key={index} variant="body1" onClick={toggleDrawer} sx={{cursor: "pointer"}}>
                                {link.label}
                            </Typography>
                        ))}
                    </Stack>
                </Box>
            </Drawer>
            {isHomePage && (
                <Box
                    sx={{
                        position: "relative",
                        backgroundImage: `url(${backgrounds[currentImageIndex].image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "700px",
                        color: "white",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            ...style.TopnavOverlay,
                            backgroundColor: backgrounds[currentImageIndex].overlay,
                            zIndex: 1,
                        }}
                    />
                    <Container maxWidth="lg" sx={{position: "relative", zIndex: 2}}>
                        {showTopNav && (
                            <Box sx={{paddingBottom: "1rem"}}>
                                <Box
                                    sx={{
                                        display: {md: "flex", xs: "none"},
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Stack direction="row" spacing={1}>
                                        <LocationOnOutlinedIcon />
                                        <Typography
                                            variant="body2"
                                            sx={{fontWeight: "400", fontFamily: FONT_FAMILY.primary}}
                                        >
                                            19, Gyado Hospital Road, Box 971, Gboko, Benue State
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        {["Facebook", "Twitter", "Instagram", ""].map((icon, index) => (
                                            <React.Fragment key={icon}>
                                                <Divider
                                                    orientation="vertical"
                                                    flexItem
                                                    sx={{backgroundColor: "gray", height: "44px"}}
                                                />
                                                <IconButton color="inherit">
                                                    {icon === "Facebook" && <FacebookIcon />}
                                                    {icon === "Twitter" && <TwitterIcon />}
                                                    {icon === "Instagram" && <InstagramIcon />}
                                                </IconButton>
                                            </React.Fragment>
                                        ))}
                                    </Stack>
                                </Box>
                            </Box>
                        )}
                    </Container>
                    {showTopNav && (
                        <Box
                            sx={{
                                width: "100%",
                                position: "absolute",
                                top: {
                                    md: showTopNav ? "calc(100% - 657px)" : "0",
                                    xs: showTopNav ? "calc(100% - 617px)" : "0",
                                },
                                bgcolor: "white",
                            }}
                        >
                            <Divider sx={{backgroundColor: "white", height: "0.1px"}} />
                        </Box>
                    )}
                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            textAlign: "center",
                            mt: "6rem",
                            mx: "auto",
                            width: {xs: "90%", sm: "80%", md: "100%"},
                        }}
                    >
                        <Box sx={{position: "relative", zIndex: 2}}>
                            <img
                                className="bounce-top"
                                style={{width: "160px"}}
                                src="/Illus/Bible.png"
                                alt="bible-illus"
                            />
                            <Typography variant="h3" sx={{fontFamily: FONT_FAMILY.secondary, color: "white"}}>
                                Welcome to <br /> Reformed Evangelical Church Mission
                            </Typography>
                            <AnimatedText
                                text=" Reaching the world with the true Gospel and Global Evangelism and Revival Fire through the power-packed word of God"
                                sx={{
                                    fontWeight: "300",
                                    fontSize: "18px",
                                    fontFamily: FONT_FAMILY.primary,
                                    mt: "1rem",
                                    color: "white",
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{fontFamily: FONT_FAMILY.secondary, color: "white", mt: "1rem"}}
                            >
                                ...Salvation to all humanity
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default Header;
