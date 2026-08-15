import { Navigate, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Trading from './pages/Trading'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/trading" element={<Trading />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
