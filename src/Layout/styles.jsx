import { blueGrey, grey, lightGreen, red } from "@mui/material/colors"
import { drawerWidth, layoutPad, navHeight } from "./lib"
import { FONT_FAMILY } from "../Config/Fonts"


export const styles = {
  wrap: {
    display: "flex",
    backgroundColor: grey[100]
  },
  togBtn: {
    mr: 2,
    display: { sm: "none" }
  },
  sidenavWrap: {
    width: { sm: drawerWidth },
    flexShrink: { sm: 0 },
  },
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
  paperLg: {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      backgroundColor: "transparent",
      boxSizing: "border-box",
      width: drawerWidth,
      border: "none",
      overflowY: "visible"
    }
  },
  content: {
    flexGrow: 1,
    boxSizing: "border-box",
    pl: layoutPad + "px",
    pr: layoutPad + "px",
    pt: navHeight + layoutPad + "px",
    pb: layoutPad + "px",
    maxWidth: "100%",
    minHeight: "100vh"
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    pl: { xs: layoutPad + "px", md: `${drawerWidth + layoutPad}px` },
    pr: layoutPad + "px",
    height: navHeight + "px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 99,
    backgroundColor: "white",
    filter: "drop-shadow(2px 0 1px rgba(100, 100, 100, 0.5))"
  },
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
  sidenav: {
    boxSizing: "border-box",
    px:5,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0a0812",
    minHeight: "100vh"
  },
  logoWrap: {
    height: "80px",
    display: "flex",
    alignItems: "center",
    px: "16px"
  },
  logoImg: {
    height: "40px"
  },
  logoLbl: {
    textTransform: "uppercase",
    color: "rgba(220, 220, 220, 0.65)",
    fontWeight: 600,
    fontFamily: FONT_FAMILY.primary,
    p: 0,
    m: 0
  },
  sideNavig: {
    flex: 1,
    height: "100%",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "5px"
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "999px"
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555"
    }
  },
  navLInkIn: {
    display: "flex",
    alignItems: "center",
    gap: 1
  },
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
  }
}
