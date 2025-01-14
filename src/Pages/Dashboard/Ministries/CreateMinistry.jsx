import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {blue} from "@mui/material/colors";
import Typography from "@mui/material/Typography";

const CreateMinistry = ({heading}) => {
    const [formValues, setFormValues] = useState({
        name: "",
        date: "",
        description: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    };

    const validate = () => {
        const formErrors = {};
        if (!formValues.name.trim()) formErrors.name = "Ministry name is required";
        if (!formValues.date) formErrors.date = "Ministry date is required";
        if (!formValues.description.trim()) formErrors.description = "Description is required";
        return formErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            console.log("Form Submitted:", formValues);
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <>
            <Typography variant="h6" sx={{px: 3}} color="initial">
                {heading}
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: "100%",
                    mx: "auto",
                    p: 3,
                    borderRadius: 2,
                    bgcolor: "#fff",
                }}
            >
                <Stack spacing={2}>
                    <TextField
                        label="Ministry Name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        fullWidth
                    />
                    <TextField
                        label="Ministry Date"
                        name="date"
                        type="date"
                        value={formValues.date}
                        onChange={handleChange}
                        error={!!errors.date}
                        helperText={errors.date}
                        InputLabelProps={{shrink: true}}
                        fullWidth
                    />
                    <TextField
                        label="Description"
                        name="description"
                        value={formValues.description}
                        onChange={handleChange}
                        error={!!errors.description}
                        helperText={errors.description}
                        multiline
                        rows={3}
                        fullWidth
                    />
                    <Button variant="contained" type="submit" sx={{mt: 2, py: "9px", backgroundColor: blue[400]}}>
                        Create Ministry
                    </Button>
                </Stack>
            </Box>
        </>
    );
};

export default CreateMinistry;
