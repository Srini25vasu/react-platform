import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <nav className="mb-6 flex gap-3 text-sm font-medium">
          <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100" to="/">Home</Link>
          <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100" to="/about">About</Link>
          <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100" to="/trading">Trading</Link>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight">About this platform</h1>
        <p className="mt-4 text-slate-600">
          This application provides an overview of trading performance, order activity, and key business metrics.
        </p>
      </div>
    </main>
  )
}
