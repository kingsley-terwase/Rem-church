
import PageHeader from "../../../Component/PageHeader";
import { events } from "./static";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import EventsCard from "../../../Component/BlogCard";

const EventPage = () => {
    return (
        <>
            <PageHeader title="Events" breadcrumb="Event" />
            <Container maxWidth="lg" sx={{ py: "5rem"}}>
                <Grid container spacing={3}>
                    {events.map((event, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <EventsCard
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
