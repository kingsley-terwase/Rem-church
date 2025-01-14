import React from "react";
import {useParams, Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { COLOR } from "../../../Config/Color";
import {FONT_FAMILY} from "../../../Config/Fonts";
import {ministries} from "../Ministries/static";
import PageHeader from "../../../Component/PageHeader";

const SingleView = () => {
    const {id} = useParams();
    const ministry = ministries.find((ministry) => ministry.id === id);

    if (!ministry) {
        return (
            <Container maxWidth="md" sx={{textAlign: "center", mt: 5}}>
                <Typography variant="h4" color="error">
                    Ministry Not Found
                </Typography>
                <Link to="/" style={{textDecoration: "none"}}>
                    <Button variant="contained" sx={{mt: 3}}>
                        Back to Home
                    </Button>
                </Link>
            </Container>
        );
    }

    return (
        <>
            <PageHeader title="Ministries" breadcrumb="Ministry Details" />
            <Container maxWidth="lg" sx={{mt: 4, mb: 6}}>
                <Box>
                    <Box sx={{textAlign: "center", mb: 4}}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: "700",
                                fontFamily: FONT_FAMILY.primary,
                                mb: 2,
                            }}
                        >
                            {ministry.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" sx={{fontFamily: FONT_FAMILY.primary}}>
                            {ministry.subtitle}
                        </Typography>
                    </Box>

                    <Card
                        sx={{
                            mb: 4,
                            borderRadius: "12px",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <CardMedia
                            component="img"
                            alt={ministry.title}
                            image={ministry.image}
                            sx={{
                                height: {xs: 200, sm: 400},
                                objectFit: "cover",
                            }}
                        />
                    </Card>

                    {/* Ministry Description */}
                    <Box>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "1.125rem",
                                lineHeight: "1.8",
                                color: "text.primary",
                                mb: 3,
                                fontFamily: FONT_FAMILY.primary,
                            }}
                        >
                            {ministry.description}
                        </Typography>
                    </Box>

                    {/* Join Ministry Button */}
                    <Box sx={{textAlign: "center", mt: 4}}>
                        <Link to="/join-ministry" style={{textDecoration: "none"}}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: COLOR.primary,
                                    color: "#fff",
                                    textTransform: "capitalize",
                                    "&:hover": {backgroundColor: COLOR.primaryDark},
                                    fontFamily: FONT_FAMILY.primary,
                                }}
                            >
                                Join {ministry.title}
                            </Button>
                        </Link>
                    </Box>

                    {/* Leave a Comment Section */}
                    <Divider sx={{my: 4}} />
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 2,
                                fontWeight: 600,
                                fontFamily: FONT_FAMILY.primary,
                            }}
                        >
                            Leave a Comment
                        </Typography>
                        <TextField fullWidth label="Your Name" variant="outlined" sx={{mb: 2}} />
                        <TextField fullWidth label="Your Email" variant="outlined" sx={{mb: 2}} />
                        <TextField fullWidth multiline rows={4} label="Your Comment" variant="outlined" sx={{mb: 2}} />
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: COLOR.primary,
                                color: "#fff",
                                textTransform: "capitalize",
                                "&:hover": {backgroundColor: COLOR.primaryDark},
                                fontFamily: FONT_FAMILY.primary,
                            }}
                        >
                            Post Comment
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default SingleView;
