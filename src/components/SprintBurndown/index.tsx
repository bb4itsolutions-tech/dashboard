import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import type { BurndownPoint } from '../../data/dashboardData'

export function SprintBurndown({ data }: { data: BurndownPoint[] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-ink">
          Current sprint burndown
        </h3>
        <span className="font-mono text-xs text-muted">Sprint 24 · 14 days</span>
      </div>
      <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#E4E7ED" strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 12, fill: '#6B7686' }}
              label={{ value: 'Day', position: 'insideBottom', offset: -3, fontSize: 11 }}
            />
            <YAxis tick={{ fontSize: 12, fill: '#6B7686' }} />
            <Tooltip
              contentStyle={{ borderRadius: 8, borderColor: '#E4E7ED', fontSize: 12 }}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Line
              type="monotone"
              dataKey="ideal"
              name="Ideal"
              stroke="#D0D5DD"
              strokeDasharray="5 5"
              strokeWidth={2}
              dot={false}
              isAnimationActive
            />
            <Line
              type="monotone"
              dataKey="actual"
              name="Actual"
              stroke="#4C5FD5"
              strokeWidth={2.5}
              dot={{ r: 3 }}
              isAnimationActive
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
