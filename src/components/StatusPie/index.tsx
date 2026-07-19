import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { statusColors, type StatusBreakdown } from '../../data/dashboardData'

export function StatusPie({ data }: { data: StatusBreakdown[] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 lg:col-span-2">
      <div className="mb-4">
        <h3 className="font-display text-sm font-semibold text-ink">Task status</h3>
      </div>
      <div style={{ width: '100%', height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="status"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={2}
              isAnimationActive
            >
              {data.map((entry) => (
                <Cell key={entry.status} fill={statusColors[entry.status]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: 8, borderColor: '#E4E7ED', fontSize: 12 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
