export interface SprintSummary {
  sprint: string // e.g. 'Sprint 24'
  date: string // ISO date of sprint start, used for date-range filtering
  planned: number
  completed: number
  velocity: number
}

export interface BurndownPoint {
  day: number // day of the 14-day sprint
  ideal: number // remaining points if work were perfectly linear
  actual: number // actual remaining points
}

export interface StatusBreakdown {
  status: 'To Do' | 'In Progress' | 'In Review' | 'Done'
  count: number
}

// 12 sprints (~6 months of bi-weekly sprints), realistic variance
export const sprintHistory: SprintSummary[] = [
  { sprint: 'Sprint 13', date: '2026-02-02', planned: 34, completed: 29, velocity: 29 },
  { sprint: 'Sprint 14', date: '2026-02-16', planned: 36, completed: 33, velocity: 33 },
  { sprint: 'Sprint 15', date: '2026-03-02', planned: 32, completed: 27, velocity: 27 },
  { sprint: 'Sprint 16', date: '2026-03-16', planned: 38, completed: 35, velocity: 35 },
  { sprint: 'Sprint 17', date: '2026-03-30', planned: 35, completed: 31, velocity: 31 },
  { sprint: 'Sprint 18', date: '2026-04-13', planned: 40, completed: 38, velocity: 38 },
  { sprint: 'Sprint 19', date: '2026-04-27', planned: 37, completed: 30, velocity: 30 },
  { sprint: 'Sprint 20', date: '2026-05-11', planned: 41, completed: 39, velocity: 39 },
  { sprint: 'Sprint 21', date: '2026-05-25', planned: 39, completed: 36, velocity: 36 },
  { sprint: 'Sprint 22', date: '2026-06-08', planned: 43, completed: 40, velocity: 40 },
  { sprint: 'Sprint 23', date: '2026-06-22', planned: 42, completed: 37, velocity: 37 },
  { sprint: 'Sprint 24', date: '2026-07-06', planned: 45, completed: 41, velocity: 41 },
]

// Current sprint burndown: 14-day sprint, ideal vs actual remaining points
export const currentBurndown: BurndownPoint[] = [
  { day: 0, ideal: 45, actual: 45 },
  { day: 1, ideal: 41.8, actual: 44 },
  { day: 2, ideal: 38.6, actual: 42 },
  { day: 3, ideal: 35.4, actual: 39 },
  { day: 4, ideal: 32.1, actual: 37 },
  { day: 5, ideal: 28.9, actual: 34 },
  { day: 6, ideal: 25.7, actual: 30 },
  { day: 7, ideal: 22.5, actual: 26 },
  { day: 8, ideal: 19.3, actual: 22 },
  { day: 9, ideal: 16.1, actual: 19 },
  { day: 10, ideal: 12.9, actual: 15 },
  { day: 11, ideal: 9.6, actual: 11 },
  { day: 12, ideal: 6.4, actual: 8 },
  { day: 13, ideal: 3.2, actual: 4 },
  { day: 14, ideal: 0, actual: 4 },
]

export const statusBreakdown: StatusBreakdown[] = [
  { status: 'Done', count: 41 },
  { status: 'In Review', count: 6 },
  { status: 'In Progress', count: 9 },
  { status: 'To Do', count: 12 },
]

export const statusColors: Record<StatusBreakdown['status'], string> = {
  Done: '#17A398',
  'In Review': '#4C5FD5',
  'In Progress': '#E2A33D',
  'To Do': '#D0D5DD',
}
