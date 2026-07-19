import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import type { SprintSummary } from '../../data/dashboardData'

export function VelocityChart({ data }: { data: SprintSummary[] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 lg:col-span-3">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-ink">Team velocity</h3>
        <span className="font-mono text-xs text-muted">Points completed / sprint</span>
      </div>
      <div style={{ width: '100%', height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#E4E7ED" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="sprint" tick={{ fontSize: 11, fill: '#6B7686' }} />
            <YAxis tick={{ fontSize: 12, fill: '#6B7686' }} />
            <Tooltip contentStyle={{ borderRadius: 8, borderColor: '#E4E7ED', fontSize: 12 }} />
            <Bar dataKey="velocity" name="Velocity" fill="#17A398" radius={[4, 4, 0, 0]} isAnimationActive />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
