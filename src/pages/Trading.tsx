import { Link } from 'react-router-dom'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const orders = [
  ['#1042', 'Ava Thompson', 'AAPL', 'Filled', '$2,480', '2026-08-15'],
  ['#1043', 'Noah Patel', 'MSFT', 'Pending', '$5,120', '2026-08-15'],
  ['#1044', 'Emma Chen', 'NVDA', 'Filled', '$8,900', '2026-08-14'],
  ['#1045', 'Liam Walker', 'TSLA', 'Review', '$3,700', '2026-08-14'],
]

export default function Trading() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Trading</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight">Order Overview</h1>
          </div>
          <nav className="flex gap-3 text-sm font-medium">
            <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100" to="/">Home</Link>
            <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100" to="/about">About</Link>
            <Link className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100" to="/trading">Trading</Link>
          </nav>
        </header>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-semibold">Recent orders</h2>
          </div>

          <div className="overflow-x-auto">
            <Table className="min-w-full text-left text-sm">
              <TableHeader className="bg-slate-50">
                <TableRow>
                  {['Order ID', 'Customer', 'Symbol', 'Status', 'Amount', 'Date'].map((heading) => (
                    <TableHead key={heading} className="px-6 py-3 text-slate-600">
                      {heading}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map(([id, customer, symbol, status, amount, date]) => (
                  <TableRow key={id} className="hover:bg-slate-50">
                    <TableCell className="px-6 py-4 font-medium text-slate-900">{id}</TableCell>
                    <TableCell className="px-6 py-4 text-slate-700">{customer}</TableCell>
                    <TableCell className="px-6 py-4 text-slate-700">{symbol}</TableCell>
                    <TableCell className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          status === 'Filled'
                            ? 'bg-emerald-100 text-emerald-700'
                            : status === 'Pending'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {status}
                      </span>
                    </TableCell>
                    <TableCell className="px-6 py-4 font-medium text-slate-900">{amount}</TableCell>
                    <TableCell className="px-6 py-4 text-slate-600">{date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </main>
  )
}
