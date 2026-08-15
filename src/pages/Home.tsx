import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Dashboard</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight">Trading Activity</h1>
          </div>
          <nav className="flex gap-3 text-sm font-medium">
            <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100" to="/">Home</Link>
            <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100" to="/about">About</Link>
            <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100" to="/trading">Trading</Link>
          </nav>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            { label: 'Total Orders', value: '1,284', tone: 'bg-sky-50 text-sky-700' },
            { label: 'Open Trades', value: '318', tone: 'bg-emerald-50 text-emerald-700' },
            { label: 'Revenue', value: '$84.2K', tone: 'bg-violet-50 text-violet-700' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${item.tone}`}>
                {item.label}
              </div>
              <div className="mt-4 text-3xl font-bold">{item.value}</div>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
