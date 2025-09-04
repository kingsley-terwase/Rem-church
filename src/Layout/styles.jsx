import { blueGrey, grey, lightGreen, red } from "@mui/material/colors"
import { FONT_FAMILY } from "../Config/Fonts"

export const drawerWidth = 240;
export const collapsedDrawerWidth = 70;
export const layoutPad = 20;
export const navHeight = 68;

export const styles = {
  wrap: {
    display: "flex",
    backgroundColor: grey[100],
    minHeight: "100vh"
  },
  togBtn: {
    mr: 2,
    display: { sm: "none" }
  },
  sidenavWrap: (isCollapsed) => ({
    width: { sm: isCollapsed ? collapsedDrawerWidth : drawerWidth },
    flexShrink: { sm: 0 },
    transition: "width 0.3s ease"
  }),
  paperSm: {
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": {
      backgroundColor: "transparent",
      boxSizing: "border-box",
      width: drawerWidth,
      border: "none",
      overflowY: "visible"
    }
  },
  paperLg: (isCollapsed) => ({
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      backgroundColor: "transparent",
      boxSizing: "border-box",
      width: isCollapsed ? collapsedDrawerWidth : drawerWidth,
      border: "none",
      overflowY: "visible",
      transition: "width 0.3s ease"
    }
  }),
  content: (isCollapsed) => ({
    flexGrow: 1,
    boxSizing: "border-box",
    padding: `${navHeight + layoutPad}px ${layoutPad}px ${layoutPad}px ${layoutPad}px`,
    maxWidth: "100%",
    minHeight: "100vh",
    marginLeft: {
      xs: 0,
      sm: 0 // Remove margin as flexbox handles positioning
    },
    transition: "margin-left 0.3s ease"
  }),
  nav: (isCollapsed) => ({
    position: "fixed",
    top: 0,
    left: {
      xs: 0,
      sm: isCollapsed ? collapsedDrawerWidth : drawerWidth
    },
    right: 0,
    height: navHeight,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1200,
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    px: `${layoutPad}px`,
    transition: "left 0.3s ease"
  }),
  searchIconBtn: {
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    gap: 0.5
  },
  loginStat: {
    height: "6px",
    width: "6px",
    borderRadius: "999px",
    backgroundColor: lightGreen[500]
  },
  notiWrap: {
    position: "relative",
    cursor: "pointer"
  },
  notiIndi: {
    position: "absolute",
    top: "3px",
    right: "3px",
    height: "10px",
    width: "10px",
    border: "1px solid white",
    borderRadius: "999px",
    backgroundColor: red[500]
  },
  notiIcon: {
    color: grey[700],
    fontSize: "26px"
  },
  avatarWrap: {
    position: "relative",
    cursor: "pointer"
  },
  avatarImg: {
    objectFit: "cover",
    height: "40px",
    width: "40px",
    borderRadius: "999px",
    backgroundColor: "white"
  },
  avatarBdg: {
    height: "10px",
    width: "10px",
    borderRadius: "999px",
    border: "1px solid white",
    backgroundColor: lightGreen[500],
    position: "absolute",
    right: "3px",
    bottom: "3px"
  },
  sidenav: (isCollapsed) => ({
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0a0812",
    minHeight: "100vh",
    width: "100%",
    px: isCollapsed ? 1 : 2
  }),
  logoWrap: (isCollapsed) => ({
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: isCollapsed ? "center" : "flex-start",
    px: isCollapsed ? 0 : "16px"
  }),
  logoImg: {
    height: "40px"
  },
  logoLbl: (isCollapsed) => ({
    textTransform: "uppercase",
    color: "rgba(220, 220, 220, 0.65)",
    fontWeight: 600,
    fontFamily: FONT_FAMILY.primary,
    p: 0,
    m: 0,
    display: isCollapsed ? "none" : "block"
  }),
  sideNavig: {
    flex: 1,
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "4px"
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(255,255,255,0.2)",
      borderRadius: "999px"
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgba(255,255,255,0.3)"
    }
  },
  navLInkIn: (isCollapsed) => ({
    display: "flex",
    alignItems: "center",
    gap: isCollapsed ? 0 : 1,
    justifyContent: isCollapsed ? "center" : "flex-start"
  }),
  navLinkSub: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "rgba(255, 255, 255, 0.75)",
    textDecoration: "none",
    padding: "0.5rem 1.5rem",
    borderRadius: "6px",
    fontFamily: FONT_FAMILY.secondary,
    fontSize: "0.75rem",
    fontWeight: 600
  },
  linkWrap: {
    display: "flex",
    flexDirection: "column"
  },
  iconColor: {
    color: "rgba(255, 255, 255, 0.75)"
  },
  collapseToggle: {
    position: "absolute",
    top: "50%",
    right: "-12px",
    transform: "translateY(-50%)",
    backgroundColor: "#0a0812",
    border: "2px solid rgba(255,255,255,0.2)",
    color: "white",
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    display: { xs: "none", sm: "flex" },
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "16px",
    zIndex: 1300,
    "&:hover": {
      backgroundColor: "#1a1625",
      borderColor: "rgba(255,255,255,0.4)"
    }
  }
}