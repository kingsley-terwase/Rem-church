import { yellow } from "@mui/material/colors";

export const styles = {
    DashCardWrap: {
        position: "relative",
        flex: { sm: "0 1 calc(50% - 16px)", md: "0 1 calc(33.333% - 16px)", lg: "0 1 calc(25% - 16px)" },
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
    },
    WrapIconBox: {
        // backgroundColor: yellow[900],
        padding: { xs: "2rem", md: "1rem" },
        borderRadius: "5px",
        position: "absolute",
        left: "20px",
        top: { xs: "-20px", md:"-20px"},
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
};
