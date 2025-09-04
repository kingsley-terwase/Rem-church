import {COLOR} from "../../Config/Color";
import {FONT_FAMILY} from "../../Config/Fonts";

export const style = {
    footerContainer: {
        backgroundColor: "#0a0812",
        padding: "5rem 1rem",
        color: "#fff",
    },
    footerContent: {
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
    },
    column: {
        flex: 1,
        minWidth: "200px",
    },
    columnHeader: {
        marginBottom: "1rem",
        fontFamily: FONT_FAMILY.font_one,
        fontWeight: "bold",
    },
    columnText: {
        fontFamily: FONT_FAMILY.font_one,
        marginBottom: "0.5rem",
        color: "#ddd",
    },
    socialIcons: {
        marginTop: "1rem",
        display: "flex",
        gap: "1rem",
        py: "9px",
    },
    iconButton: {
        color: COLOR.primary,
        backgroundColor: "#fff",
        "&:hover": {
            backgroundColor: "#000",
            color: "#fff",
        },
    },
    icon: {
        color: COLOR.primary,
    },
    newsletterBox: {
        display: "flex",
        marginTop: "1rem",
    },
    inputField: {
        flex: 1,
        padding: "0.5rem",
        borderRadius: "5px 0 0 5px",
        border: "1px solid #ddd",
        outline: "none",
    },
    subscribeButton: {
        padding: "0.8rem 1rem",
        backgroundColor: COLOR.primary,
        color: "#fff",
        fontFamily: FONT_FAMILY.font_one,
        borderRadius: "0 5px 5px 0",
        border: "none",
        cursor: "pointer",
    },
    footerBottom: {
        marginTop: "2rem",
        textAlign: "center",
        borderTop: "1px solid #333",
        paddingTop: "1rem",
        marginBottom: { xs:"8rem", md:0}
    },
    footerText: {
        color: "#aaa",
        fontFamily: FONT_FAMILY.font_one,
    },
};
