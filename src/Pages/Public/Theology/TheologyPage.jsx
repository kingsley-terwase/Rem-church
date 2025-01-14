import Box from "@mui/material/Box";
import React from "react";
import PageHeader from "../../../Component/PageHeader";
import {colleges} from "./static";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import { COLOR } from "../../../Config/Color";
const TheologyPage = () => {
    return (
        <>
            <PageHeader title="Theological Colleges" breadcrumb="Theological Colleges" />
            <Box sx={{py: "5rem", backgroundColor: "#f4f6f8"}}>
                <Container maxWidth="lg">
                    <Stack spacing={4}>
                        {colleges.map((college, index) => (
                            <Box
                                key={index}
                                sx={{
                                    padding: "4rem",
                                    backgroundColor: "#ffffff",
                                    borderRadius: "8px",
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{fontWeight: "bold", color: COLOR.primary, marginBottom: "1rem"}}
                                >
                                    {college.title}
                                </Typography>
                                <Typography variant="body1" sx={{color: "#555"}}>
                                    {college.description}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default TheologyPage;
