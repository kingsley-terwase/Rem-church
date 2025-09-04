import React, { useState, createContext, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { styles } from "./styles";
import DashboardNav from "./DashboardNav";
import DashboardSidenav from "./DashboardSidenav";

const LayoutContext = createContext();

export const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error("useLayout must be used within a LayoutProvider");
    }
    return context;
};

const DashboardLayout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const { user, isAuthenticated } = useSelector((state) => state.auth);

    // Improved role mapping with better error handling
    const getUserRole = (user) => {
        if (!user) {
            console.log('No user found, defaulting to guest');
            return 'guest';
        }
        
        const roleMap = {
            1: "admin",
            2: "pastor",
            3: "leader",
            4: "member",
        };
        
        let userRole = 'guest';
        
        if (typeof user.role === 'number' && roleMap[user.role]) {
            userRole = roleMap[user.role];
        } else if (typeof user.role === 'string' && user.role.trim()) {
            userRole = user.role.toLowerCase().trim();
        } else {
            console.warn('Invalid or missing user role, defaulting to guest');
        }
        
        console.log(`Final user role: ${userRole}`);
        return userRole;
    };

    const userRole = getUserRole(user);

    useEffect(() => {
        console.log('DashboardLayout mounted with:', {
            isAuthenticated,
            user,
            userRole,
            userRoleType: typeof userRole
        });
        
    }, [isAuthenticated, user, userRole]);

    const handleClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleTransitionEnd = () => setIsClosing(false);

    const handleToggle = () => {
        if (!isClosing) setMobileOpen(!mobileOpen);
    };

    const handleCollapseToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    const layoutValue = {
        isCollapsed,
        userRole,
        user,
        isAuthenticated,
        handleCollapseToggle,
    };

    return (
        <LayoutContext.Provider value={layoutValue}>
            <Box sx={styles.wrap}>
                <CssBaseline />
                <DashboardNav onTog={handleToggle} isCollapsed={isCollapsed} />
                <DashboardSidenav
                    mobileOpen={mobileOpen}
                    onClose={handleClose}
                    onTransitionEnd={handleTransitionEnd}
                    isCollapsed={isCollapsed}
                    onCollapseToggle={handleCollapseToggle}
                    userRole={userRole}
                />
                <Box component="main" sx={styles.content(isCollapsed)}>
                    {isAuthenticated && user && userRole ? (
                        children
                    ) : (
                        <Box sx={{ p: 3, textAlign: 'center' }}>
                            <p>Authentication required. Please log in to access the dashboard.</p>
                            {!isAuthenticated && <p>Status: Not authenticated</p>}
                            {!user && <p>Status: No user data</p>}
                            {!userRole && user && <p>Status: Invalid user role</p>}
                        </Box>
                    )}
                </Box>
            </Box>
        </LayoutContext.Provider>
    );
};

export default DashboardLayout;