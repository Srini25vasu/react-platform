function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Dashboard</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight">Trading Activity</h1>
          </div>
          <button className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700">
            New order
          </button>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
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

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-lg font-semibold">Recent orders</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  {['Order ID', 'Customer', 'Symbol', 'Status', 'Amount', 'Date'].map((heading) => (
                    <th key={heading} className="px-6 py-3 font-medium text-slate-600">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {[
                  ['#1042', 'Ava Thompson', 'AAPL', 'Filled', '$2,480', '2026-08-15'],
                  ['#1043', 'Noah Patel', 'MSFT', 'Pending', '$5,120', '2026-08-15'],
                  ['#1044', 'Emma Chen', 'NVDA', 'Filled', '$8,900', '2026-08-14'],
                  ['#1045', 'Liam Walker', 'TSLA', 'Review', '$3,700', '2026-08-14'],
                ].map(([id, customer, symbol, status, amount, date]) => (
                  <tr key={id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">{id}</td>
                    <td className="px-6 py-4 text-slate-700">{customer}</td>
                    <td className="px-6 py-4 text-slate-700">{symbol}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                        status === 'Filled'
                          ? 'bg-emerald-100 text-emerald-700'
                          : status === 'Pending'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-slate-200 text-slate-700'
                      }`}>
                        {status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-900">{amount}</td>
                    <td className="px-6 py-4 text-slate-600">{date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
