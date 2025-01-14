import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PageHeader from "../../../Component/PageHeader";
import {cards} from "./static";
import Container from '@mui/material/Container';
import { FONT_FAMILY } from "../../../Config/Fonts";
const ContactUsPage = () => {
    return (
        <>
            <PageHeader title="Contact us" breadcrumb="Contact us" />

            <Box sx={{px: 3, py: 5}}>
                <Container maxwidth="lg">
                    <Grid container sx={{my: 5}} spacing={3}>
                        {cards.map((card, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <Box
                                    sx={{
                                        height: 200,
                                        position: "relative",
                                        background: "url('/Images/church_1.png') no-repeat center/cover",
                                        borderRadius: 2,
                                        overflow: "hidden",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "white",
                                        textAlign: "center",
                                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundColor: "rgba(0, 0, 128, 0.5)",
                                        }}
                                    />
                                    <Box sx={{zIndex: 1}}>
                                        {card.icon}
                                        <Typography variant="h6" sx={{fontWeight: "bold", mt: 1}}>
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2">{card.description}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{my: 15}}>
                        <Grid container spacing={3} >
                            <Grid item xs={12} md={6}>
                                <Stack spacing={2}>
                                    <TextField fullWidth label="Your Name" variant="outlined" />
                                    <TextField fullWidth label="Your Email" variant="outlined" />
                                    <TextField fullWidth label="Your Message" variant="outlined" multiline rows={4} />
                                    <Button variant="contained" sx={{ fontFamily: FONT_FAMILY.primary, py: "12px", textTransform: "capitalize"}}>
                                        Submit
                                    </Button>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        height: "100%",
                                        width: "100%",
                                        background: "url('/Images/church_1.png') no-repeat center/cover",
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default ContactUsPage;
