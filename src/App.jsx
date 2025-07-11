import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PublicRoutes from "./Routes/PublicRoutes";
import DashboardRoutes from "./Routes/DashboardRoutes";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./Theme/theme";
import { Provider } from 'react-redux'
import { persistor, store } from './Store'
import { PersistGate } from 'redux-persist/integration/react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
    useEffect(() => {
        AOS.init({
          duration: 1000,  
        });
      }, []);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <Routes>
                            <Route path="/*" element={<PublicRoutes />} />
                            <Route path="/dashboard/*" element={<DashboardRoutes />} />
                        </Routes>
                    </Router>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
