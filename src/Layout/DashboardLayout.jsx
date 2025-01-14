import {useState} from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {styles} from "./styles";
import DashboardNav from "./DashboardNav";
import DashboardSideNav from "./DashboardSideNav";

const DashboardLayout = ({children}) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleTransitionEnd = () => setIsClosing(false);

    const handleToggle = () => {
        if (!isClosing) setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={styles.wrap}>
            <CssBaseline />
            <DashboardNav onTog={handleToggle} />
            <DashboardSideNav mobileOpen={mobileOpen} onClose={handleClose} onTransitionEnd={handleTransitionEnd} />
            <Box component="main" sx={styles.content}>
                {children}
            </Box>
        </Box>
    );
};

export default DashboardLayout;
