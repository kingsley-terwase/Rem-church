import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PublicRoutes from "./Routes/PublicRoutes";
import DashboardRoutes from "./Routes/DashboardRoutes";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/*" element={<PublicRoutes />} />
                    <Route path="/dashboard/*" element={<DashboardRoutes />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
