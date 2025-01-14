import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
    return (
        <Box sx={{width: "100%", maxWidth: 400, margin: "0 auto", padding: 1}}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Search..."
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "45px",
                        height: "40px",
                        padding: "0 10px",
                    },
                    "& .MuiInputBase-input": {
                        padding: "8px 10px",
                    },
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment sx={{cursor: "pointer"}} position="end">
                            <SearchIcon color="action" />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

export default SearchInput;
