import {COLOR} from "../../../Config/Color";
import {FONT_FAMILY} from "../../../Config/Fonts";

export const style = {
    loveStyle: {
        backgroundColor: COLOR.primary,
        borderRadius: "50%",
        width: "25px",
        px: "21px",
        py: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {backgroundColor: "gray"},
        cursor: "pointer",
    },
    EventStyle: {
        top: {md: 550, xs: 620},
        zIndex: 1,
        left: {md: 210, xs: 20},
        right: {md: 210, xs: 20},
        position: "absolute",
        py: "4rem",
        px: "9px",
        justifyContent: "center",
        alignItems: "center",
    },
    BtnViewmore: {
        position: "relative",
        mt: {md: "9rem", xs: "27rem"},
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "capitalize",
        color: "white",
        borderRadius: "50px",
        px: "1rem",
        backgroundColor: COLOR.primary,
    },
    AttIcon: {
        position: "absolute",
        top: -15,
        backgroundColor: "red",
        px: "7px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: "7px",
        borderRadius: "50px",
        right: -12,
    },
    AboutUsImg: {
        position: "absolute",
        top: 50,
        zIndex: -1,
        bottom: {md: -30, xs: -10},
        right: {md: -30, xs: -10},
        width: "100%",
        backgroundColor: COLOR.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    rippleIcon: {
        fontSize: "48px",
        color: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
    },

    rippleBox1: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "50%",
        backgroundColor: COLOR.primary,
        animation: "ripple 2s infinite",
    },
    rippleBox2: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "50%",
        backgroundColor: COLOR.primary,
        animation: "ripple 2s infinite 1s",
    },
    rippleBox: {
        position: "relative",
        backgroundColor: COLOR.primary,
        borderRadius: "50px",
        display: "inline-block",
        width: "60px",
        height: "60px",
    },
    contentImg: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
        textAlign: "center",
        color: "white",
        px: {xs: 1, sm: 2}, // Reduced padding for xs, standard for larger screens
        width: {xs: "90%", sm: "auto"}, // Ensures the content width adjusts on smaller screens
    },

    ContactUsImg: {
        position: "absolute",
        top: "40%",
        left: "35%",
        transform: "translate(-40%, -40%)",
        zIndex: 2,
        color: "white",
        px: 2,
    },

    Overlay: {
        backgroundColor: "rgba(0, 0, 50, 0.7)",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    container: {
        position: "relative",
        width: "100%",
        height: "600px",
        backgroundImage: 'url("/Images/church_2.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        alignItems: "center",
        justifyContent: "space-between",
        "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1,
        },
    },
    floatingIconBox: {
        position: "absolute",
        top: {xs: "-10px", md: "-30px"},
        left: {xs: "5%", md: "60%"},
        transform: "translateX(-50%)",
        backgroundColor: COLOR.primary,
        borderRadius: "10px",
        padding: {md: "78px 15px", xs: 0},
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        zIndex: 2,
        width: {xs: "90%", sm: "400px"},
    },
    icon: {
        fontSize: "3rem",
        color: "#fff",
        marginBottom: "1rem",
    },
    contactText: {
        color: "#fff",
        fontSize: "15px",
        py: "9px",
        fontFamily: FONT_FAMILY.primary,
    },
    contentBox: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "5px",
        maxWidth: "600px",
        marginTop: {xs: "15rem", md: 0},
        marginBottom: {xs: "5rem", md: 0},
        padding: {md: "40px 20px", xs: 0},
        marginX: {md: "2rem", xs: 0},
        textAlign: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        width: "100%",
        zIndex: 1,
    },

    title: {
        fontSize: "17px",
        textTransform: "uppercase",
        fontWeight: "bold",
        marginBottom: "8px",
        color: COLOR.primary,
    },

    subtitle: {
        fontSize: "24px",
        textTransform: "capitalize",
        fontWeight: "bolder",
        marginBottom: "1rem",
        color: "#000",
    },

    description: {
        fontSize: "16px",
        lineHeight: "1.5",
        color: "#555",
    },
};
