import Box from "@mui/material/Box";
import React from "react";
import PageHeader from "../../../Component/PageHeader";
import { AboutUsData } from "./static";
import { style } from "./styles";
import Typography from "@mui/material/Typography";
import { FONT_FAMILY } from "../../../Config/Fonts";
import { COLOR } from "../../../Config/Color";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import AudioComponent from "../../../Component/AudioComponent";
import Grid from "@mui/material/Grid";

const AboutUsPage = () => {
    return (
        <>
            <PageHeader title="About Us" breadcrumb="About Us" />

            <Container maxWidth="lg" sx={{ py: "5rem" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Box>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: "800",
                                fontFamily: FONT_FAMILY.font_one,
                                textTransform: "uppercase",
                                color: COLOR.primary,
                            }}
                        >
                            Preamble
                        </Typography>
                        <Box component="img" src="/Logo/Rem.png" sx={{ width: '100%', maxWidth: '300px', height: 'auto', objectFit: 'cover', }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>

                                <Typography
                                    variant="h5"
                                    sx={{
                                        py: "1rem",
                                        fontWeight: "700",
                                        fontFamily: FONT_FAMILY.primary,
                                        textTransform: "capitalize",
                                    }}
                                    color="initial"
                                >
                                    Reformed Evangelical Church Mission (REM)
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "700",
                                        fontFamily: FONT_FAMILY.font_one,
                                        textTransform: "capitalize",
                                    }}
                                    color="initial"
                                >
                                    Motto: "That they all may be one"
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ pb: "1rem", fontFamily: FONT_FAMILY.primary }}
                                    color="gray"
                                >
                                    We believe that God is irrevocably committed to His Church. God will never discard it, but
                                    He only labours over and over again to revive it whenever it goes dead or dying, overwhelmed
                                    by the influence of the world system. He, therefore, seeks men and women, saved and
                                    genuinely converted, in whom Christ lives who will release themselves for His use, so that
                                    He can prepare, furnish and eventualy work through them to bring revival to His Church.
                                </Typography>
                                <Typography variant="h5" sx={{ pb: "1rem", fontFamily: FONT_FAMILY.secondary }} color="grey">
                                    The name of the Lord is a strong tower; the righteous run into it and are safe.
                                </Typography>
                                <Box sx={{ }}>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: "700",
                                            fontFamily: FONT_FAMILY.font_one,
                                            textTransform: "capitalize",
                                        }}
                                        color="initial"
                                    >
                                        DOCTRINAL STATEMENT
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ pb: "1rem", fontFamily: FONT_FAMILY.primary }}
                                        color="gray"
                                    >
                                        We believe that God is irrevocably committed to His Church. God will never discard it, but
                                        He only labours over and over again to revive it whenever it goes dead or dying, overwhelmed
                                        by the influence of the world system. He, therefore, seeks men and women, saved and
                                        genuinely converted, in whom Christ lives who will release themselves for His use, so that
                                        He can prepare, furnish and eventualy work through them to bring revival to His Church.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ pt: '3rem' }}>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: "700",
                                            fontFamily: FONT_FAMILY.font_one,
                                            textTransform: "capitalize",
                                        }}
                                        color="initial"
                                    >
                                        VISION & MISSION
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ pb: "1rem", fontFamily: FONT_FAMILY.primary }}
                                        color="gray"
                                    >
                                        We believe that God is irrevocably committed to His Church. God will never discard it, but
                                        He only labours over and over again to revive it whenever it goes dead or dying, overwhelmed
                                        by the influence of the world system. He, therefore, seeks men and women, saved and
                                        genuinely converted, in whom Christ lives who will release themselves for His use, so that
                                        He can prepare, furnish and eventualy work through them to bring revival to His Church.
                                    </Typography>
                                </Box>
                                <Box sx={{ pt: '3rem' }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: "700",
                                            fontFamily: FONT_FAMILY.font_one,
                                            textTransform: "capitalize",
                                        }}
                                        color="initial"
                                    >
                                        VISION STRATEGY
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ pb: "1rem", fontFamily: FONT_FAMILY.primary }}
                                        color="gray"
                                    >
                                        We believe that God is irrevocably committed to His Church. God will never discard it, but
                                        He only labours over and over again to revive it whenever it goes dead or dying, overwhelmed
                                        by the influence of the world system. He, therefore, seeks men and women, saved and
                                        genuinely converted, in whom Christ lives who will release themselves for His use, so that
                                        He can prepare, furnish and eventualy work through them to bring revival to His Church.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ justifyContent: "center", alignItems: 'center' }}>
                            {AboutUsData.map((about, index) => (
                                <Grid item xs={12} md={6}>
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
                                                sx={{ py: "9px", fontFamily: FONT_FAMILY.primary }}
                                                color="initial"
                                            >
                                                {about.label}
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary }} color="gray">
                                                {about.desc}
                                            </Typography>{" "}
                                            <br />
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default AboutUsPage;
