import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { COLOR } from "../Config/Color";
import { slugify } from "../Utilities/slugify";

const styles = {
    card: {
        maxWidth: 345,
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
    },
    cardHover: {
        transform: "scale(1.03)",
    },
    mediaContainer: {
        position: "relative",
        height: 240,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.3s ease-in-out",
    },
    imageHover: {
        transform: "scale(1.1)",
    },
    dateOverlay: {
        position: "absolute",
        top: 38,
        left: 0,
        backgroundColor:COLOR.primary,
        color: "#fff",
        padding: "8px 3px",
        borderRadius: "4px",
        fontWeight: 500,
        fontSize: "0.875rem",
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
    },
};

const EventsCard = ({ id, image, date, title, description, btn }) => {
    const [isHovered, setIsHovered] = React.useState(false);



    return (
        <Card
            style={{
                ...styles.card,
                ...(isHovered ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.mediaContainer}>
                <Box style={styles.dateOverlay}>{date}</Box>
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    style={{
                        ...styles.image,
                        ...(isHovered ? styles.imageHover : {}),
                    }}
                />
            </div>
            <CardContent>
                <Typography variant="h6" fontWeight="600" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {description.length > 100 ? `${description.slice(0, 100)}...` : description}
                </Typography>
                <Link to={`/events/${slugify(title)}`} style={{ textDecoration: "none" }}>
                    <Button
                        size="small"
                        style={{
                            marginTop: 8,
                            color: COLOR.primary,
                            fontWeight: "700",
                            textTransform: "capitalize",
                        }}
                    >
                        {btn}
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default EventsCard;
