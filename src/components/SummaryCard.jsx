function SummaryCard({ title, value }) {
  const radius = 52
  const stroke = 8
  const normalizedRadius = radius - stroke * 0.5
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset =
    circumference - (value / 100) * circumference

  return (
    <div className="summary-card">
      <h4 className="card-title">{title}</h4>

      <div className="progress-wrapper">
        <svg height={radius * 2} width={radius * 2}>
         <defs>
  {/* Gradient */}
  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#22d3ee" />
    <stop offset="50%" stopColor="#38bdf8" />
    <stop offset="100%" stopColor="#6366f1" />
  </linearGradient>

  {/* Soft glow */}
  <filter id="glow">
    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
    <feMerge>
      <feMergeNode in="coloredBlur" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>


          {/* Background ring */}
          <circle
            stroke="#1f2933"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* Progress ring */}
          <circle
            stroke="url(#progressGradient)"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="progress-ring"
          />
        </svg>

        <span className="progress-text">{value}%</span>
      </div>
    </div>
  )
}

export default SummaryCard
