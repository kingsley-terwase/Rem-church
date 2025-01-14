import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { COLOR } from '../Config/Color';

const BackToTopBtn = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        showButton && (
            <Fab
                onClick={scrollToTop}
                sx={{
                  backgroundColor: COLOR.primary,
                  "&:hover": {
                    backgroundColor: "white",
                  },
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    zIndex: 1000,
                }}
            >
                <KeyboardArrowUpIcon sx={{ color: "#fff", "&:hover":{ color: "#000"}}} />
            </Fab>
        )
    );
};

export default BackToTopBtn;
