import {Routes, Route} from "react-router-dom";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import DashboardLayout from "../Layout/DashboardLayout";
import EventsPage from "../Pages/Dashboard/Events/EventsPage";
import ChurchPage from "../Pages/Dashboard/Church/ChurchPage";
import MinistryPage from "../Pages/Dashboard/Ministries/MinistryPage";
import FinancialPage from "../Pages/Dashboard/Finances/FinancialPage";

const DashboardRoutes = () => {
    return (
        <DashboardLayout>
            <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/church" element={<ChurchPage />} />
                <Route path="/ministries" element={<MinistryPage />} />
                <Route path="/finance" element={<FinancialPage />} />
            </Routes>
        </DashboardLayout>
    );
};

export default DashboardRoutes;
