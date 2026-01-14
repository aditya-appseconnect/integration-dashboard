import { useEffect, useState } from "react"
import { fetchIntegrations, retryIntegration } from "../services/integrationService"
import SummaryCard from "../components/SummaryCard"
import IntegrationTable from "../components/IntegrationTable"
import Filters from "../components/Filters"
import LogsModal from "../components/LogsModal"
import "../styles/dashboard.css"

const Dashboard = () => {
  const [integrations, setIntegrations] = useState([])
  const [loading, setLoading] = useState(true)

  // 🔍 Filters state
  const [searchText, setSearchText] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [sourceFilter, setSourceFilter] = useState("")
  const [targetFilter, setTargetFilter] = useState("")

  // 🔁 Retry & logs state
  const [retryingId, setRetryingId] = useState(null)
  const [selectedIntegration, setSelectedIntegration] = useState(null)

  // 📡 Fetch integrations
  useEffect(() => {
    fetchIntegrations().then((data) => {
      setIntegrations(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <p>Loading integrations...</p>
  }

  // 🔹 Derived Metrics
  const totalIntegrations = integrations.length
  const runningCount = integrations.filter(i => i.status === "RUNNING").length
  const successCount = integrations.filter(i => i.status === "SUCCESS").length
  const failedCount = integrations.filter(i => i.status === "FAILED").length

  const successRate = totalIntegrations
    ? Math.round((successCount / totalIntegrations) * 100)
    : 0

  // 🔹 Unique values for filters
  const sources = [...new Set(integrations.map(i => i.sourceApp))]
  const targets = [...new Set(integrations.map(i => i.targetApp))]

  // 🔹 Filtered integrations (derived state)
  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch = integration.name
      .toLowerCase()
      .includes(searchText.toLowerCase())

    const matchesStatus =
      !statusFilter || integration.status === statusFilter

    const matchesSource =
      !sourceFilter || integration.sourceApp === sourceFilter

    const matchesTarget =
      !targetFilter || integration.targetApp === targetFilter

    return (
      matchesSearch &&
      matchesStatus &&
      matchesSource &&
      matchesTarget
    )
  })

  // 🔁 Retry handler
  const handleRetry = async (id) => {
    setRetryingId(id)

    await retryIntegration(id)

    setIntegrations((prev) =>
      prev.map((integration) =>
        integration.id === id
          ? { ...integration, status: "RUNNING" }
          : integration
      )
    )

    setRetryingId(null)
  }

  // 📄 Logs handlers
  const handleViewLogs = (integration) => {
    setSelectedIntegration(integration)
  }

  const handleCloseLogs = () => {
    setSelectedIntegration(null)
  }

  return (
    <div className="dashboard">
      <h2>Integration Monitoring Dashboard</h2>

      {/* 🔹 Summary Cards */}
      <div className="summary-container">
        <SummaryCard title="Total Integrations" value={totalIntegrations} />
        <SummaryCard title="Running Integrations" value={runningCount} />
        <SummaryCard title="Failed Today" value={failedCount} />
        <SummaryCard title="Success Rate" value={`${successRate}%`} />
      </div>

      {/* 🔍 Filters */}
      <Filters
        searchText={searchText}
        statusFilter={statusFilter}
        sourceFilter={sourceFilter}
        targetFilter={targetFilter}
        onSearchChange={setSearchText}
        onStatusChange={setStatusFilter}
        onSourceChange={setSourceFilter}
        onTargetChange={setTargetFilter}
        sources={sources}
        targets={targets}
      />

      {/* 📊 Integration Table */}
      <IntegrationTable
        integrations={filteredIntegrations}
        onRetry={handleRetry}
        retrying={retryingId}
        onViewLogs={handleViewLogs}
      />

      {/* 📄 Logs Modal */}
      <LogsModal
        integration={selectedIntegration}
        onClose={handleCloseLogs}
      />
    </div>
  )
}

export default Dashboard
