import AppRouter from './AppRouter'
import Layout from './components/layout'
import { ThemeProvider } from './contexts/theme-provider'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <AppRouter />
      </Layout>
    </ThemeProvider>
  )
}

export default App
