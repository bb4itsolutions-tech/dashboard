export type DateRange = '30d' | '90d' | '6m' | '12m'

const options: { value: DateRange; label: string }[] = [
  { value: '30d', label: 'Last 30 days' },
  { value: '90d', label: 'Last 90 days' },
  { value: '6m', label: 'Last 6 months' },
  { value: '12m', label: 'Last 12 months' },
]

export function DateRangeFilter({
  value,
  onChange,
}: {
  value: DateRange
  onChange: (range: DateRange) => void
}) {
  return (
    <div className="flex gap-1 rounded-md border border-border bg-white p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`rounded px-3 py-1.5 font-mono text-xs transition ${
            value === opt.value
              ? 'bg-indigo text-white'
              : 'text-muted hover:bg-canvas hover:text-ink'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
