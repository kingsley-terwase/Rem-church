import React from "react";
import {useParams, Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import StarIcon from "@mui/icons-material/Star";
// Icons for search and category
import {COLOR} from "../../../Config/Color";
import {FONT_FAMILY} from "../../../Config/Fonts";
import {events} from "../Event/static";
import PageHeader from "../../../Component/PageHeader";
import SearchIcon from "@mui/icons-material/Search";

const categories = ["Faith", "Gratitude", "Hope", "Spiritual Growth"];
const tags = ["Faith", "Resilience", "Spirituality", "Life Lessons", "Growth"];

const SingleBlogPage = () => {
    const {id} = useParams();
    const event = events.find((event) => event.id === id);

    if (!event) {
        return (
            <Container maxWidth="md" sx={{textAlign: "center", mt: 5}}>
                <Typography variant="h4" color="error">
                    Events Not Found
                </Typography>
                <Link to="/" style={{textDecoration: "none"}}>
                    <Button variant="contained" sx={{mt: 3}}>
                        Back to Home
                    </Button>
                </Link>
            </Container>
        );
    }

    return (
        <>
            <PageHeader title="Events" breadcrumb="Events" />
            <Container maxWidth="lg" sx={{mt: 4, mb: 6}}>
                <Grid container spacing={8}>
                    {/* Main Content */}
                    <Grid item xs={12} md={9}>
                        <Box>
                            {/* event Header */}
                            <Box sx={{textAlign: "center", mb: 4}}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: "700",
                                        fontFamily: FONT_FAMILY.primary,
                                        mb: 2,
                                    }}
                                >
                                    {event.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    sx={{fontFamily: FONT_FAMILY.primary}}
                                >
                                    By {event.author} | {event.date}
                                </Typography>
                            </Box>

                            {/* event Image */}
                            <Card sx={{mb: 4, borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"}}>
                                <CardMedia
                                    component="img"
                                    alt={event.title}
                                    image={event.image}
                                    sx={{
                                        height: {xs: 200, sm: 400},
                                        objectFit: "cover",
                                    }}
                                />
                            </Card>

                            {/* event Content */}
                            <Box>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: "1.125rem",
                                        lineHeight: "1.8",
                                        color: "text.primary",
                                        mb: 3,
                                        fontFamily: FONT_FAMILY.primary,
                                    }}
                                >
                                    {event.description}
                                </Typography>
                            </Box>

                            {/* Leave a Reply */}
                            <Divider sx={{my: 4}} />
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        mb: 2,
                                        fontWeight: 600,
                                        fontFamily: FONT_FAMILY.primary,
                                    }}
                                >
                                    Leave a Reply
                                </Typography>
                                <TextField fullWidth label="Your Name" variant="outlined" sx={{mb: 2}} />
                                <TextField fullWidth label="Your Email" variant="outlined" sx={{mb: 2}} />
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="Your Comment"
                                    variant="outlined"
                                    sx={{mb: 2}}
                                />
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: COLOR.primary,
                                        color: "#fff",
                                        textTransform: "capitalize",
                                        "&:hover": {backgroundColor: COLOR.primaryDark},
                                        fontFamily: FONT_FAMILY.primary,
                                    }}
                                >
                                    Post Comment
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                mb: 4,
                                border: "1px solid #EBEBEB",
                                borderRadius: "5px",
                                py: "2rem",
                                px: "2rem",
                                backgroundColor: "#fff",
                                width: "300px",
                            }}
                        >
                            <Box>
                                <TextField
                                    fullWidth
                                    placeholder="Search..."
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            height: "2.5rem",
                                            paddingRight: "2.5rem",
                                        },
                                        "& .MuiOutlinedInput-input": {
                                            padding: "0.5rem",
                                        },
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <SearchIcon
                                                sx={{
                                                    cursor: "pointer",
                                                    color: "#fff",
                                                    position: "absolute",
                                                    right: "0",
                                                    backgroundColor: COLOR.primary,
                                                    borderRadius: "4px",
                                                    padding: "0.5rem 0.8rem",
                                                }}
                                            />
                                        ),
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                border: "1px solid #EBEBEB",
                                borderRadius: "5px",
                                width: "300px",
                                px: "2rem",
                                py: "2rem",
                            }}
                        >
                            <Box sx={{mb: 4}}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 600,
                                        fontFamily: FONT_FAMILY.primary,
                                        mb: 2,
                                    }}
                                >
                                    Categories
                                </Typography>
                                {categories.map((category) => (
                                    <Box key={category} sx={{mb: 2}}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                color: COLOR.primary,
                                                cursor: "pointer",
                                                mb: 1,
                                            }}
                                        >
                                            <StarIcon sx={{color: COLOR.primary, fontSize: "14px", mr: 1}} />
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontFamily: FONT_FAMILY.primary,
                                                    "&:hover": {color: "#000", fontWeight: "600"},
                                                }}
                                            >
                                                {category}
                                            </Typography>
                                        </Box>
                                        <Divider
                                            sx={{
                                                borderColor: COLOR.secondary,
                                            }}
                                            variant="fullWidth"
                                            orientation="horizontal"
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                my: 4,
                                border: "1px solid #EBEBEB",
                                borderRadius: "5px",
                                width: "300px",
                                px: "2rem",
                                py: "2rem",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontFamily: FONT_FAMILY.primary,
                                    mb: 2,
                                }}
                            >
                                Tags
                            </Typography>
                            <Box sx={{display: "flex", flexWrap: "wrap", gap: 1}}>
                                {tags.map((tag) => (
                                    <Button
                                        key={tag}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            fontFamily: FONT_FAMILY.primary,
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        {tag}
                                    </Button>
                                ))}
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                border: "1px solid #EBEBEB",
                                borderRadius: "5px",
                                width: "300px",
                                px: "2rem",
                                py: "2rem",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontFamily: FONT_FAMILY.primary,
                                    mb: 2,
                                }}
                            >
                                Popular Posts
                            </Typography>
                            {events.map((popularPost) => (
                                <Link
                                    to={`/event/${popularPost.id}`}
                                    key={popularPost.id}
                                    style={{textDecoration: "none"}}
                                >
                                    <Box sx={{mb: 2, display: "flex", alignItems: "center"}}>
                                        <CardMedia
                                            component="img"
                                            alt={popularPost.title}
                                            image={popularPost.image}
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: "8px",
                                                objectFit: "cover",
                                                mr: 2,
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontWeight: "500",
                                                    color: "text.primary",
                                                    fontFamily: FONT_FAMILY.primary,
                                                    "&:hover": {color: COLOR.primary},
                                                }}
                                            >
                                                {popularPost.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {popularPost.date}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default SingleBlogPage;
