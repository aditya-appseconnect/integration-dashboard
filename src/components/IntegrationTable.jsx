import IntegrationRow from "./IntegrationRow"

function IntegrationTable({ integrations, onRetry, retrying }) {
  return (
    <table className="integration-table">
      <thead>
        <tr>
          <th>Integration Name</th>
          <th>Source App</th>
          <th>Target App</th>
          <th>Status</th>
          <th>Last Run Time</th>
          <th>Records Processed</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {integrations.map((integration) => (
          <IntegrationRow
            key={integration.id}
            integration={integration}
            onRetry={onRetry}
            retrying={retrying}
          />
        ))}
      </tbody>
    </table>
  )
}

export default IntegrationTable
