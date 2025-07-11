import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import {Link} from "react-router-dom";
import {FONT_FAMILY} from "../Config/Fonts";

const PageNotFound = () => {
    return (
        <div>
            <Container maxWidth="md" sx={{textAlign: "center", my: 10}}>
                <img src="/Illus/NotFound.png" alt="NotFound" />
                <Typography variant="h4" sx={{fontFamily: FONT_FAMILY.secondary, fontWeight: "600"}} color="error">
                    Ministry Not Found
                </Typography>
                <Link to="/" style={{textDecoration: "none"}}>
                    <Button variant="contained" sx={{mt: 3}}>
                        Back to Home
                    </Button>
                </Link>
            </Container>
        </div>
    );
};

export default PageNotFound;
