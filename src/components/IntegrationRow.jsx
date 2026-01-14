import StatusBadge from "./StatusBadge"
import RetryButton from "./RetryButton"

function IntegrationRow({ integration, onRetry, retrying }) {
  return (
    <tr>
      <td>{integration.name}</td>
      <td>{integration.sourceApp}</td>
      <td>{integration.targetApp}</td>
      <td>
        <StatusBadge status={integration.status} />
      </td>
      <td>
        {integration.lastRunTime
          ? new Date(integration.lastRunTime).toLocaleString()
          : "—"}
      </td>
      <td>{integration.recordsProcessed}</td>
      <td>
        {integration.status === "FAILED" && (
          <RetryButton
            onRetry={() => onRetry(integration.id)}
            loading={retrying === integration.id}
          />
        )}
      </td>
    </tr>
  )
}

export default IntegrationRow
