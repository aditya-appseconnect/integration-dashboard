function RetryButton({ onRetry, loading }) {
  return (
    <button
      onClick={onRetry}
      disabled={loading}
      style={{
        padding: "6px 12px",
        cursor: loading ? "not-allowed" : "pointer"
      }}
    >
      {loading ? "Retrying..." : "Retry"}
    </button>
  )
}

export default RetryButton
