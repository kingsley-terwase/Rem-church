import Box from "@mui/material/Box";
import {styles} from "./styles";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
const NotiBadge = () => {
    return (
        <Box sx={styles.notiWrap}>
            <NotificationsOutlinedIcon style={styles.notiIcon} />
            <Box sx={styles.notiIndi} />
        </Box>
    );
};

export default NotiBadge;
