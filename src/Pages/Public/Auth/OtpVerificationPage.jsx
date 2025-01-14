import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {MuiOtpInput} from "mui-one-time-password-input";
import {useNavigate} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import {useVerifyOtp} from "../../../Hooks/authentication";
import {toastErr, toastWarn, toastSuccess} from "../../../Utilities/AlertService";
import {setUser} from "../../../Store/slices/userSlice";
import {FONT_FAMILY} from "../../../Config/Fonts";
import {useDispatch} from "react-redux";

function OtpVerificationPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {verifyOtp, loading, errMsg, successMsg} = useVerifyOtp();
    const [otp, setOtp] = useState("");
    const [count, setCount] = useState(60);
    const [_loading, _setLoading] = useState(false);
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem("otp_verification");
        if (storedData) {
            const data = JSON.parse(storedData);
            setJsonData(data);

            const sendAtTime = new Date(data.send_at).getTime();
            const nowTime = Date.now();
            const timeElapsed = Math.floor((nowTime - sendAtTime) / 1000);
            const remainingTime = Math.max(60 - timeElapsed, 0);

            setCount(remainingTime);

            if (remainingTime > 0) {
                const intervalId = setInterval(() => {
                    setCount((prevCount) => {
                        if (prevCount <= 1) {
                            clearInterval(intervalId);
                            return 0;
                        }
                        return prevCount - 1;
                    });
                }, 1000);

                return () => clearInterval(intervalId);
            } 
        } else {
            toastWarn("OTP data is missing. Please request a new OTP.");
        }
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        _setLoading(true);

        if (!otp || otp.length !== 6) {
            toastWarn("Invalid OTP!");
            _setLoading(false);
            return;
        }

        if (jsonData) {
            const response = await verifyOtp({
                email: jsonData.email,
                otp: Number(otp),
            });

            if (response?.success) {
                dispatch(setUser({user: response.user, token: response.token}));
                localStorage.removeItem("otp_verification");
                toastSuccess("OTP Verified! Redirecting to dashboard...");
                navigate("/dashboard");
            } else {
                toastErr(errMsg || "Invalid OTP. Please try again.");
            }
        }
        _setLoading(false);
    }

    return (
        <Stack display="grid" sx={{gridTemplateColumns: {xs: "1fr", md: "1fr 1fr"}}}>
            <Box sx={{display: {xs: "none", md: "flex"}, flexGrow: 1, width: "100%", height: "100vh"}}>
                <img
                    style={{width: "100%", objectFit: "cover", height: "100vh"}}
                    src="/Images/Hero.gif"
                    alt="Verification"
                />
            </Box>
            <Box sx={{flexGrow: 1, px: "2rem"}}>
                <Box sx={{my: 5, textAlign: "center"}}>
                    <Typography
                        variant="h4"
                        sx={{color: "#fff", fontFamily: FONT_FAMILY.primary, py: "2rem"}}
                        fontWeight={600}
                    >
                        Two-Step Verification
                    </Typography>
                    <Typography sx={{fontFamily: FONT_FAMILY.primary, color: "#fff"}}>
                        We sent a verification code to your email. <br /> Enter the code in the field below.
                    </Typography>
                    <Typography variant="h6" sx={{color: "#FBCC55", fontWeight: "bold", mt: 2}}>
                        Time remaining: {count} seconds
                    </Typography>
                </Box>
                <MuiOtpInput
                    sx={{
                        "& .MuiInputBase-input": {
                            color: "#000",
                            backgroundColor: "#fff",
                            borderColor: "#fff",
                            borderRadius: "8px",
                        },
                    }}
                    length={6}
                    autoFocus
                    value={otp}
                    onChange={setOtp}
                />
                <Stack direction="row" mt={5}>
                    <Button
                        sx={{
                            backgroundColor: "#10121A",
                            color: "#fff",
                            borderRadius: "30px",
                            border: "2px solid #FBCC55",
                        }}
                        variant="contained"
                        fullWidth
                        onClick={handleSubmit}
                        disabled={loading || _loading || count === 0}
                        size="large"
                    >
                        <Typography variant="body1">Verify</Typography>
                        {(_loading || loading) && <CircularProgress size={18} sx={{color: "white"}} />}
                    </Button>
                </Stack>
            </Box>
        </Stack>
    );
}

export default OtpVerificationPage;
