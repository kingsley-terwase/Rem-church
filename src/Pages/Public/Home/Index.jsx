import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import EventCard from "../../../Component/EventCard";
import Typography from "@mui/material/Typography";
import {COLOR} from "../../../Config/Color";
import Container from "@mui/material/Container";
import {FONT_FAMILY} from "../../../Config/Fonts";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import {style} from "./styles";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import Button from "@mui/material/Button";
import {AboutUsData, blogPosts, cardData} from "./static";
import CustomCard from "../../../Component/Card";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import BlogCard from "../../../Component/BlogCard";
import Grid from "@mui/material/Grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MinistryComponent from "../../../Component/MinistryComponent";
import {Link} from "react-router-dom";
import ContactUs from "../../../Component/ContactUs";
const HomePage = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Stack
                    direction={{md: "row", xs: "column"}}
                    spacing={4}
                    sx={{
                        ...style.EventStyle,
                    }}
                >
                    <EventCard EventTitle="REM National Convention" />
                    <EventCard EventTitle="Tech Innovation Meetup" />
                </Stack>
                <Box
                    sx={{
                        display: "flex",
                        mt: {xs: "27rem", md: "9rem"},
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Link to="/event" style={{textDecoration: "none"}}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "white",
                                fontWeight: "700",
                                color: COLOR.primary,
                                textTransform: "capitalize",
                            }}
                        >
                            view more <ArrowRightAltIcon />
                        </Button>
                    </Link>
                </Box>
                <Stack
                    data-aos="fade-up"
                    display="grid"
                    gap={9}
                    sx={{
                        py: {md: "8rem", xs: "7rem"},
                        gridTemplateColumns: {md: "1fr 1fr", xs: "1fr"},
                    }}
                >
                    <Box sx={{display: "flex", position: "relative", flexGrow: 1}}>
                        <img
                            src="/Images/church_4.png"
                            alt="about-img"
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                                zIndex: 1,
                            }}
                        />
                        <Box
                            sx={{
                                ...style.AboutUsImg,
                            }}
                        ></Box>
                    </Box>

                    <Box sx={{flexGrow: 1}}>
                        <Box>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: "500",
                                    fontFamily: FONT_FAMILY.primary,
                                    textTransform: "uppercase",
                                    color: COLOR.primary,
                                }}
                            >
                                About us
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    py: "1rem",
                                    fontWeight: "700",
                                    fontFamily: FONT_FAMILY.primary,
                                    textTransform: "capitalize",
                                }}
                                color="initial"
                            >
                                We are Taking Small Steps to Make Earth a Better Planet
                            </Typography>
                            <Typography variant="body2" sx={{pb: "1rem", fontFamily: FONT_FAMILY.primary}} color="gray">
                                We welcome you with great joy to Reformed Evangelical Church Mission. We are here to
                                share the great news of Jesus Christ to all that will listen.
                            </Typography>
                            <Typography variant="h5" sx={{pb: "1rem", fontFamily: FONT_FAMILY.secondary}} color="grey">
                                The name of the Lord is a strong tower; the righteous run into it and are safe.
                            </Typography>
                            <Stack
                                direction={{md: "row", xs: "column"}}
                                spacing={3}
                                sx={{py: "1rem", justifyContent: "space-between", alignItems: "center"}}
                            >
                                {AboutUsData.map((about, index) => (
                                    <Box key={index}>
                                        <Box
                                            sx={{
                                                ...style.loveStyle,
                                            }}
                                        >
                                            {about.icon}
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{py: "9px", fontFamily: FONT_FAMILY.primary}}
                                                color="initial"
                                            >
                                                {about.label}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                sx={{fontFamily: FONT_FAMILY.primary}}
                                                color="gray"
                                            >
                                                {about.desc}
                                            </Typography>{" "}
                                            <br />
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>
                            <Link style={{textDecoration: "none"}} to="/about">
                                <Button
                                    sx={{
                                        backgroundColor: COLOR.primary,
                                        mt: "9px",
                                        fontFamily: FONT_FAMILY.primary,
                                        px: "2rem",
                                        color: "#fff",
                                        textTransform: "capitalize",
                                        py: "9px",
                                    }}
                                >
                                    Learn more
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Stack>
                <Stack></Stack>
            </Container>
            <Box
                data-aos="fade-down"
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "600px",
                }}
            >
                <Box sx={{...style.Overlay,}}/>
                <img
                    src="/Images/church_5.png"
                    alt="church"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />

                <Container>
                    <Box sx={{...style.contentImg,}}>
                        <Box sx={{...style.rippleBox,}}>
                            <Box sx={{...style.rippleBox1,}}/>
                            <Box sx={{...style.rippleBox2,}}/>
                            <Diversity3OutlinedIcon sx={{...style.rippleIcon,}}/>
                        </Box>

                        <Typography
                            sx={{
                                fontSize: {md: "3rem", xs: "1rem"},
                                fontWeight: "700",
                                fontFamily: FONT_FAMILY.primary,
                                mb: 1,
                                mt: 2,
                            }}
                        >
                            “Pray! And listen to God! You can do this alone, but find somebody to do it with you.”
                        </Typography>
                        <Button
                            color="inherit"
                            sx={{
                                mt: "25px",
                                fontWeight: "700",
                                borderRadius: "50px",
                                border: "3px solid #fff",
                                py: "9px",
                                px: "2rem",
                                textTransform: "uppercase",
                            }}
                            variant="outlined"
                        >
                            Find Some one
                        </Button>
                    </Box>

                    <style>
                        {" "}
                        {`
                    @keyframes ripple {
                        0% {
                        transform: scale(0.8);
                        opacity: 1;
                        }
                        100% {
                        transform: scale(2.5);
                        opacity: 0;
                        }
                    }
                `}
                    </style>
                </Container>
            </Box>
            <MinistryComponent
                title="Our Ministries"
                subtitle="Ministries"
                cardData={cardData}
                buttonText="View More Ministries"
            />
            <ContactUs/>
            <Box sx={{ display: "flex", py: "4rem", alignItems: "center", justifyContent: "center"}}>
                <Link to="/ministries" style={{textDecoration: "none"}}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "white",
                            color: COLOR.primary,
                            fontFamily: FONT_FAMILY.primary,
                            fontWeight: "700",
                            textTransform: "capitalize",
                        }}
                    >
                        view more <ArrowRightAltIcon />{" "}
                    </Button>
                </Link>
            </Box>
            
            <Container maxWidth="lg">
                <Stack
                    direction="column"
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        py: "3rem",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: FONT_FAMILY.primary,
                            color: COLOR.primary,
                        }}
                    >
                        Our Blog
                    </Typography>
                    <Typography
                        variant="h5"
                        color="initial"
                        sx={{
                            fontFamily: FONT_FAMILY.primary,
                            fontWeight: "600",
                        }}
                    >
                        Latest Posts
                    </Typography>
                </Stack>
                <Grid container spacing={3}>
                    {blogPosts.map((post, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <BlogCard
                                image={post.image}
                                date={post.date}
                                title={post.title}
                                description={post.description}
                                btn={post.btn}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{display: "flex", py: "4rem", alignItems: "center", justifyContent: "center"}}>
                    <Link to="/blog" style={{textDecoration: "none"}}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "white",
                                color: COLOR.primary,
                                fontFamily: FONT_FAMILY.primary,
                                fontWeight: "700",
                                textTransform: "capitalize",
                            }}
                        >
                            view more <ArrowRightAltIcon />{" "}
                        </Button>
                    </Link>
                </Box>
            </Container>
        </>
    );
};

export default HomePage;
