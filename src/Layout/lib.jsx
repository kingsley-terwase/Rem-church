// lib.js - Clean version without subNav and debugging
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ChurchIcon from "@mui/icons-material/Church";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { grey } from "@mui/material/colors";
import { FONT_FAMILY } from "../Config/Fonts";

export const togProps = {
  color: "inherit",
  "aria-label": "open drawer",
  edge: "start",
};

export const modalProps = {
  keepMounted: true,
};

export const navStackRow = {
  direction: "row",
  alignItems: "center",
  gap: 1,
};

export const searchTypoProps = {
  variant: "body2",
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  color: grey[400],
  fontFamily: FONT_FAMILY.secondary,
};

export const avatarBadgeOrigin = { vertical: "bottom", horizontal: "right" };

export const logoLayoutProps = {
  direction: "row",
  alignItems: "center",
  gap: 0.5,
};

export const navIconProps = {
  fontSize: "small",
  style: {
    color: "rgba(255, 255, 255, 0.65)",
  },
};

// Role constants
export const DASHBOARD_ROLES = {
  ADMIN: "admin",
  PASTOR: "pastor",
  LEADER: "leader",
  MEMBER: "member",
  GUEST: "guest",
};

// Role hierarchy
export const ROLE_HIERARCHY = {
  guest: 0,
  member: 1,
  leader: 2,
  pastor: 3,
  admin: 4,
};

// Navigation items (no subNavs)
export const navigationItems = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: () => <DashboardRoundedIcon {...navIconProps} />,
    roles: ["admin", "pastor", "leader", "member"],
    minRole: "member",
  },
  {
    label: "Events",
    link: "/dashboard/events",
    icon: () => <EventNoteIcon {...navIconProps} />,
    roles: ["admin", "pastor", "leader"],
    minRole: "leader",
  },
  {
    label: "Ministries",
    link: "/dashboard/ministries",
    icon: () => <GroupIcon {...navIconProps} />,
    roles: ["admin", "pastor", "leader"],
    minRole: "leader",
  },
  {
    label: "Church",
    link: "/dashboard/church",
    icon: () => <ChurchIcon {...navIconProps} />,
    roles: ["admin", "pastor"],
    minRole: "pastor",
  },
  {
    label: "Finance",
    link: "/dashboard/finance",
    icon: () => <AccountBalanceWalletIcon {...navIconProps} />,
    roles: ["admin", "pastor"],
    minRole: "pastor",
  },
  {
    label: "Users",
    link: "/dashboard/users",
    icon: () => <PeopleIcon {...navIconProps} />,
    roles: ["admin"],
    minRole: "admin",
  },
  {
    label: "Reports",
    link: "/dashboard/reports",
    icon: () => <AssessmentIcon {...navIconProps} />,
    roles: ["admin", "pastor"],
    minRole: "pastor",
  },
  {
    label: "Communications",
    link: "/dashboard/communications",
    icon: () => <NotificationsIcon {...navIconProps} />,
    roles: ["admin", "pastor", "leader"],
    minRole: "leader",
  },
  {
    label: "System Admin",
    link: "/dashboard/admin",
    icon: () => <AdminPanelSettingsIcon {...navIconProps} />,
    roles: ["admin"],
    minRole: "admin",
  },
  {
    label: "Profile",
    link: "/dashboard/profile",
    icon: () => <PersonIcon {...navIconProps} />,
    roles: ["admin", "pastor", "leader", "member", "guest"],
    minRole: "guest",
  },
  {
    label: "Settings",
    link: "/dashboard/settings",
    icon: () => <SettingsIcon {...navIconProps} />,
    roles: ["admin", "pastor", "leader", "member"],
    minRole: "member",
  },
];

// Map numeric role → string
export const mapRoleToString = (role) => {
  const roleMap = {
    1: "admin",
    2: "pastor",
    3: "leader",
    4: "member",
  };

  if (typeof role === "number") {
    return roleMap[role] || "guest";
  }

  return String(role).toLowerCase().trim();
};

// Role access check
export const hasRoleAccess = (userRole, itemRoles, minRole = null) => {
  const normalizedUserRole = mapRoleToString(userRole);

  if (itemRoles.includes(normalizedUserRole)) {
    return true;
  }

  if (minRole) {
    const userHierarchy = ROLE_HIERARCHY[normalizedUserRole] || 0;
    const requiredHierarchy = ROLE_HIERARCHY[minRole] || 0;
    return userHierarchy >= requiredHierarchy;
  }

  return false;
};

// Get navigation by role
export const getNavListByRole = (userRole) => {
  if (!userRole && userRole !== 0) return [];
  const normalizedRole = mapRoleToString(userRole);
  if (!normalizedRole) return [];

  return navigationItems.filter((item) =>
    hasRoleAccess(normalizedRole, item.roles, item.minRole)
  );
};

// Admin shortcut
export const getAdminNavItems = () => navigationItems;

// Role-based access by string
export const getNavItemsByRoleString = (roleString) => {
  return getNavListByRole(roleString);
};

// Helpers
export const getAllNavItems = () => navigationItems;

export const showSubMenu = () => false; // always false since subNavs removed

export const handleClick = (activeIndex, len, i, update) => {
  if (len < 1 || activeIndex === i) return update(null);
  return update(i);
};

export const showExpandIcon = () => false;

export const isActive = (path, subMenu, currentPath) => {
  return Number(path === currentPath);
};

// Export icons
export { ExpandMoreIcon, ExpandLessIcon, ChevronLeftIcon, ChevronRightIcon };
