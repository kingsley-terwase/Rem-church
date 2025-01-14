import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import {FONT_FAMILY} from "../Config/Fonts";
import {COLOR} from "../Config/Color";
import {Link} from "react-router-dom";

const CustomCard = ({image, title, description, actions, descriptionLimit = 100}) => {
    const truncatedDescription =
        description.length > descriptionLimit ? `${description.substring(0, descriptionLimit)}...` : description;

    return (
        <Card
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
            <Box sx={{position: "relative"}}>
                <CardMedia
                    component="img"
                    height="240"
                    image={image}
                    alt={title}
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
                        <img style={{color: "white", width: "180px"}} src="/Images/church_6.png" alt="church" />
                    </Typography>
                </Box>
            </Box>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h6"
                    sx={{
                        fontWeight: "600",
                        fontFamily: FONT_FAMILY.primary,
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        lineHeight: "1.5rem",
                        fontFamily: FONT_FAMILY.primary,
                    }}
                    color="text.secondary"
                >
                    {truncatedDescription}
                </Typography>
            </CardContent>
            <CardActions>
                {actions.map((action, index) => (
                    <Link to={`/`}>
                        <Button
                            key={index}
                            size="small"
                            sx={{
                                mb: "1rem",
                                textTransform: "capitalize",
                                fontWeight: "700",
                                color: COLOR.primary,
                            }}
                            onClick={action.onClick}
                        >
                            {action.label}
                        </Button>
                    </Link>
                ))}
            </CardActions>
        </Card>
    );
};

export default CustomCard;
