import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {style} from "./styles";
import {FONT_FAMILY} from "../Config/Fonts";
import {COLOR} from "../Config/Color";
const PageHeader = ({title, breadcrumb}) => {
    return (
        <Box sx={{...style.wrapEvent}}>
            <img
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
                src="/Images/church_1.png"
                alt={title}
            />

            <Box sx={{...style.Overlay}}>
                <Stack
                    direction="row"
                    sx={{
                        flexDirection: "column",
                        marginTop: "6rem",
                        textAlign: "center",
                        color: "white",
                        px: 2,
                    }}
                >
                    <Stack direction="row" justifyContent="center">
                        <Typography
                            variant="body1"
                            sx={{
                                color: COLOR.primary,
                                fontFamily: FONT_FAMILY.primary,
                                mb: 1,
                            }}
                        >
                            Home -
                        </Typography>
                        <Typography variant="body1" sx={{fontFamily: FONT_FAMILY.primary}}>
                            {breadcrumb}
                        </Typography>
                    </Stack>

                    <Typography
                        variant="h4"
                        color="#fff"
                        sx={{
                            fontWeight: "700",
                            fontFamily: FONT_FAMILY.primary,
                        }}
                    >
                        {title}
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
};

export default PageHeader;
