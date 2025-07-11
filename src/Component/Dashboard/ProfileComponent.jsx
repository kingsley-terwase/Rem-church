import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import AvatarBadge from "../../Layout/AvatarBadge";
import Typography from "@mui/material/Typography";
import {useLogout} from "../../Hooks/auth";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {toastErr, toastSuccess} from "../../Utilities/alertService";
export default function ProfileMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {logout, loading, error} = useLogout();

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        try {
            await logout();
            toastSuccess("Successfully Logged out");
        } catch (err) {
            toastErr(error || "Failed to Logout Pls. try again!");
        }
    };

    React.useEffect(() => {
        if (error) {
            toastErr(error);
        }
    }, [error]);

    return (
        <React.Fragment>
            <Box sx={{display: "flex", alignItems: "center", textAlign: "center"}}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        <AvatarBadge img={"/Images/church_2.png"} />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            "&::before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{horizontal: "right", vertical: "top"}}
                anchorOrigin={{horizontal: "right", vertical: "bottom"}}
            >
                <Link to="/dashboard/profile" style={{textDecoration: "none"}}>
                    <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                    </MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        handleClose();
                        handleLogout();
                    }}
                    disabled={loading}
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    {loading ? "Logging out..." : "Logout"}
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
