import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomCard from "./Card";
import { COLOR } from "../Config/Color";
import {FONT_FAMILY} from "../Config/Fonts";
import { Link } from "react-router-dom";

const MinistryComponent = ({title, id, subtitle, cardData, buttonText, onButtonClick}) => {
    return (
        <Container maxWidth="lg" sx={{py: "5rem"}}>
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
                                fontFamily: FONT_FAMILY.primary,
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
                                fontFamily: FONT_FAMILY.primary,
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
                    {cardData.map((card, index) => (
                        <CustomCard
                            key={index}
                            id={card.id}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                            descriptionLimit={100}
                            actions={card.actions}
                        />
                    ))}
                </div>
                {buttonText && (
                    <Box
                        sx={{
                            display: "flex",
                            py: "4rem",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Link to={`/ministry${id}`} style={{ textDecoration: "none"}}>
                            <Button
                                variant="contained"
                                onClick={onButtonClick}
                                sx={{
                                    backgroundColor: "white",
                                    color: COLOR.primary,
                                    fontFamily: FONT_FAMILY.primary,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                }}
                            >
                                {buttonText} <ArrowRightAltIcon />
                            </Button>
                        </Link>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default MinistryComponent;
