import React, {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import {FONT_FAMILY} from "../Config/Fonts";
import {COLOR} from "../Config/Color";

const styles = {
    container: {
        position: "relative",
        width: "100%",
        height: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#fff",
        overflow: "hidden",
        borderRadius: "10px",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(191, 10, 48, 0.7)",
    },
    textBox: {
        zIndex: 2,
        marginLeft: "2rem",
        width: {md: "700px", xs: "100%"},
    },
    audioButton: {
        zIndex: 2,
        marginRight: "2rem",
        cursor: "pointer",
    },
    modalContent: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        boxShadow: 24,
        width: {md: "500px", xs: "300px"},
        padding: "2rem",
        borderRadius: "8px",
    },
};

const AudioComponent = ({text, audioSrc, imageSrc}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={styles.container}>
            <img src={imageSrc} alt="Background" style={styles.image} />

            <Box sx={styles.overlay} />

            <Box sx={styles.audioButton}>
                <IconButton
                    color="primary"
                    onClick={handleOpen}
                    style={{
                        color: "#fff",
                        width: "80px",
                        height: "80px",
                    }}
                >
                    <PlayCircleIcon
                        sx={{
                            fontSize: "60px",
                        }}
                    />
                </IconButton>
            </Box>

            <Box sx={styles.textBox}>
                <Typography
            sx={{
                      fontSize: {md:"1.5rem", xs: "14px",},
                        fontWeight: {md: "700", xs: "400px"},
                        fontFamily: FONT_FAMILY.primary,
                    }}
                >
                    {text}
                </Typography>
            </Box>

            <Modal open={open} onClose={handleClose}>
                <Box sx={styles.modalContent}>
                    <Typography
                        variant="h6"
                        sx={{
                            py: "1rem",
                            fontWeight: "600",
                            fontFamily: FONT_FAMILY.primary,
                        }}
                        mb={2}
                    >
                        Playing Audio
                    </Typography>
                    <audio controls style={{width: "100%"}}>
                        <source src={audioSrc} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        style={{backgroundColor: COLOR.primary, marginTop: "1rem"}}
                    >
                        Close
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default AudioComponent;
