import {useLocation} from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

function Layout({children}) {
    const location = useLocation();

    const noLayoutRoutes = ["/login", "/verify-email", "/forgot-password", "/sign-up", "/otp"];

    const hideLayout = noLayoutRoutes.includes(location.pathname);
    return (
        <>
            {!hideLayout && <Header />}
            {children}
            {!hideLayout && <Footer />}
        </>
    );
}

export default Layout;
