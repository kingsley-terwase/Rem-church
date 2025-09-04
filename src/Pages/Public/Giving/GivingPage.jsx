import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    TextField,
    Button,
    Grid,
    Paper,
    Divider,
    Avatar,
    IconButton,
    InputAdornment,
    Alert,
    Tab,
    Tabs,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import {
    Church as ChurchIcon,
    Favorite as HeartIcon,
    AccountBalance as BankIcon,
    CreditCard as CardIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    LocationOn as LocationIcon,
    ContentCopy as CopyIcon,
    ExpandMore as ExpandMoreIcon,
    Security as SecurityIcon,
    Verified as VerifiedIcon,
    People as PeopleIcon,
    School as SchoolIcon,
    LocalHospital as HealthIcon,
    Home as ShelterIcon,
    VolunteerActivism as VolunteerIcon
} from '@mui/icons-material';
import PageHeader from '../../../Component/PageHeader';
import { COLOR } from '../../../Config/Color';


const GivingPage = () => {
    const [donationType, setDonationType] = useState('tithe');
    const [amount, setAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [donorInfo, setDonorInfo] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [tabValue, setTabValue] = useState(0);
    const [copiedAccount, setCopiedAccount] = useState('');

    const predefinedAmounts = [50, 100, 250, 500, 1000, 2500];

    const donationTypes = [
        { value: 'tithe', label: 'Tithe (10%)', description: 'Regular tithe offering' },
        { value: 'offering', label: 'General Offering', description: 'General church support' },
        { value: 'mission', label: 'Mission Fund', description: 'Support missionary work' },
        { value: 'building', label: 'Building Fund', description: 'Church construction & maintenance' },
        { value: 'youth', label: 'Youth Ministry', description: 'Support youth programs' },
        { value: 'charity', label: 'Charity Work', description: 'Community outreach programs' }
    ];

    const ministryPrograms = [
        { icon: <PeopleIcon />, title: 'Community Outreach', description: 'Supporting families in need' },
        { icon: <SchoolIcon />, title: 'Education Programs', description: 'Sunday school and Bible study' },
        { icon: <HealthIcon />, title: 'Healthcare Mission', description: 'Medical assistance for the community' },
        { icon: <ShelterIcon />, title: 'Shelter Support', description: 'Housing assistance for homeless' },
        { icon: <VolunteerIcon />, title: 'Volunteer Programs', description: 'Coordinating community service' }
    ];

    const bankAccounts = [
        {
            bankName: 'First National Bank',
            accountName: 'Reformed Evangelical Church Mission',
            accountNumber: '1234567890',
            routingNumber: '021000021',
            swift: 'FNBUSA33'
        },
        {
            bankName: 'Community Trust Bank',
            accountName: 'Reformed Evangelical Church Mission - Building Fund',
            accountNumber: '9876543210',
            routingNumber: '021000022',
            swift: 'CTBUSA44'
        }
    ];

    const handleCopyAccount = (text, accountType) => {
        navigator.clipboard.writeText(text);
        setCopiedAccount(accountType);
        setTimeout(() => setCopiedAccount(''), 2000);
    };

    const handleAmountSelect = (selectedAmount) => {
        setAmount(selectedAmount.toString());
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setAmount('');
    };

    const handleDonorInfoChange = (field) => (e) => {
        setDonorInfo(prev => ({
            ...prev,
            [field]: e.target.value
        }));
    };

    const handleSubmit = () => {
        const finalAmount = amount || customAmount;
        console.log('Donation submitted:', {
            type: donationType,
            amount: finalAmount,
            paymentMethod,
            donorInfo
        });
    };

    return (
        <Box sx={{
            backgroundColor: '#f8fafc',
        }}>
            <PageHeader title="Giving" breadcrumb="Giving" />

            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8} sx={{ mt:4 }}>
                        <Card elevation={0} sx={{ borderRadius: 3, border: '1px solid #e2e8f0' }}>
                            <CardContent sx={{ p: 4 }}>
                                <Tabs
                                    value={tabValue}
                                    onChange={(e, newValue) => setTabValue(newValue)}
                                    sx={{
                                        mb: 4,
                                        '& .MuiTab-root': {
                                            fontWeight: 600,
                                            fontSize: '16px'
                                        }
                                    }}
                                >
                                    <Tab label="Bank Transfer" icon={<BankIcon />} />
                                </Tabs>                                
                                {tabValue === 0 && (
                                    <Box>
                                        <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#1f2937' }}>
                                            Bank Account Information
                                        </Typography>

                                        {bankAccounts.map((account, index) => (
                                            <Card
                                                key={index}
                                                elevation={0}
                                                sx={{
                                                    mb: 3,
                                                    border: '2px solid #e5e7eb',
                                                    borderRadius: 2,
                                                    backgroundColor: '#ffffff',
                                                    '&:hover': {
                                                        borderColor: '#667eea',
                                                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.1)'
                                                    }
                                                }}
                                            >
                                                <CardContent sx={{ p: 3 }}>
                                                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1f2937' }}>
                                                        {account.bankName}
                                                    </Typography>

                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} sm={6}>
                                                            <Box sx={{
                                                                p: 2,
                                                                backgroundColor: '#f8fafc',
                                                                borderRadius: 1,
                                                                border: '1px solid #e2e8f0'
                                                            }}>
                                                                <Typography variant="caption" sx={{ color: '#6b7280', fontWeight: 600 }}>
                                                                    ACCOUNT NAME
                                                                </Typography>
                                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937' }}>
                                                                        {account.accountName}
                                                                    </Typography>
                                                                    <IconButton
                                                                        size="small"
                                                                        onClick={() => handleCopyAccount(account.accountName, `name-${index}`)}
                                                                        sx={{ color: COLOR.primary }}
                                                                    >
                                                                        <CopyIcon fontSize="small" />
                                                                    </IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Grid>

                                                        <Grid item xs={12} sm={6}>
                                                            <Box sx={{
                                                                p: 2,
                                                                backgroundColor: '#f8fafc',
                                                                borderRadius: 1,
                                                                border: '1px solid #e2e8f0'
                                                            }}>
                                                                <Typography variant="caption" sx={{ color: '#6b7280', fontWeight: 600 }}>
                                                                    ACCOUNT NUMBER
                                                                </Typography>
                                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937' }}>
                                                                        {account.accountNumber}
                                                                    </Typography>
                                                                    <IconButton
                                                                        size="small"
                                                                        onClick={() => handleCopyAccount(account.accountNumber, `account-${index}`)}
                                                                        sx={{ color: COLOR.primary }}
                                                                    >
                                                                        <CopyIcon fontSize="small" />
                                                                    </IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Grid>

                                                        <Grid item xs={12} sm={6}>
                                                            <Box sx={{
                                                                p: 2,
                                                                backgroundColor: '#f8fafc',
                                                                borderRadius: 1,
                                                                border: '1px solid #e2e8f0'
                                                            }}>
                                                                <Typography variant="caption" sx={{ color: '#6b7280', fontWeight: 600 }}>
                                                                    ROUTING NUMBER
                                                                </Typography>
                                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937' }}>
                                                                        {account.routingNumber}
                                                                    </Typography>
                                                                    <IconButton
                                                                        size="small"
                                                                        onClick={() => handleCopyAccount(account.routingNumber, `routing-${index}`)}
                                                                        sx={{ color: COLOR.primary}}
                                                                    >
                                                                        <CopyIcon fontSize="small" />
                                                                    </IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Grid>

                                                        <Grid item xs={12} sm={6}>
                                                            <Box sx={{
                                                                p: 2,
                                                                backgroundColor: '#f8fafc',
                                                                borderRadius: 1,
                                                                border: '1px solid #e2e8f0'
                                                            }}>
                                                                <Typography variant="caption" sx={{ color: '#6b7280', fontWeight: 600 }}>
                                                                    SWIFT CODE
                                                                </Typography>
                                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937' }}>
                                                                        {account.swift}
                                                                    </Typography>
                                                                    <IconButton
                                                                        size="small"
                                                                        onClick={() => handleCopyAccount(account.swift, `swift-${index}`)}
                                                                        sx={{color: COLOR.primary }}
                                                                    >
                                                                        <CopyIcon fontSize="small" />
                                                                    </IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>

                                                    {copiedAccount.includes(index.toString()) && (
                                                        <Alert
                                                            severity="success"
                                                            sx={{
                                                                mt: 2,
                                                                backgroundColor: '#f0fdf4',
                                                                border: '1px solid #22c55e',
                                                                '& .MuiAlert-message': { color: '#1f2937' }
                                                            }}
                                                        >
                                                            Account information copied to clipboard!
                                                        </Alert>
                                                    )}
                                                </CardContent>
                                            </Card>
                                        ))}

                                        <Alert
                                            severity="info"
                                            sx={{
                                                mt: 3,
                                                backgroundColor: '#f0f9ff',
                                                border: '1px solid #0ea5e9',
                                                '& .MuiAlert-message': { color: '#1f2937' }
                                            }}
                                        >
                                            <Typography variant="body2">
                                                <strong>For bank transfers:</strong> Please include your name and donation purpose in the transfer description.
                                                Email us at donate@gracechurch.org with transfer confirmation.
                                            </Typography>
                                        </Alert>
                                    </Box>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{mt:4}}>
                        <Card elevation={0} sx={{ borderRadius: 3, border: '1px solid #e2e8f0', mb: 3, backgroundColor: '#ffffff' }}>
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1f2937' }}>
                                    Our Ministry Programs
                                </Typography>
                                <List sx={{ p: 0 }}>
                                    {ministryPrograms.map((program, index) => (
                                        <ListItem key={index} sx={{ px: 0, py: 1 }}>
                                            <ListItemIcon sx={{ minWidth: 40 }}>
                                                <Avatar sx={{
                                                    width: 32,
                                                    height: 32,
                                                    backgroundColor: '#f0f4ff',
                                                    color: COLOR.primary
                                                }}>
                                                    {program.icon}
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937' }}>
                                                        {program.title}
                                                    </Typography>
                                                }
                                                secondary={
                                                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                                                        {program.description}
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>

                        <Card elevation={0} sx={{ borderRadius: 3, border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                    <VerifiedIcon sx={{ color: '#22c55e' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937' }}>
                                        Verified Organization
                                    </Typography>
                                </Box>

                                <Typography variant="body2" sx={{ color: '#6b7280', mb: 3 }}>
                                    Reformed Evangelical Church Mission is a registered 501(c)(3) non-profit organization.
                                    Tax ID: 12-3456789. All donations are tax-deductible.
                                </Typography>

                                <Divider sx={{ my: 2, borderColor: '#e5e7eb' }} />

                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1f2937' }}>
                                    Contact Information
                                </Typography>

                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="body2" sx={{ color: '#1f2937', fontWeight: 600 }}>
                                        Pastor John Smith
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                                        Senior Pastor & Financial Oversight
                                    </Typography>
                                </Box>

                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="body2" sx={{ color: '#1f2937', fontWeight: 600 }}>
                                        Office Hours
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                                        Monday - Friday: 9:00 AM - 5:00 PM
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                                        Saturday: 9:00 AM - 2:00 PM
                                    </Typography>
                                </Box>

                                <Button
                                    variant="outlined"
                                    fullWidth
                                    startIcon={<EmailIcon />}
                                    sx={{
                                        mt: 2,
                                        py: 1.5,
                                        fontWeight: 600,
                                        borderColor: COLOR.primary,
                                        color: COLOR.primary,
                                        backgroundColor: '#ffffff',
                                        '&:hover': {
                                            backgroundColor: '#f0f4ff',
                                            borderColor: COLOR.primary
                                        }
                                    }}
                                >
                                    Contact Us
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Paper
                    elevation={0}
                    sx={{
                        my: 4,
                        p: 4,
                        textAlign: 'center',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: 3
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1f2937' }}>
                        Thank You for Your Generosity
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#6b7280', maxWidth: 600, mx: 'auto' }}>
                        "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
                        for God loves a cheerful giver." - 2 Corinthians 9:7
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2,
                        mt: 3,
                        pt: 2,
                        borderTop: '1px solid #e5e7eb'
                    }}>
                        <SecurityIcon sx={{ color: '#22c55e' }} />
                        <Typography variant="caption" sx={{ color: '#6b7280' }}>
                            SSL Secured • 256-bit Encryption • PCI Compliant
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default GivingPage;