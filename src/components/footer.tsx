function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-center px-4 text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Srini Portfolio. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer