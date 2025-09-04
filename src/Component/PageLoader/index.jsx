import React from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Logo from "/Logo/Rem.png";

const PageLoader = ({ open }) => {
  return (
    <Backdrop open={open} sx={{ zIndex: 9999, color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <Box position="relative" display="flex" alignItems="center" justifyContent="center">
        <CircularProgress size={100} thickness={5} />
        <Box
          position="absolute"
          component="img"
          src={Logo}
          alt="Logo"
          sx={{ width: 40, height: 40 }}
        />
      </Box>
    </Backdrop>
  );
};

export default PageLoader;
