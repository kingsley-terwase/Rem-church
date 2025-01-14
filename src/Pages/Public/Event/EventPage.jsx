import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import {style} from "./styles";
import {COLOR} from "../../../Config/Color";
import Stack from "@mui/material/Stack";
import {FONT_FAMILY} from "../../../Config/Fonts";
import PageHeader from "../../../Component/PageHeader";
import BlogCard from "../../../Component/BlogCard";
import { events } from "./static";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
const EventPage = () => {
    return (
        <>
            <PageHeader title="Events" breadcrumb="Event" />
            <Container maxWidth="lg" sx={{ py: "5rem"}}>
                <Grid container spacing={3}>
                    {events.map((event, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <BlogCard
                                id={event.id}
                                image={event.image}
                                date={event.date}
                                title={event.title}
                                description={event.description}
                                btn={event.btn}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default EventPage;
