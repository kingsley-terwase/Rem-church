<Box
    sx={{
        position: "relative",
        width: "100%",
        height: {xs: "auto", md: "600px"},
    }}
>
    <Box
        sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
        }}
    />

    <img
        src="/Images/church_5.png"
        alt="church"
        style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }}
    />

    <Container
        maxWidth="xl"
        sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <Stack direction={{xs: "column", md: "row"}} spacing={4} justifyContent="space-between" alignItems="center">
            <Box
                sx={{
                    backgroundColor: COLOR.primary,
                    px: {xs: 2, md: 4},
                    py: {xs: 4, md: 6},
                    borderRadius: "5px",
                    textAlign: "center",
                    color: "#fff",
                    flex: 1,
                }}
            >
                <HeadsetMicIcon sx={{fontSize: "30px"}} />
                <Typography
                    variant="h5"
                    sx={{
                        py: 1,
                        fontWeight: "600",
                        fontFamily: FONT_FAMILY.primary,
                    }}
                >
                    Call us
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        py: 1,
                        fontWeight: "400",
                        fontFamily: FONT_FAMILY.primary,
                    }}
                >
                    19, Gyado Hospital Road, Box 971, Gboko, Benue
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        py: 1,
                        fontWeight: "600",
                        fontFamily: FONT_FAMILY.primary,
                    }}
                    color="#fff"
                >
                    +234 7089654323
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        py: 1,
                        fontWeight: "400",
                        fontFamily: FONT_FAMILY.primary,
                    }}
                    color="#fff"
                >
                    reformedevangelicalchurchmission@gmail.com
                </Typography>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    textAlign: {xs: "center", md: "left"},
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "600",
                        mb: 2,
                        fontFamily: FONT_FAMILY.primary,
                    }}
                >
                    GET IN TOUCH
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: "400",
                        mb: 2,
                        fontFamily: FONT_FAMILY.primary,
                    }}
                >
                    Don't hesitate to Contact us
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: "400",
                        mb: 3,
                        fontFamily: FONT_FAMILY.primary,
                    }}
                >
                    Feel free to contact us. Zegen Church WP Theme comes with sermons, ministries, events, testimonies,
                    staff members, and church locations shortcodes to enhance your website.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        textTransform: "capitalize",
                        fontWeight: "600",
                        fontFamily: FONT_FAMILY.primary,
                    }}
                >
                    Contact Us
                </Button>
            </Box>
        </Stack>
    </Container>
</Box>;
