interface KPICardProps {
  label: string
  value: string
  change: number // percentage change vs previous period
  accent?: 'indigo' | 'teal' | 'amber' | 'rose'
}

const accentMap = {
  indigo: 'text-indigo',
  teal: 'text-teal',
  amber: 'text-amber',
  rose: 'text-rose',
}

export function KPICard({ label, value, change, accent = 'indigo' }: KPICardProps) {
  const isPositive = change >= 0
  return (
    <div className="rounded-lg border border-border bg-white p-5">
      <p className="font-mono text-xs uppercase tracking-wide text-muted">{label}</p>
      <p className={`mt-2 font-display text-3xl font-semibold ${accentMap[accent]}`}>{value}</p>
      <p className={`mt-1 font-mono text-xs ${isPositive ? 'text-teal' : 'text-rose'}`}>
        {isPositive ? '▲' : '▼'} {Math.abs(change).toFixed(1)}% vs last period
      </p>
    </div>
  )
}
