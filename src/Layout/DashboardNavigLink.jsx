import { styled } from "@mui/material";
import { blue, blueGrey, cyan, grey } from "@mui/material/colors";
import {Link} from "react-router-dom";
import {FONT_FAMILY} from "../Config/Fonts";

const DashboardNavigLink = styled(Link)(({isactive}) => ({
    fontFamily: FONT_FAMILY.primary,
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textDecoration: "none",
    color: "#888B93",
    padding: "1rem 1rem",
    ...(isactive == 1 && {
        color: cyan[500],
        fontWeight: "500",
        "&:hover": {
            color: cyan[500],
            fontWeight: "700",
        },
    }),
}));

export default DashboardNavigLink;
