import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {COLOR} from "../Config/Color";

const DateSection = () => {
    return (
        <>
            <Box>
                <Box
                    sx={{
                        backgroundColor: "whitesmoke",
                        borderRadius: "8px",
                        position: "relative",
                        width: {md:"100px",xs: "100%",},
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: -10,
                            mx: "auto",
                            textAlign: "center",
                            borderRadius: "8px",
                        }}
                    >
                        <LocationOnOutlinedIcon sx={{fontSize: "30px", color: COLOR.primary}} />
                    </Box>
                    <Typography variant="body1" sx={{pt: "15px", px: "1.5rem"}} color="#000">
                        Dec 11
                    </Typography>
                    <Typography
                        sx={{py: "4px", textAlign: "center", backgroundColor: COLOR.primary}}
                        variant="body1"
                        color="#fff"
                    >
                        9 am
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default DateSection;
