function StatusBadge({ status }) {
  let color = "#999"

  if (status === "SUCCESS") color = "green"
  if (status === "FAILED") color = "red"
  if (status === "RUNNING") color = "orange"
  if (status === "DISABLED") color = "gray"

  return (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: "12px",
        fontSize: "12px",
        color: "white",
        backgroundColor: color
      }}
    >
      {status}
    </span>
  )
}

export default StatusBadge
