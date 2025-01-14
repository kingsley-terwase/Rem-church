import {createTheme} from "@mui/material/styles";
import {FONT_FAMILY} from "../Config/Fonts";

const theme = createTheme({
    palette: {
        background: {
            default: "#fff", 
        },
    },
    typography: {
        fontFamily: FONT_FAMILY.primary, 
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#fff",
                    fontFamily: FONT_FAMILY.primary, 
                },
            },
        },
    },
});

export default theme;
