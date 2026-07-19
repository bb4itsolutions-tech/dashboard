import { useMemo, useState } from 'react'
import { KPICard } from './components/KPICard'
import { SprintBurndown } from './components/SprintBurndown'
import { VelocityChart } from './components/VelocityChart'
import { StatusPie } from './components/StatusPie'
import { DateRangeFilter, type DateRange } from './components/DateRangeFilter'
import { sprintHistory, currentBurndown, statusBreakdown } from './data/dashboardData'

const rangeToDays: Record<DateRange, number> = {
  '30d': 30,
  '90d': 90,
  '6m': 182,
  '12m': 365,
}

function App() {
  const [range, setRange] = useState<DateRange>('12m')

  const filteredSprints = useMemo(() => {
    const cutoff = new Date()
    cutoff.setDate(cutoff.getDate() - rangeToDays[range])
    return sprintHistory.filter((s) => new Date(s.date) >= cutoff)
  }, [range])

  const kpis = useMemo(() => {
    const list = filteredSprints.length ? filteredSprints : sprintHistory
    const totalCompleted = list.reduce((sum, s) => sum + s.completed, 0)
    const totalPlanned = list.reduce((sum, s) => sum + s.planned, 0)
    const avgVelocity = list.reduce((sum, s) => sum + s.velocity, 0) / list.length

    const half = Math.floor(list.length / 2) || 1
    const recentAvg =
      list.slice(-half).reduce((sum, s) => sum + s.velocity, 0) / (list.slice(-half).length || 1)
    const priorAvg =
      list.slice(0, half).reduce((sum, s) => sum + s.velocity, 0) / (list.slice(0, half).length || 1)
    const velocityChange = priorAvg ? ((recentAvg - priorAvg) / priorAvg) * 100 : 0

    const completionRate = totalPlanned ? (totalCompleted / totalPlanned) * 100 : 0

    return {
      totalCompleted,
      avgVelocity: Math.round(avgVelocity),
      completionRate,
      velocityChange,
    }
  }, [filteredSprints])

  return (
    <div className="min-h-screen bg-canvas">
      <header className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Team Task Manager
          </p>
          <h1 className="font-display text-2xl font-semibold text-ink">Sprint Dashboard</h1>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">Overview across the selected period</p>
          <DateRangeFilter value={range} onChange={setRange} />
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KPICard
            label="Tasks completed"
            value={String(kpis.totalCompleted)}
            change={kpis.velocityChange}
            accent="indigo"
          />
          <KPICard
            label="Avg. velocity"
            value={`${kpis.avgVelocity} pts`}
            change={kpis.velocityChange}
            accent="teal"
          />
          <KPICard
            label="Completion rate"
            value={`${kpis.completionRate.toFixed(0)}%`}
            change={kpis.completionRate - 85}
            accent="amber"
          />
          <KPICard
            label="Sprints in view"
            value={String(filteredSprints.length || sprintHistory.length)}
            change={0}
            accent="rose"
          />
        </div>

        <div className="mb-6">
          <SprintBurndown data={currentBurndown} />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <VelocityChart data={filteredSprints.length ? filteredSprints : sprintHistory} />
          <StatusPie data={statusBreakdown} />
        </div>
      </main>
    </div>
  )
}

export default App
