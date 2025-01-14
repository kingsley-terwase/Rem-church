import Box from "@mui/material/Box";
import {styles} from "./styles";

const AvatarBadge = ({img}) => {
    return (
        <Box sx={styles.avatarWrap}>
            <img style={styles.avatarImg} src={img} alt="user avatar" />
            <Box sx={styles.avatarBdg} />
        </Box>
    );
};

export default AvatarBadge;
