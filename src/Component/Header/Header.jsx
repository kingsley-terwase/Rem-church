import React, { useState, useEffect } from "react";
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
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FONT_FAMILY } from "../../Config/Fonts";
import AnimatedText from "../Animation/AnimatedText";
import { COLOR } from "../../Config/Color"
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Events", path: "/event" },
    { label: "Ministries", path: "/ministries" },
    { label: "Contact", path: "/contact" }
];

// Dropdown dropdown items
const dropdownItems = [
    { label: "Departments", path: "/departments" },
    { label: "Theology", path: "/theology" },
    { label: "Literature", path: "/literature" },
    { label: "Videos", path: "/videos" },
    { label: "Audios", path: "/audios" },
];


const Header = () => {
    const [showTopNav, setShowTopNav] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [DropdownAnchor, setDropdownAnchor] = useState(null);


    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const backgrounds = [
        { image: "/Images/church_10.png", overlay: "rgba(0, 0, 0, 0.7)" },
        { image: "/Images/church_11.png", overlay: "rgba(0, 0, 0, 0.7)" },
        { image: "/Images/church_3.png", overlay: "rgba(0, 0, 0, 0.7)" },
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

    const handleDropdownClick = (event) => {
        setDropdownAnchor(event.currentTarget);
    };

    const handleDropdownClose = () => {
        setDropdownAnchor(null);
    };

    const handleDropdownItemClick = (item) => {
        if (item.path) {
            navigate(item.path);
        }

        handleDropdownClose();
    };


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
                        padding: isScrolled ? "0" : { xs: "0", sm: "4rem 2rem" },
                    }),
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ justifyContent: "space-between", width: "100%" }}>
                        <Link sx={{ textDecoration: "none" }} to="/">
                            <Box sx={{ paddingRight: "1rem" }}>
                                <Box component='img' src="/Logo/Rem.png" sx={{
                                    width: "100%",
                                    height: "60px",
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }} />

                            </Box>
                        </Link>
                        <Box sx={{ display: { xs: "block", md: "none" } }}>
                            <IconButton onClick={toggleDrawer} color="inherit">
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Stack
                            direction="row"
                            spacing={3}
                            sx={{ display: { xs: "none", md: "flex" }, marginLeft: "auto", pr: 2 }}
                        >
                            {navLinks.map((link, index) => (
                                <Link key={index} to={link.path} style={{ textDecoration: "none", color: "inherit" }}>
                                    <Typography sx={{
                                        "&:hover": {
                                            color: COLOR.primary,
                                            fontWeight:800,
                                        }, fontFamily: FONT_FAMILY.primary, pt: "9px"
                                    }}>
                                        {link.label}
                                    </Typography>
                                </Link>
                            ))}

                            <Box>
                                <Button
                                    onClick={handleDropdownClick}
                                    endIcon={<KeyboardArrowDownIcon />}
                                    sx={{
                                        color: isScrolled || !isHomePage ? "black" : "white",
                                        fontFamily: FONT_FAMILY.primary,
                                        textTransform: "none",
                                        fontSize: "16px",
                                        pt: "7px",
                                        "&:hover": {
                                            color: COLOR.primary,
                                            fontWeight:800,
                                        }, 
                                    }}
                                >
                                    More
                                </Button>
                                <Menu
                                    anchorEl={DropdownAnchor}
                                    open={Boolean(DropdownAnchor)}
                                    onClose={handleDropdownClose}
                                    PaperProps={{
                                        sx: {
                                            backgroundColor: COLOR.primary,
                                            color: "white",
                                            minWidth: "280px",
                                            mt: 1,
                                            borderRadius: "8px",
                                            boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
                                        }
                                    }}
                                    transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                                >
                                    <Box sx={{ p: 2 }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontFamily: FONT_FAMILY.tertiary,
                                                color: COLOR.tertiary,
                                                mb: 2,
                                                fontWeight: "800"
                                            }}
                                        >
                                            Others
                                        </Typography>
                                        {dropdownItems.map((item, index) => (
                                            <MenuItem
                                                key={index}
                                                onClick={() => handleDropdownItemClick(item)}
                                                sx={{
                                                    color: "white",
                                                    fontFamily: FONT_FAMILY.primary,
                                                    py: 1,
                                                    px: 2,
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                        color: COLOR.tertiary
                                                    }
                                                }}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        ))}
                                        <Box sx={{ mt: 2 }}>
                                            <Button
                                                onClick={() => console.log('Click to See More')}
                                                sx={{
                                                    color: COLOR.tertiary,
                                                    textTransform: "none",
                                                    fontFamily: FONT_FAMILY.primary,
                                                    textDecoration: "underline",
                                                    '&:hover': {
                                                        backgroundColor: 'transparent',
                                                        textDecoration: "underline"
                                                    }
                                                }}
                                            >
                                                Click to See More
                                            </Button>
                                        </Box>
                                    </Box>
                                </Menu>
                            </Box>

                            <Link to="/giving" style={{ textDecoration: "none", color: "inherit" }}>
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
                            <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
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
                <Box sx={{ width: 250, padding: "1rem" }}>
                    <IconButton onClick={toggleDrawer} sx={{ mb: 2 }}>
                        <CloseIcon />
                    </IconButton>
                    <Stack spacing={2}>
                        {navLinks.map((link, index) => (
                            <Typography key={index} variant="body1" onClick={toggleDrawer} sx={{ cursor: "pointer" }}>
                                {link.label}
                            </Typography>
                        ))}
                        <Typography variant="body1" onClick={toggleDrawer} sx={{ cursor: "pointer" }}>
                            Dropdown
                        </Typography>
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
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: backgrounds[currentImageIndex].overlay,
                            zIndex: 1,
                        }}
                    />
                    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                        {showTopNav && (
                            <Box sx={{ paddingBottom: "1rem" }}>
                                <Box
                                    sx={{
                                        display: { md: "flex", xs: "none" },
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Stack direction="row" spacing={1}>
                                        <LocationOnOutlinedIcon />
                                        <Typography
                                            variant="body2"
                                            sx={{ fontWeight: "400", fontFamily: FONT_FAMILY.primary }}
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
                                                    sx={{ backgroundColor: "gray", height: "44px" }}
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
                            <Divider sx={{ backgroundColor: "white", height: "0.1px" }} />
                        </Box>
                    )}
                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            textAlign: "center",
                            mt: "6rem",
                            mx: "auto",
                            width: { xs: "90%", sm: "80%", md: "100%" },
                        }}
                    >
                        <Box sx={{ position: "relative", zIndex: 2 }}>
                            <Box
                                component="img"
                                src="/Illus/Bible.png"
                                className="bounce-top"
                                sx={{
                                    width: "160px",
                                    height: "120px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto 2rem",
                                }}
                            />
                            <Typography variant="h3" sx={{ fontFamily: FONT_FAMILY.secondary, color: "white" }}>
                                Welcome to <br /> Reformed Evangelical Church Mission
                            </Typography>
                            <AnimatedText
                                text=" Reaching the world with the true Gospel and Global Evangelism and Revival Fire through the power-packed word of God"
                                sx={{
                                    fontWeight: "300",
                                    fontSize: "18px",
                                    fontFamily: FONT_FAMILY.primary,
                                    mt: "1rem",
                                    width: { xs: "100%", sm: "80%", md: "60%" },
                                    margin: "0 auto",
                                    color: "white",
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{ fontFamily: FONT_FAMILY.secondary, color: "white", mt: "1rem" }}
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