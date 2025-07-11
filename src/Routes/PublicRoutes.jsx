import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import BackToTopBtn from '../Component/BackToTopBtn'
import EventPage from '../Pages/Public/Event/EventPage'
import AboutUsPage from '../Pages/Public/AboutUs/AboutUsPage'
import Ministries from '../Pages/Public/Ministries/Ministries'
import DepartmentsPage from '../Pages/Public/Departments/DepartmentsPage'
import TheologyPage from '../Pages/Public/Theology/TheologyPage'
import ContactUsPage from '../Pages/Public/ContactUs/ContactUsPage'
import GivingPage from '../Pages/Public/Giving/GivingPage'
import SingleBlogPage from '../Pages/Public/SingleBlog/SingleBlogPage'
import SingleView from '../Pages/Public/SingleView/SingleView'
import { Login } from '../Pages/Public/Auth/Login'
import HomePage from '../Pages/Public/Home/Index'
import { ForgotPassword } from '../Pages/Public/Auth/forgotPassword'
import PageLoader from '../Component/PageLoader'

const PublicRoutes = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [location])

  return (
    <Layout>
      <PageLoader open={loading} />

      <Routes location={location}>
        <Route path='/' element={<HomePage />} />
        <Route path='/event' element={<EventPage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/ministries' element={<Ministries />} />
        <Route path='/departments' element={<DepartmentsPage />} />
        <Route path='/theology' element={<TheologyPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
        <Route path='/giving' element={<GivingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/events/:id' element={<SingleBlogPage />} />
        <Route path='/ministries/:id' element={<SingleView />} />
      </Routes>

      <BackToTopBtn />
    </Layout>
  )
}

export default PublicRoutes
