import { Routes, Route, useLocation } from 'react-router-dom'
import DashboardHome from '../Pages/Dashboard/DashboardHome/DashboardHome'
import DashboardLayout from '../Layout/DashboardLayout'
import EventsPage from '../Pages/Dashboard/Events/EventsPage'
import ChurchPage from '../Pages/Dashboard/Church/ChurchPage'
import MinistryPage from '../Pages/Dashboard/Ministries/MinistryPage'
import FinancialPage from '../Pages/Dashboard/Finances/FinancialPage'
import ProfilePage from '../Pages/Dashboard/Profile/ProfilePage'
import EditProfile from '../Pages/Dashboard/Profile/EditProfile'
import { PageLoader } from '../Component'
import { useEffect, useState } from 'react'

const DashboardRoutes = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [location])
  return (
    <DashboardLayout>
      <PageLoader open={loading} />
      <Routes>
        <Route path='/' element={<DashboardHome />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/church' element={<ChurchPage />} />
        <Route path='/ministries' element={<MinistryPage />} />
        <Route path='/finance' element={<FinancialPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/edit-profile' element={<EditProfile />} />
      </Routes>
    </DashboardLayout>
  )
}

export default DashboardRoutes
