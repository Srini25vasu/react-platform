import { NavLink } from 'react-router-dom'

import { cn } from '@/lib/utils'
import { appRoutes } from '@/routes'

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <span className="text-lg font-semibold text-slate-900">Srini Portfolio</span>
        <nav className="flex items-center gap-4">
          {appRoutes
            .filter((route) => route.showInNav)
            .map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium text-slate-600 transition-colors hover:text-slate-900',
                    isActive && 'text-slate-900'
                  )
                }
              >
                {route.label}
              </NavLink>
            ))}
        </nav>
      </div>
    </header>
  )
}

export default Header