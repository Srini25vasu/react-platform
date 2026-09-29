import type { ReactNode } from 'react'

import About from './pages/About'
import Home from './pages/Home'
import Stopwatcher from './pages/hooks-practice/Stopwatcher-user-ref'
import Trading from './pages/Trading'

export interface AppRoute {
  path: string
  label: string
  element: ReactNode
  showInNav?: boolean
}

export const appRoutes: AppRoute[] = [
  { path: '/', label: 'Home', element: <Home />, showInNav: true },
  { path: '/about', label: 'About', element: <About />, showInNav: true },
  { path: '/trading', label: 'Trading', element: <Trading />, showInNav: true },
  { path: '/tasks', label: 'Tasks', element: <Trading />, showInNav: true },
  { path: '/hooks-practice', label: 'Hooks Practice', element: <Stopwatcher />, showInNav: true },
]
