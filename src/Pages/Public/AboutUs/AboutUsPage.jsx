import Box from "@mui/material/Box";
import React from "react";
import PageHeader from "../../../Component/PageHeader";
import {AboutUsData} from "./static";
import {style} from "./styles";
import Typography from "@mui/material/Typography";
import {FONT_FAMILY} from "../../../Config/Fonts";
import {COLOR} from "../../../Config/Color";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import AudioComponent from "../../../Component/AudioComponent";

const AboutUsPage = () => {
    return (
        <>
            <PageHeader title="About Us" breadcrumb="About Us" />

            <Container maxWidth="lg" sx={{py: "5rem"}}>
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
                            We are committed, as Christ is, to the building of Christ's Church!
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{width: {md: "800px", xs: "100%"}, pb: "1rem", fontFamily: FONT_FAMILY.primary}}
                            color="gray"
                        >
                            We believe that God is irrevocably committed to His Church. God will never discard it, but
                            He only labours over and over again to revive it whenever it goes dead or dying, overwhelmed
                            by the influence of the world system. He, therefore, seeks men and women, saved and
                            genuinely converted, in whom Christ lives who will release themselves for His use, so that
                            He can prepare, furnish and eventualy work through them to bring revival to His Church.
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
                                        <Typography variant="body2" sx={{fontFamily: FONT_FAMILY.primary}} color="gray">
                                            {about.desc}
                                        </Typography>{" "}
                                        <br />
                                    </Box>
                                </Box>
                            ))}
                        </Stack>
                        <Box>
                            <AudioComponent
                                text="God has a plan for you . . . He wants to walk and work in you, of His good pleasure. Submit yourself to Him today!"
                                audioSrc="/Audio/audio_1.mp3"
                                imageSrc="/Images/church_2.png"
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default AboutUsPage;
