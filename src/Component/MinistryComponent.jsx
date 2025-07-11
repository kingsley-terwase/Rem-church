import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import { COLOR } from "../Config/Color";
import { FONT_FAMILY } from "../Config/Fonts";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const MinistryComponent = ({ title, subtitle, cardData, buttonText }) => {
    return (
        <Container maxWidth="lg" sx={{ py: "5rem" }}>
            <Box>
                <Stack
                    direction="column"
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        pb: "2rem",
                    }}
                >
                    {subtitle && (
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: FONT_FAMILY.tertiary,
                                color: COLOR.primary,
                            }}
                        >
                            {subtitle}
                        </Typography>
                    )}
                    {title && (
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: FONT_FAMILY.tertiary,
                                fontWeight: "600",
                            }}
                        >
                            {title}
                        </Typography>
                    )}
                </Stack>

                <div
                    style={{
                        display: "grid",
                        gap: "16px",
                        gridTemplateColumns: "repeat(auto-fit, minmax(345px, 1fr))",
                    }}
                >
                    {cardData.map((card) => (
                        <Card
                            key={card.id}
                            sx={{
                                maxWidth: 345,
                                borderBottom: "3px solid #4682B4",
                                margin: "auto",
                                boxShadow: 3,
                                borderRadius: 2,
                                overflow: "hidden",
                                position: "relative",
                            }}
                        >
                            <Box sx={{ position: "relative" }}>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={card.image}
                                    alt={card.title}
                                    sx={{
                                        transition: "transform 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                        },
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgb(191, 10, 48, 0.7)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        opacity: 0,
                                        transition: "opacity 0.3s ease-in-out",
                                        "&:hover": {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: "#fff",
                                            fontWeight: "bold",
                                            cursor: "pointer",
                                            userSelect: "none",
                                        }}
                                    >
                                        <img
                                            style={{ color: "white", width: "180px" }}
                                            src="/Images/church_6.png"
                                            alt="church"
                                        />
                                    </Typography>
                                </Box>
                            </Box>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    sx={{
                                        fontWeight: "600",
                                        fontFamily: FONT_FAMILY.tertiary,
                                    }}
                                >
                                    {card.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        lineHeight: "1.5rem",
                                        fontFamily: FONT_FAMILY.tertiary,
                                    }}
                                    color="text.secondary"
                                >
                                    {card.description.length > 100
                                        ? `${card.description.substring(0, 100)}...`
                                        : card.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={`/ministries/${card.id}`}>
                                    <Button
                                        size="small"
                                        sx={{
                                            mb: "1rem",
                                            textTransform: "capitalize",
                                            fontWeight: "700",
                                            color: COLOR.tertiary,
                                        }}
                                        onClick={() =>
                                            console.log(`Navigating to ministry ID: ${card.id}`)
                                        }
                                    >
                                        Read More
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    ))}
                </div>

            </Box>
        </Container>
    );
};

export default MinistryComponent;
