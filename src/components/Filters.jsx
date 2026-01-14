function Filters({
  searchText,
  statusFilter,
  sourceFilter,
  targetFilter,
  onSearchChange,
  onStatusChange,
  onSourceChange,
  onTargetChange,
  sources,
  targets
}) {
  return (
    <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
      <input
        type="text"
        placeholder="Search integration..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="SUCCESS">Success</option>
        <option value="FAILED">Failed</option>
        <option value="RUNNING">Running</option>
        <option value="DISABLED">Disabled</option>
      </select>

      <select
        value={sourceFilter}
        onChange={(e) => onSourceChange(e.target.value)}
      >
        <option value="">All Sources</option>
        {sources.map((src) => (
          <option key={src} value={src}>{src}</option>
        ))}
      </select>

      <select
        value={targetFilter}
        onChange={(e) => onTargetChange(e.target.value)}
      >
        <option value="">All Targets</option>
        {targets.map((tgt) => (
          <option key={tgt} value={tgt}>{tgt}</option>
        ))}
      </select>
    </div>
  )
}

export default Filters
