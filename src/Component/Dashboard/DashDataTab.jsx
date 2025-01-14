function DashboardDataTab({ children, activeTab, tabKey }) {
  return activeTab === tabKey ? <div>{children}</div> : null
}

export default DashboardDataTab