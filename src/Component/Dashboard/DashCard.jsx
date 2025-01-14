import Box from "@mui/material/Box";
const DashboardCard = ({children, ...rest}) => {
    return (
        <Box
            sx={{
                boxSizing: "border-box",
                borderRadius: "50px",
                mb: "40px",
                padding: {xs: "0", md: "30px"},
                display: {md: "block", xs: "flex"},
                flexDirection: "column",
                alignItems: {md: "start", xs: "center"},
                width: "100%",
                backgroundColor: "#fff",
            }}
            {...rest}
        >
            {children}
        </Box>
    );
};

export default DashboardCard;
