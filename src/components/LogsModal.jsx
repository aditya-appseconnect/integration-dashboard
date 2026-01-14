function LogsModal({ integration, onClose }) {
  if (!integration) return null

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3>{integration.name} - Logs</h3>

        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
          {integration.logs.length === 0 && (
            <p>No logs available</p>
          )}

          {integration.logs.map((log, index) => (
            <div
              key={index}
              style={{
                padding: "8px",
                marginBottom: "6px",
                backgroundColor:
                  log.level === "ERROR" ? "#ffe5e5" : "#f5f5f5",
                borderLeft:
                  log.level === "ERROR"
                    ? "4px solid red"
                    : "4px solid green"
              }}
            >
              <strong>{log.level}</strong> |{" "}
              {new Date(log.timestamp).toLocaleString()}
              <div>{log.message}</div>
            </div>
          ))}
        </div>

        <button onClick={onClose} style={{ marginTop: "12px" }}>
          Close
        </button>
      </div>
    </div>
  )
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const modalStyle = {
  background: "#fff",
  padding: "20px",
  width: "600px",
  borderRadius: "6px"
}

export default LogsModal
