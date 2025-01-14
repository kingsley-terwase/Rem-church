import React, {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PageHeader from "../../../Component/PageHeader";
const GivingPage = () => {
    const [amount, setAmount] = useState("");
    const [isRecurring, setIsRecurring] = useState(false);

    const handleAmountChange = (value) => {
        setAmount(value);
    };

    const handleRecurringToggle = () => {
        setIsRecurring(!isRecurring);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic for processing the donation
        console.log({amount, isRecurring});
        alert("Thank you for your generous donation!");
    };

    return (
      <>
        <PageHeader title="Giving" breadcrumb="Giving"/>
            <Box sx={{maxWidth: "900px", margin: "auto", padding: "2rem 2rem"}}>
                <Box textAlign="center" mb={4}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Support Our Mission
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Your generosity helps us serve the community and spread the message of hope and love.
                    </Typography>
                </Box>

                <Paper elevation={3} sx={{padding: "2rem", marginBottom: "2rem"}}>
                    <Typography variant="h5" gutterBottom>
                        Make a Donation
                    </Typography>
                    <Stack spacing={2}>
                        <Grid container spacing={2}>
                            {[10, 20, 50, 100].map((value) => (
                                <Grid item xs={6} sm={3} key={value}>
                                    <Button
                                        variant={amount === value.toString() ? "contained" : "outlined"}
                                        onClick={() => handleAmountChange(value.toString())}
                                        fullWidth
                                    >
                                        ${value}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                        <TextField
                            label="Enter Custom Amount"
                            type="number"
                            value={amount}
                            onChange={(e) => handleAmountChange(e.target.value)}
                            fullWidth
                        />

                        <FormControlLabel
                            control={<Checkbox checked={isRecurring} onChange={handleRecurringToggle} />}
                            label="Make this a recurring donation"
                        />
                    </Stack>
                </Paper>

                <Paper elevation={3} sx={{padding: "2rem", marginBottom: "2rem"}}>
                    <Typography variant="h5" gutterBottom>
                        Contact Information
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <TextField label="Full Name" variant="outlined" fullWidth required />
                            <TextField label="Email Address" type="email" variant="outlined" fullWidth required />
                            <TextField label="Phone Number" type="tel" variant="outlined" fullWidth />
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Donate ${amount || "0"}
                            </Button>
                        </Stack>
                    </form>
                </Paper>

                <Box textAlign="center" mt={4} py={2} borderTop="1px solid #ddd">
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Reformed Evangelical Church Mission | 19, Gyado Hospital Road, Box 971 Gboko, Benue State. | (123) 456-7890
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default GivingPage;
