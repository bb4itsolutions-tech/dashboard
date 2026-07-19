# Sprint Dashboard — Project 3

React + TypeScript + Recharts + Tailwind + Vite. Team task manager / project
tracker theme: sprint burndown, team velocity, task status breakdown, and a
working date-range filter.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Where the data lives
All mock data is in `src/data/dashboardData.ts` — 12 sprints of history,
a 14-day burndown for the current sprint, and a status breakdown. Replace
with a real API call later; the component props already expect this shape.

## Deploy (Vercel)
1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: sprint dashboard"
   git branch -M main
   git remote add origin https://github.com/<your-username>/sprint-dashboard.git
   git push -u origin main
   ```
2. Go to vercel.com → New Project → Import the repo.
3. Vercel auto-detects Vite. Click Deploy.
4. Live in under 2 minutes at `<project-name>.vercel.app`.

## Retrospective template
- **Prompts to get the first chart rendering correctly:** _______
  What was missing on the first attempt?
- **Hit the Recharts `ResponsiveContainer` zero-height issue?** _______
  (Fixed here by wrapping every chart in a div with an explicit `height`.)
- **How would you connect this to a real API?** _______
  What changes in the data layer?
- **Deployed URL:** _______
