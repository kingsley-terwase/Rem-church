import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {style} from "./styles";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Footer = () => {
    return (
        <Box sx={style.footerContainer}>
            <Stack direction={{xs: "column", md: "row"}} spacing={4} sx={style.footerContent}>
                <Box sx={style.column}>
                    <Typography variant="h6" sx={style.columnHeader}>
                        About REM
                    </Typography>
                    <Typography variant="body2" sx={style.columnText}>
                        We are a community of people loving each other and our Lord. "Be completely humble and gentle,
                        be patient, bearing with one another in love."
                    </Typography>
                    <Box sx={style.socialIcons}>
                        <IconButton sx={style.iconButton}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton sx={style.iconButton}>
                            <YouTubeIcon />
                        </IconButton>
                    </Box>
                </Box>

                {/* Quick Links Section */}
                <Box sx={style.column}>
                    <Typography variant="h6" sx={style.columnHeader}>
                        Quick Links
                    </Typography>
                    <Stack spacing={1}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <StarBorderIcon sx={style.icon} />
                            <Typography variant="body2" sx={style.columnText}>
                                About Us
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <StarBorderIcon sx={style.icon} />
                            <Typography variant="body2" sx={style.columnText}>
                                Services
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <StarBorderIcon sx={style.icon} />
                            <Typography variant="body2" sx={style.columnText}>
                                Contact
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>

                <Box sx={style.column}>
                    <Typography variant="h6" sx={style.columnHeader}>
                        Contact Us
                    </Typography>
                    <Typography variant="body2" sx={style.columnText}>
                        19, Gyado Hospital Road, Box 971 Gboko, Benue State, Nigeria
                    </Typography>
                    <Typography variant="body2" sx={style.columnText}>
                        Phone: +234 070 34 567 890
                    </Typography>
                    <Typography variant="body2" sx={style.columnText}>
                        Email: contact@remcommunity.com
                    </Typography>
                </Box>

                <Box sx={style.column}>
                    <Typography variant="h6" sx={style.columnHeader}>
                        Newsletter
                    </Typography>
                    <Typography variant="body2" sx={style.columnText}>
                        Subscribe to our newsletter to stay updated with our events and announcements.
                    </Typography>
                    <Box sx={style.newsletterBox}>
                        <input type="email" placeholder="Enter your email" style={style.inputField} />
                        <button style={style.subscribeButton}>Subscribe</button>
                    </Box>
                </Box>
            </Stack>
            <Box sx={style.footerBottom}>
                <Typography variant="body2" sx={style.footerText}>
                    © 2024 REM Community. All rights reserved.Powered by Advanztek Nig.Ltd.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
