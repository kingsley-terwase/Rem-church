import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {styles} from "./styles";
import {DashCardData} from "./static";
import Button from "@mui/material/Button";
import { green, red, yellow } from "@mui/material/colors";

const iconBackgroundColors = [yellow[900], "#000000", green[900], red[900]]

const DashboardCards = () => {
    return (
        <Box sx={{ py: "1rem",}}>
            <Stack
                direction={{xs: "column", sm: "row"}}
                spacing={{xs:5, md:2}}
                sx={{
                    flexWrap: "wrap",
                    justifyContent: {xs: "center", sm: "space-between", md: "flex-start"},
                }}
            >
                {DashCardData.map((card, index) => (
                    <Box
                        key={index}
                        sx={{
                            ...styles.DashCardWrap,
                        }}
                    >
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Box>
                                <Box sx={{...styles.WrapIconBox, backgroundColor: iconBackgroundColors[ index % iconBackgroundColors.length]}}>{card.icon}</Box>
                                <Button
                                    sx={{textTransform: "capitalize", fontWeight: "700", fontSize: "13px", mt: "3rem"}}
                                >
                                    read more
                                </Button>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end",
                                    alignItems: "flex-end",
                                }}
                            >
                                <Typography variant="body2" color="gray">
                                    {card.label}
                                </Typography>
                                <Typography variant="h6" color="text.primary" sx={{fontWeight: "bold"}}>
                                    {card.title}
                                </Typography>
                            </Box>
                        </Stack>
                        <Divider
                            sx={{
                                backgroundColor: "whitesmoke",
                                height: "0.2px",
                                width: "100%",
                            }}
                        />
                        <Stack direction="row" spacing={1} sx={{pt: "12px"}}>
                            {card.dateIcon}
                            <Typography variant="caption" sx={{py: "3px"}} color="gray">
                                {card.labelDate}
                            </Typography>
                        </Stack>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default DashboardCards;
