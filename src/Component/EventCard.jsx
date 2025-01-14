import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DateSection from "./DateSection";
import {FONT_FAMILY} from "../Config/Fonts";
import { COLOR } from "../Config/Color";

const EventCard = ({EventTitle}) => {
    return (
        <Stack
            direction="row"
            sx={{                
                px: { md: "1rem", xs:"1rem"},
                py: "2.5rem",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.5)",
                borderRadius: "8px",
                width: "100%",
            }}
            gap={3}
        >
            <Box >
                <DateSection />
            </Box>
            <Box>
                <Typography
                    variant="h6"
                    sx={{fontFamily: FONT_FAMILY.primary, textTransform: "capitalize"}}
                    color="initial"
                >
                    <b>EVENT:</b>
                    {EventTitle}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{fontFamily: FONT_FAMILY.primary, textTransform: "capitalize"}}
                    color="initial"
                >
                    <a href="/" style={{textDecoration: "none", color: COLOR.primary }}>
                        Event details
                    </a>
                </Typography>
            </Box>
        </Stack>
    );
};

export default EventCard;
