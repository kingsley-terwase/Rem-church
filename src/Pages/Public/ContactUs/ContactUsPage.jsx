import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    TextField,
    Button,
    Paper,
    Divider,
    IconButton,
    Alert,
    Fade,
    useTheme,
    alpha
} from '@mui/material';
import {
    Phone,
    Email,
    LocationOn,
    Schedule,
    Send,
    Facebook,
    Twitter,
    Instagram,
    YouTube,
    Church,
    Person,
    Message
} from '@mui/icons-material';
import { FONT_FAMILY } from '../../../Config/Fonts';
import ContactUs from '../../../Component/ContactUs';
import PageHeader from '../../../Component/PageHeader';

const ContactPage = () => {
    const theme = useTheme();

    return (
        <>
            <PageHeader title="Contact us" breadcrumb="Contact us" />
            <ContactUs />
        </>
    );
};

export default ContactPage;