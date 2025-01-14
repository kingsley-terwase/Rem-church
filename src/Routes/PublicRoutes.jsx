import Layout from "../Layout/Layout";
import {Routes, Route} from "react-router-dom";
import BackToTopBtn from "../Component/BackToTopBtn";
import Home from "../Pages/Public/Home/Index";
import EventPage from "../Pages/Public/Event/EventPage";
import AboutUsPage from "../Pages/Public/AboutUs/AboutUsPage";
import Ministries from "../Pages/Public/Ministries/Ministries";
import DepartmentsPage from "../Pages/Public/Departments/DepartmentsPage";
import TheologyPage from "../Pages/Public/Theology/TheologyPage";
import ContactUsPage from "../Pages/Public/ContactUs/ContactUsPage";
import GivingPage from "../Pages/Public/Giving/GivingPage";
import SingleBlogPage from "../Pages/Public/SingleBlog/SingleBlogPage";
import SingleView from "../Pages/Public/SingleView/SingleView";

const PublicRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/event" element={<EventPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/ministries" element={<Ministries />} />
                <Route path="/departments" element={<DepartmentsPage />} />
                <Route path="/theology" element={<TheologyPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/giving" element={<GivingPage />} />
                <Route path="/events/:id" element={<SingleBlogPage />} />
                <Route path="/ministry/:id" element={<SingleView />} />
            </Routes>
            <BackToTopBtn />
        </Layout>
    );
};

export default PublicRoutes;
